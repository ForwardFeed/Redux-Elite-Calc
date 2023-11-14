local CONTINUATION = 0
local TEXT = 1
local BINARY = 2
local CLOSE = 8
local PING = 9
local PONG = 10

local sformat = string.format
local srep = string.rep
local ssub = string.sub
local sbyte = string.byte
local schar = string.char
local unpack = table.unpack
local tremove = table.remove
local tinsert = table.insert
local tconcat = table.concat
local mmin = math.min
local mfloor = math.floor
local mrandom = math.random


function bits(...)
   local n = 0
   for _,bitn in pairs{...} do
   n = n + 2^bitn
   end
   return n
end

local bit_7 = bits(7)
local bit_0_3 = bits(0,1,2,3)
local bit_0_6 = bits(0,1,2,3,4,5,6)

function bnot(a)
   return ~a
end

function band(a,b) 
   return (a & b)
end

function bor(a,b)
   return (a | b) 
end

function rshift(a, b)
   return a >> b
end

function lshift(a, b)
   return a << b
end

function read_n_bytes (str, pos, n)
   pos = pos or 1
   return pos+n, string.byte(str, pos, pos + n - 1)
end

function read_int8 (str, pos)
   return read_n_bytes(str, pos, 1)
end

function read_int16 (str, pos)
   local new_pos,a,b = read_n_bytes(str, pos, 2)
   return new_pos, lshift(a, 8) + b
end

function read_int32(str, pos)
   local new_pos,a,b,c,d = read_n_bytes(str, pos, 4)
   return new_pos,
   lshift(a, 24) +
   lshift(b, 16) +
   lshift(c, 8 ) +
   d
end

function write_int16(v)
   return pack_bytes(rshift(v, 8), band(v, 0xFF))
end

function write_int32(v)
   return pack_bytes(
   band(rshift(v, 24), 0xFF),
   band(rshift(v, 16), 0xFF),
   band(rshift(v,  8), 0xFF),
   band(v, 0xFF)
   )
end

local MOD = 2^32
function bxor(a, b, c, ...)
   local r = 0
   local f = math.floor
   for i = 0, 31 do
   local x = a / 2 + b / 2
   if x ~= f(x) then
      r = r + 2^i
   end
   a = f(a / 2)
   b = f(b / 2)
   end
   return f(r)
end

