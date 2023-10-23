function setupLiveCalc(){
    //var div = $('#live-calc')
    var socket = new WebSocket('ws://127.0.0.1:8684');
    socket.onmessage = function(ev){
        protocol = ev.data.match(/^[^:]+/)[0]
        data = ev.data.replace(/^[^:]+:/,'') 
        console.log('function call :' + protocol + ' , data: ' + data)
        if (protocol === "1"){ // game state
            if (data === ""){
               $('#live-calc-gamestate').text("Not in combat")
            } else if (data & 8){
                $('#live-calc-gamestate').text("Versus Trainer")
            } else if(data & 4){
                $('#live-calc-gamestate').text("Wild Pokemon")
            }  else {
                $('#live-calc-gamestate').text("Unknown " + data)
            }
        } else if (protocol === '2'){ // party mon update
            if (data == '') {
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
        } else if (this.protocol === '3'){
             if (data == '') {
                return // no change
            }
            const storageList = decodeStoragePokemon(data)
            const playerMons = P1.trainer.mons
            const box = P1.box
            storageList.map((pokeStorage) => {
                for (const indexMon in playerMons){
                    const mon = playerMons[indexMon]
                    const node = box.idToNode[indexMon]
                    if (pokeStorage.person == mon.person) {
                        // mon belongs to storage
                        box.mainBox.append(node)
                        playerMons[indexMon] = pokeStorage
                        return
                    }
                }
                box.addBoxed(pokeStorage, playerMons.length, box.mainBox)
                playerMons.push(pokeStorage)
            })
        }
    }
    /*socket.onerror = function(ev){
        console.log('Error socket: ', ev)
    }*/
    socket.onopen = function(ev){
        $('#live-calc-ret').hide()
        $('#connectivity-dot').addClass('dot-connected')
        $('#live-calc-fields').show()
        setupLiveCalcRoutine(socket)

    }
    socket.onclose = function(ev){
        console.log('socket closed: ', ev)
        $('#connectivity-dot').removeClass('dot-connected')
        $('#live-calc-fields').hide()
        $('#live-calc-ret').show()
    }
}

function setupLiveCalcRoutine(socket){
    var callConnectivityStatus = function(){
        //console.log('sent data', socket)
        if (socket.readyState == 1){ //open
            // call game status
            // call team data
            socket.send('2')
            socket.send('1')
            setTimeout(callConnectivityStatus, 5000)
        }
    };
    callConnectivityStatus()
}

function base64ToBytes(chars){
    const byteNumbers = new Array(chars.length);
    for (let i = 0; i < chars.length; i++) {
        byteNumbers[i] = chars.charCodeAt(i);
    }
    return byteNumbers
}

function decodePartyPokemon(data){
    const table64 = data.split(';')
    var partyList = []
    for (const pokeB64 of table64){
        if (pokeB64 == '') continue
        const binary = base64ToBytes(atob(pokeB64))
        partyList.push(createGEN3mon(readMonParty(0, binary)))
    }
    return partyList
}

function decodeStoragePokemon(data){
    const table64 = data.split(';')
    var storage = []
    for (const pokeB64 of table64){
        if (pokeB64 == '') continue
        const binary = base64ToBytes(atob(pokeB64))
        storage.push(createGEN3mon(readMonBox(0, binary)))
    }
    return storage
}

$('document').ready(function(){
    $('#live-calc-ret').click(setupLiveCalc)
    setupLiveCalc()
})
