function setupLiveCalc(){
    //var div = $('#live-calc')
    var socket = new WebSocket('ws://127.0.0.1:8684');
    socket.onmessage = function(ev){
        protocol = ev.data.match(/^[^:]+/)[0]
        data = ev.data.replace(/^[^:]+:/,'') 
        console.log('function call :' + protocol + ' , data: ' + data)
        if (protocol === "1"){ // connectivity status
            if (data === "1"){
                $('#con-emu').addClass('dot-connected')
            } else {
                $('#con-emu').removeClass('dot-connected')
            }
        } else if (protocol === '2'){ // party mon update
            if (data == 0) {
                return // no change
            }
            const partyList = decodePartyPokemon(data)
            const playerMons = P1.trainer.mons
            const box = P1.box
            box.reboxToMain()
            partyList.map((pokeParty) => {
                for (const indexMon in playerMons){
                    const mon = playerMons[indexMon]
                    if (pokeParty.person == mon.person) {
                        box.field_row1.append(box.idToNode[indexMon])
                        playerMons.push(pokeParty)
                        return
                    }
                }
                box.addBoxed(pokeParty, playerMons.length, box.field_row1)
                playerMons.push(pokeParty)
            })
        }
    }
    /*socket.onerror = function(ev){
        console.log('Error socket: ', ev)
    }*/
    socket.onopen = function(ev){
        $('#live-calc-ret').hide()
        //console.log('socket open: ', ev)
        $('#con-bridge').addClass('dot-connected')
        setupLiveCalcRoutine(socket)

    }
    socket.onclose = function(ev){
        console.log('socket closed: ', ev)
        $('#con-bridge').removeClass('dot-connected')
        $('#con-emu').removeClass('dot-connected')
        $('#live-calc-ret').show()
    }
}

function setupLiveCalcRoutine(socket){
    var callPartyMons = function(){
        socket.send('2')
    };
    var callConnectivityStatus = function(){
        //console.log('sent data', socket)
        if (socket.readyState == 1){ //open
            socket.send('1')
            callPartyMons() //bundle some demands since we know the socket is open
            setTimeout(callConnectivityStatus, 500)
        }
    };
    callConnectivityStatus()
}

function decodePartyPokemon(data){
    charsToByte = function(chars){
        const byteNumbers = new Array(chars.length);
        for (let i = 0; i < chars.length; i++) {
            byteNumbers[i] = chars.charCodeAt(i);
        }
        return byteNumbers
    }
    const table64 = data.split(':')
    var partyList = []
    for (const pokeB64 of table64){
        if (pokeB64 == '') continue
        const binary = charsToByte(atob(pokeB64))
        partyList.push(createGEN3mon(readMonParty(0, binary)))
    }
    return partyList
}

$('document').ready(function(){
    $('#live-calc-ret').click(setupLiveCalc)
    setupLiveCalc()
})