function xor_mask(encoded,mask,payload)
   local transformed,transformed_arr = {},{}
   -- xor chunk-wise to prevent stack overflow.
   -- sbyte and schar multiple in/out values
   -- which require stack
   for p=1,payload,2000 do
      local last = mmin(p+1999,payload)
      local original = {sbyte(encoded,p,last)}
      for i=1,#original do
         local j = (i-1) % 4 + 1
         transformed[i] = bxor(original[i],mask[j])
      end
      local xored = schar(unpack(transformed,1,#original))
      tinsert(transformed_arr,xored)
      end
   return tconcat(transformed_arr)
end

function encode_header_small (header, payload)
   return schar(header, payload)
end

function encode_header_medium (header, payload, len)
   return schar(header, payload, band(rshift(len, 8), 0xFF), band(len, 0xFF))
end

function encode_header_big(header, payload, high, low)
   return schar(header, payload)..write_int32(high)..write_int32(low)
end

function frame(data,opcode,masked,fin)
   local header = opcode or 1-- TEXT is default opcode
   if fin == nil or fin == true then
      header = bor(header,bit_7)
   end
   local payload = 0
   if masked then
      payload = bor(payload,bit_7)
   end
   local len = #data
   local chunks = {}
   if len < 126 then
      payload = bor(payload,len)
      tinsert(chunks,encode_header_small(header,payload))
   elseif len <= 0xffff then
      payload = bor(payload,126)
      tinsert(chunks,encode_header_medium(header,payload,len))
   elseif len < 2^53 then
      local high = mfloor(len/2^32)
      local low = len - high*2^32
      payload = bor(payload,127)
      tinsert(chunks,encode_header_big(header,payload,high,low))
   end
   if not masked then
      tinsert(chunks,data)
   else
   local m1 = mrandom(0,0xff)
   local m2 = mrandom(0,0xff)
   local m3 = mrandom(0,0xff)
   local m4 = mrandom(0,0xff)
   local mask = {m1,m2,m3,m4}
   tinsert(chunks,string.char(m1,m2,m3,m4))
   tinsert(chunks,xor_mask(data,mask,#data))
   end
   return tconcat(chunks)
end

function unframe(encoded)
   local encoded_bak = encoded
   if #encoded < 2 then
   return nil,2-#encoded
   end
   local pos,header,payload
   pos,header = read_int8(encoded,1)
   pos,payload = read_int8(encoded,pos)
   local high,low
   encoded = ssub(encoded,pos)
   local bytes = 2
   local fin = band(header,bit_7) > 0
   local opcode = band(header,bit_0_3)
   local mask = band(payload,bit_7) > 0
   payload = band(payload,bit_0_6)
   
   if payload > 125 then
      if payload == 126 then
         if #encoded < 2 then
            return nil,2-#encoded
         end
         pos,payload = read_int16(encoded,1)
      elseif payload == 127 then
         if #encoded < 8 then
            return nil,8-#encoded
         end
         pos,high = read_int32(encoded,1)
         pos,low = read_int32(encoded,pos)
         payload = high*2^32 + low
         if payload < 0xffff or payload > 2^53 then
            assert(false,'INVALID PAYLOAD '..payload)
         end
      else
         assert(false,'INVALID PAYLOAD '..payload)
      end
      encoded = ssub(encoded,pos)
      bytes = bytes + pos - 1
   end
   local decoded
   if mask then
   local bytes_short = payload + 4 - #encoded
   if bytes_short > 0 then
      return nil,bytes_short
   end
   local m1,m2,m3,m4
   pos,m1 = read_int8(encoded,1)
   pos,m2 = read_int8(encoded,pos)
   pos,m3 = read_int8(encoded,pos)
   pos,m4 = read_int8(encoded,pos)
   encoded = ssub(encoded,pos)
   local mask = {
      m1,m2,m3,m4
   }
   decoded = xor_mask(encoded,mask,payload)
   bytes = bytes + 4 + payload
   else
   local bytes_short = payload - #encoded
   if bytes_short > 0 then
      return nil,bytes_short
   end
   if #encoded > payload then
      decoded = ssub(encoded,1,payload)
   else
      decoded = encoded
   end
   bytes = bytes + payload
   end
   return decoded,fin,opcode,encoded_bak:sub(bytes+1),mask
end

local frame_close = function(code,reason)
   if code then
   local data = write_int16(code)
   if reason then
      data = data..tostring(reason)
   end
   return data
   end
   return ''
end

local unframe_close = function(data)
   local _,code,reason
   if data then
   if #data > 1 then
      _,code = read_int16(data,1)
   end
   if #data > 2 then
      reason = data:sub(3)
   end
   end
   return code,reason
end

function bytes_to_uint32(a, b, c, d)
   return a * 0x1000000 + b * 0x10000 + c * 0x100 + d
end

-- Splits a uint32 number into four bytes.
function uint32_to_bytes(a)
   local a4 = a % 256
   a = (a - a4) / 256
   local a3 = a % 256
   a = (a - a3) / 256
   local a2 = a % 256
   local a1 = (a - a2) / 256
   return a1, a2, a3, a4
end

local ops = {}

local bytes_to_uint32 = bytes_to_uint32
local uint32_to_bytes = uint32_to_bytes

function ops.uint32_lrot(a, bits)
   local power = 2 ^ bits
   local inv_power = 4294967296 / power
   local lower_bits = a % inv_power
   return (lower_bits * power) + ((a - lower_bits) / inv_power)
end

local function make_op_cache(bit_op, bits)
   if bits == 1 then
      return {[0] = bit_op(0, 0), bit_op(0, 1), bit_op(1, 0), bit_op(1, 1)}
   end

   local half_bits = bits / 2
   local size = 2 ^ bits
   local half_size = 2 ^ half_bits
   local half_cache = make_op_cache(bit_op, half_bits)

   local cache = {}


   for a1 = 0, half_size - 1 do
      local a1_half_size = a1 * half_size

      for a2 = 0, half_size - 1 do
         local a2_size = a2 * half_size
         local a_size = (a1_half_size + a2) * size

         for b1 = 0, half_size - 1 do
            local a_size_plus_b1_half_size = a_size + b1 * half_size
            local v1_half_size = half_cache[a1_half_size + b1] * half_size

            for b2 = 0, half_size - 1 do
               cache[a_size_plus_b1_half_size + b2] = v1_half_size + half_cache[a2_size + b2]
            end
         end
      end
   end

   return cache
end

local byte_and_cache = make_op_cache(function(a, b) return a * b end, 8)
local byte_xor_cache = make_op_cache(function(a, b) return a == b and 0 or 1 end, 8)

function ops.byte_xor(a, b)
   return byte_xor_cache[a * 256 + b]
end

function ops.uint32_xor_3(a, b, c)
   local a1, a2, a3, a4 = uint32_to_bytes(a)
   local b1, b2, b3, b4 = uint32_to_bytes(b)
   local c1, c2, c3, c4 = uint32_to_bytes(c)

   return bytes_to_uint32(
      byte_xor_cache[a1 * 256 + byte_xor_cache[b1 * 256 + c1]],
      byte_xor_cache[a2 * 256 + byte_xor_cache[b2 * 256 + c2]],
      byte_xor_cache[a3 * 256 + byte_xor_cache[b3 * 256 + c3]],
      byte_xor_cache[a4 * 256 + byte_xor_cache[b4 * 256 + c4]]
   )
end

function ops.uint32_xor_4(a, b, c, d)
   local a1, a2, a3, a4 = uint32_to_bytes(a)
   local b1, b2, b3, b4 = uint32_to_bytes(b)
   local c1, c2, c3, c4 = uint32_to_bytes(c)
   local d1, d2, d3, d4 = uint32_to_bytes(d)

   return bytes_to_uint32(
      byte_xor_cache[a1 * 256 + byte_xor_cache[b1 * 256 + byte_xor_cache[c1 * 256 + d1]]],
      byte_xor_cache[a2 * 256 + byte_xor_cache[b2 * 256 + byte_xor_cache[c2 * 256 + d2]]],
      byte_xor_cache[a3 * 256 + byte_xor_cache[b3 * 256 + byte_xor_cache[c3 * 256 + d3]]],
      byte_xor_cache[a4 * 256 + byte_xor_cache[b4 * 256 + byte_xor_cache[c4 * 256 + d4]]]
   )
end

function ops.uint32_ternary(a, b, c)
   local a1, a2, a3, a4 = uint32_to_bytes(a)
   local b1, b2, b3, b4 = uint32_to_bytes(b)
   local c1, c2, c3, c4 = uint32_to_bytes(c)

   -- (a & b) + (~a & c) has less bitwise operations than (a & b) | (~a & c).
   return bytes_to_uint32(
      byte_and_cache[b1 * 256 + a1] + byte_and_cache[c1 * 256 + 255 - a1],
      byte_and_cache[b2 * 256 + a2] + byte_and_cache[c2 * 256 + 255 - a2],
      byte_and_cache[b3 * 256 + a3] + byte_and_cache[c3 * 256 + 255 - a3],
      byte_and_cache[b4 * 256 + a4] + byte_and_cache[c4 * 256 + 255 - a4]
   )
end

function ops.uint32_majority(a, b, c)
   local a1, a2, a3, a4 = uint32_to_bytes(a)
   local b1, b2, b3, b4 = uint32_to_bytes(b)
   local c1, c2, c3, c4 = uint32_to_bytes(c)

   -- (a & b) + (c & (a ~ b)) has less bitwise operations than (a & b) | (a & c) | (b & c).
   return bytes_to_uint32(
      byte_and_cache[a1 * 256 + b1] + byte_and_cache[c1 * 256 + byte_xor_cache[a1 * 256 + b1]],
      byte_and_cache[a2 * 256 + b2] + byte_and_cache[c2 * 256 + byte_xor_cache[a2 * 256 + b2]],
      byte_and_cache[a3 * 256 + b3] + byte_and_cache[c3 * 256 + byte_xor_cache[a3 * 256 + b3]],
      byte_and_cache[a4 * 256 + b4] + byte_and_cache[c4 * 256 + byte_xor_cache[a4 * 256 + b4]]
   )
end

local uint32_lrot = ops.uint32_lrot
local byte_xor = ops.byte_xor
local uint32_xor_3 = ops.uint32_xor_3
local uint32_xor_4 = ops.uint32_xor_4
local uint32_ternary = ops.uint32_ternary
local uint32_majority = ops.uint32_majority

local bytes_to_uint32 = bytes_to_uint32
local uint32_to_bytes = uint32_to_bytes



local function hex_to_binary(hex)
   return (hex:gsub("..", function(hexval)
      return schar(tonumber(hexval, 16))
   end))
end

-- Calculates SHA1 for a string, returns it encoded as 40 hexadecimal digits.
function sha1(str)
   -- Input preprocessing.
   -- First, append a `1` bit and seven `0` bits.
   local first_append = schar(0x80)

   -- Next, append some zero bytes to make the length of the final message a multiple of 64.
   -- Eight more bytes will be added next.
   local non_zero_message_bytes = #str + 1 + 8
   local second_append = srep(schar(0), -non_zero_message_bytes % 64)

   -- Finally, append the length of the original message in bits as a 64-bit number.
   -- Assume that it fits into the lower 32 bits.
   local third_append = schar(0, 0, 0, 0, uint32_to_bytes(#str * 8))

   str = str .. first_append .. second_append .. third_append
   assert(#str % 64 == 0)

   -- Initialize hash value.
   local h0 = 0x67452301
   local h1 = 0xEFCDAB89
   local h2 = 0x98BADCFE
   local h3 = 0x10325476
   local h4 = 0xC3D2E1F0

   local w = {}

   -- Process the input in successive 64-byte chunks.
   for chunk_start = 1, #str, 64 do
      -- Load the chunk into W[0..15] as uint32 numbers.
      local uint32_start = chunk_start

      for i = 0, 15 do
         w[i] = bytes_to_uint32(sbyte(str, uint32_start, uint32_start + 3))
         uint32_start = uint32_start + 4
      end

      -- Extend the input vector.
      for i = 16, 79 do
         w[i] = uint32_lrot(uint32_xor_4(w[i - 3], w[i - 8], w[i - 14], w[i - 16]), 1)
      end

      -- Initialize hash value for this chunk.
      local a = h0
      local b = h1
      local c = h2
      local d = h3
      local e = h4

      -- Main loop.
      for i = 0, 79 do
         local f
         local k

         if i <= 19 then
            f = uint32_ternary(b, c, d)
            k = 0x5A827999
         elseif i <= 39 then
            f = uint32_xor_3(b, c, d)
            k = 0x6ED9EBA1
         elseif i <= 59 then
            f = uint32_majority(b, c, d)
            k = 0x8F1BBCDC
         else
            f = uint32_xor_3(b, c, d)
            k = 0xCA62C1D6
         end

         local temp = (uint32_lrot(a, 5) + f + e + k + w[i]) % 4294967296
         e = d
         d = c
         c = uint32_lrot(b, 30)
         b = a
         a = temp
      end

      -- Add this chunk's hash to result so far.
      h0 = (h0 + a) % 4294967296
      h1 = (h1 + b) % 4294967296
      h2 = (h2 + c) % 4294967296
      h3 = (h3 + d) % 4294967296
      h4 = (h4 + e) % 4294967296
   end

   return sformat("%08x%08x%08x%08x%08x", h0, h1, h2, h3, h4)
end

function binary(str)
   return hex_to_binary(sha1(str))
end

-- Precalculate replacement tables.
local xor_with_0x5c = {}
local xor_with_0x36 = {}

for i = 0, 0xff do
   xor_with_0x5c[schar(i)] = schar(byte_xor(0x5c, i))
   xor_with_0x36[schar(i)] = schar(byte_xor(0x36, i))
end

-- 512 bits.
local BLOCK_SIZE = 64

function hmac(key, text)
   if #key > BLOCK_SIZE then
      key = binary(key)
   end

   local key_xord_with_0x36 = key:gsub('.', xor_with_0x36) .. srep(schar(0x36), BLOCK_SIZE - #key)
   local key_xord_with_0x5c = key:gsub('.', xor_with_0x5c) .. srep(schar(0x5c), BLOCK_SIZE - #key)

   return sha1(key_xord_with_0x5c .. binary(key_xord_with_0x36 .. text))
end

function hmac_binary(key, text)
   return hex_to_binary(hmac(key, text))
end


function B64enc(data) -- encoding
   local b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
   return ((data:gsub('.', function(x) 
      local r,b='',x:byte()
      for i=8,1,-1 do r=r..(b%2^i-b%2^(i-1)>0 and '1' or '0') end
      return r;
   end)..'0000'):gsub('%d%d%d?%d?%d?%d?', function(x)
      if (#x < 6) then return '' end
      local c=0
      for i=1,6 do c=c+(x:sub(i,i)=='1' and 2^(6-i) or 0) end
      return b:sub(c+1,c+1)
   end)..({ '', '==', '=' })[#data%3+1])
end

function B64dec(data) -- decoding
   local b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
   data = string.gsub(data, '[^'..b..'=]', '')
   return (data:gsub('.', function(x)
      if (x == '=') then return '' end
      local r,f='',(b:find(x)-1)
      for i=6,1,-1 do r=r..(f%2^i-f%2^(i-1)>0 and '1' or '0') end
      return r;
   end):gsub('%d%d%d?%d?%d?%d?%d?%d?', function(x)
      if (#x ~= 8) then return '' end
      local c=0
      for i=1,8 do c=c+(x:sub(i,i)=='1' and 2^(8-i) or 0) end
            return string.char(c)
   end))
end

function string.fromhex(str)
   return (str:gsub('..', function (cc)
      return string.char(tonumber(cc, 16))
   end))
end


--- HTTP PROTOCOL FOR WEBSOCKETS

function sec_websocket_accept (sec_websocket_key)
   local a = sec_websocket_key .. "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" --- magic string
   local sha1 = sha1(a)
   assert((#sha1 % 2) == 0)
   return B64enc(string.fromhex(sha1))
end


local http_headers = function(request)
   request = request .. '\r\n' --- add it just in case websocat doesn't add an extra eol
   local headers = {}
   if not request:match('.*HTTP/1%.1') then
      return headers
   end
   request = request:match('[^\r\n]+[(\r\n)\n](.*)')
   local empty_line
   for line in request:gmatch('[^\r\n]*[(\r\n)\n]') do
      local name,val = line:match('([^%s]+)%s*:%s*([^\r\n]+)')
      if name and val then
         name = name:lower()
         if not name:match('sec%-websocket') then
            val = val:lower()
         end
         if not headers[name] then
            headers[name] = val
         else
            headers[name] = headers[name]..','..val
         end
      elseif line == '\r\n' or line == '\n' then
         empty_line = true
      else
         assert(false,line..'('..#line..')')
      end
   end
   return headers,request:match('\r\n\r\n(.*)')
end

function accept_upgrade(request)
   local headers = http_headers(request)
   --- skipping protocol politeness blablabla just accept
   local lines = {
      'HTTP/1.1 101 Switching Protocols',
      'Upgrade: websocket',
      'Connection: Upgrade',
      string.format('Sec-WebSocket-Accept: %s',sec_websocket_accept(headers['sec-websocket-key'])),
   }
   return table.concat(lines,'\r\n') .. '\r\n\r\n' 
   --- skipping parsing protocols
end

server = nil
ST_sockets = {}
nextID = 1

function ST_stop(id)
   local sock = ST_sockets[id]
   ST_sockets[id] = nil
   sock:close()
end

function ST_format(id, msg, isError)
   local prefix = "Socket " .. id
   if isError then
      prefix = prefix .. " Error: "
   else
      prefix = prefix .. " Received: "
   end
   return prefix .. msg
end

function ST_error(id, err)
   console:error(ST_format(id, err, true))
   ST_stop(id)
end

function WS_Handshake(sock, id, http_data)
   local res = accept_upgrade(http_data)
   if not res then
      console:error(ST_format(id, "Bad HTTP request", true))
      ST_stop(id)
      return
   end
   --- res = frame(res, TEXT, false)
   console:log('[Sent ' .. tostring(sock:send(res)) .. ' bytes of data]\n' .. res)
end

function ST_handshake(id)
   local sock = ST_sockets[id]
   if not sock then return end
   while true do
      local p, err = sock:receive(1024)
      if p then
         local http_data = p:match("^(.-)%s*$")
         console:log( '[Received ' .. tostring(#http_data) .. ' bytes of data]\n'.. http_data)
         WS_Handshake(sock, id, http_data)
         sock:remove(ST_sockets[id].idOfCallback)
         sock:add("received", function() ST_received(id) end)
      else
         if err ~= socket.ERRORS.AGAIN then
            console:error(ST_format(id, err, true))
            ST_stop(id)
         end
         return
      end
   end
end

function WS_Receive(sock)
   local first_opcode
   local frames
   local bytes = 3
   local encoded = ''
   while true do
      local chunk, err = sock:receive(bytes)
      ---console:log('chunk ..' .. chunk)
      if err then
         if err ~= socket.ERRORS.AGAIN then
            console:error(ST_format(id, err, true))
            ST_stop(id)
         end
         return
      end
      if chunk then
         ---console:log('[Received ' .. tostring(#chunk) .. ' bytes of data]\n')
         encoded = encoded..chunk
         local decoded, fin, opcode, _, masked = unframe(encoded)
         if decoded then
            if opcode == CLOSE then
               --- connection close
               ST_sockets[id] = nil
               return 
            end
            if not first_opcode then
               first_opcode = opcode
            end
            if not fin then
               if not frames then
                  frames = {}
               end
               bytes = 3
               encoded = ''
               tinsert(frames,decoded)
            elseif not frames then
               return decoded
            else
               tinsert(frames,decoded)
               return tconcat(frames),first_opcode
            end
         else 
            bytes = fin
         end
      end
   end
end

function ST_received(id)
   local sock = ST_sockets[id]
   if not sock then return end
   local message = WS_Receive(sock)
   if not message then return end
   local splitedMsgs = splitMessages(message)
   for _, msg in ipairs(splitedMsgs) do
      ---console:log('reading message: ' ..msg)
      local answer, opscode = readMessage(msg)
      --- console:log('answering: ' ..answer)
      if answer then
         if not opscode then
            opscode = TEXT
         end
         sock:send(frame(answer, TEXT))
      end
   end     
    
   
end

function ST_accept()
   console:log('accept')
   local sock, err = server:accept()
   if err then
      console:error(ST_format("Accept", err, true))
      return
   end
   local id = nextID
   nextID = id + 1
   ST_sockets[id] = sock
   ST_sockets[id].idOfCallback = sock:add("received", function() ST_handshake(id) end)
   sock:add("error", function() ST_error(id) end)
   console:log(ST_format(id, "Connected"))
end

function start_server()
   local port = 8684
   server = nil
   while not server do
      server, err = socket.bind(nil, port)
      if err then
         if err == socket.ERRORS.ADDRESS_IN_USE then
            console:error(ST_format("Please click on file > reset (on mGBA)\n", err, true))
            break
         else
            console:error(ST_format("Bind", err, true))
            break
         end
      else
         local ok
         ok, err = server:listen()
         if err then
            server:close()
            console:error(ST_format("Listen", err, true))
         else
            console:log("Socket Server Test: Listening on port " .. port)
            server:add("received", ST_accept)
         end
      end
   end
end
--- end of boilerplate for websocket server

--- data extraction
--- offset of variable i need:
--- tons of stuff in battle.h

local offsets = {
	partyCount = 0x2025445, --- gPlayerPartyCount
	party = 0x2025448, --- gPlayerParty
	storage = 0x202a270, --- gPokemonStorage
	enemy = 0x20256a0, --- gEnemyParty
	trainerList = 0x83d4ab0, --- gTrainers
	trainerA = 0x2039b3a,--- gTrainerBattleOpponent_A u16
	trainerB = 0x2039b3c,--- gTrainerBattleOpponent_B u16
	main = 0x3002c00,--- gMain
	battleType = 0x2024e58, --- gBattleTypeFlags
	terrain = 0x2024e5c, --- gBattleTerrain
	save1 = 0x20269b8, --- gSaveBlock1Ptr
	save2 = 0x2025a04, --- gSaveBlock2Ptr
	facing = 0x203be58, --- gPlayerFacingPosition
   battleResults = 0x3004ae0, --- gBattleResults
   battleOutcome = 0x202522a, --- gBattleOutcome
   maxPartyLevel = 0x2025440, --- gMaxPartyLevel u8
   takenDmg = 0x2025094, --- gTakenDmg
   battleMons = 0x2024ef0, --- gBattleMons
   activeBattler = 0x2024ed0 , --- gActiveBattler
   battlerFainted = 0x202509e , --- gBattlerFainted u8
   battlerTarget = 0x202509d , --- gBattlerTarget u8
   battlerAttacker = 0x202509c, --- gBattlerAttacker u8
   battlersCount = 0x2024ed8, --- gBattlersCount u8
   moveResult = 0x202510a, --- gMoveResultFlags u16
   battleMoves = 0x , --- gBattleMoves
   currentMove = 0x, --- 
   gLastHitBy = 0x , ---
   gBattlescriptCurrInstr = 0x , ---gBattlescriptCurrInstr u8*, index used: 0,1,2,3,4,5,6,9,13 
}

local gameData = {
   team = {},
   storage = {},
   state = nil,
   fainted = nil,
   target = nil,
   attacker = nil,
   battlersCount = nil,
   moveResult = nil,
}
function getTeam(data)
	local curPartyCount = emu:read8(offsets.partyCount)
	if (curPartyCount > 6 or curPartyCount < 0) then
		ScriptOffsetWrong()
		return "0:1" --- inform the script is outdated
	elseif curPartyCount == 0 then
		---the save seems brand new.
		return nil
	end
   local hasChanged = false
   if data == '1' then hasChanged = true end
	for i=1,curPartyCount do
		local address = offsets.party + (100 * (i - 1))
      local pokeData = emu:readRange(address, 100)
      if gameData.team[i] ~= pokeData then
         gameData.team[i] = pokeData
         hasChanged = true
      end
	end
   if hasChanged then
      local data = ""
      for i=1,curPartyCount do
         data = data .. B64enc(gameData.team[i])
         if i ~= curPartyCount then
            data = data .. ";"
         end
      end
      return data
   end
   return nil
end

--- read only the first 60 pokemons in the box
function getStorage(data)
   local nbMonsToRead = 60
	local nbMons = 1 --- send only if there is a pokemon
   local hasChanged = false
   if data == '1' then hasChanged = true end
   ---console:log('Current box :' .. tostring(emu:read32(offsets.storage)))
 	for i=1,nbMonsToRead do 
		local address = offsets.storage + 4 + (80 * (i-1))
      --- console:log(tostring(address))
		if (emu:read32(address + 0) ~=0) then
         ---console:log(tostring(i).. ' i')
			local pokeData = emu:readRange(address, 80)
         if pokeData ~= gameData.storage[nbMons] then
            hasChanged = true
            gameData.storage[nbMons] = pokeData
         end
         nbMons = nbMons + 1
		end
	end
   console:log(tostring(nbMons).. ' nbMons')
   if hasChanged then
      local data = ""
      for i=1, nbMons -1 do
         data = data .. B64enc(gameData.storage[i])
         if i ~= 60 then
            data = data .. ";"
         end
      end
      return data
   end
	return nil
end

function getTrainerId()
   return emu:read16(offsets.trainerA)
end

function getEncryptionKey()
   return emu:read32(offsets.save2 + 0xAC)
end

--- in theory you have to xor it with the Enc key
--- but confusion hits me when xoring don't do anything
function getMoney()
   return emu:read32(offsets.save1 + 0x490)
end

function getStatusFainted()
   -- 
   --[[ checks only if your pokemon has fainted
   local fainted = emu:read8(offsets.battlerFainted)
   if gameData.fainted ~= fainted then
      console:log("fainted " .. tostring(fainted))
      console:log("Pokemon " .. tostring(gameData.attacker) .. " Killed " .. tostring(gameData.target))
      gameData.fainted = fainted
   end
   --]]
   local moveResult = emu:read16(offsets.moveResult)
   if gameData.moveResult ~= moveResult then
      console:log("move results " .. tostring(moveResult))
      gameData.moveResult = moveResult
   end
   local target = emu:read8(offsets.battlerTarget)
   if gameData.target ~= target then
      console:log("target " .. tostring(target))
      gameData.target = target
   end
   local attacker = emu:read8(offsets.battlerAttacker)
   if gameData.attacker ~= attacker then
      console:log("attacker " .. tostring(attacker))
      gameData.attacker = attacker
   end
   local count = emu:read8(offsets.battlersCount)
   if gameData.battlersCount ~= count then
      console:log("battlersCount " .. tostring(count))
      gameData.battlersCount = count
   end
end

function ScriptOffsetWrong()
   return "0:1"
end
--- end of data extraction

--- function that parse and act from the websocket data
function splitMessages(message)
   local messages={}
   for msg in string.gmatch(message, "([^;]+)") do
         tinsert(messages, msg)
   end
   return messages
end

function readMessage(message)
   local funcall, data = parseMessage(message)
   console:log('function call :' .. funcall .. ' data: ' .. data) 
   if funcall == '1' then
      local state = emu:read8(offsets.main + 0x439) -- inBattle flag
      if state ~= 0 then
         state = emu:read32(offsets.battleType)
         if gameData.state ~= state then
            gameData.state = state
            return '1:' .. tostring(state)
         end
         return nil
      end
      console:log(tostring(gameData.state))
      if gameData.state ~= -1 then
         gameData.state = -1
         return '1:'
      end
   elseif funcall == '2' then
      local answer = getTeam(data)
      if not answer then
         return nil
      end
      return '2:' .. answer
   elseif funcall == '3' then
      local answer = getStorage(data)
      if not answer then
         return nil
      end
      return '3:' .. answer
   elseif funcall == '4' then
      return '4:' .. tostring(getTrainerId())
   elseif funcall == '5' then
      return '5:' ..tostring(emu:read8(offsets.maxPartyLevel))
   else
      console:log('unsupported function call: ' .. funcall)
   end
   return nil
end

function parseMessage(message)
   local i,j = string.find(message, "^[0-9]+:")
   if not i then
      return tostring(message), ""
   end
   local funcall = string.sub(message, i, j - 1)
   i,j = string.find(message, ":.*$")
   local data = string.sub(message, i + 1, j)
   return tostring(funcall), tostring(data)
end
--- end

callbacks:add("frame", getStatusFainted)
---- start of the program

start_server()