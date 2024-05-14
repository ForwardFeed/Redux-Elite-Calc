/**
 * 
 * @param {number} int // number to apply
 * @param {number} boffset // bit(s) offset 
 * @param {number} blen // bit(s) length
 */
function readbits(int, boffset, blen){
    return (int >>> boffset) & blen;
}
// just an utility wrapper
function readBitsInU32(int, boffset, blen){
    return readbits(int, boffset, Math.pow(2, blen) - 1)
}
// field, numbers of bits
const BoxPokemon = [
    ["personality", 32],
    ["otID", 32],
    ["nickname", 12 * 8],
    ["move1", 10],
    ["experience", 21],
    ["attackDown", 1],
    ["move2", 10],
    ["move3", 10],
    ["language", 3],
    ["isAlpha", 1],
    ["friendship", 8],
    ["species", 16],
    ["move4", 10],
    ["hpType",5 ],
    ["isEventMon", 1],
    ["hpEV", 8],
    ["attackEV", 8],
    ["defenseEV", 8],
    ["speedEV", 8],
    ["spAttackEV", 8],
    ["spDefenseEV", 8],
    ["heldItem", 10],
    ["nature", 5],
    ["isEgg", 1],
    ["metLevel", 7],
    ["pokeball", 5],
    ["isShiny", 3],
    ["filler", 1],
    ["metLocation", 8],
    ["otName", 7 * 8],
    ["markings", 4],
    ["abilityNum", 2],
    ["speedDown", 1],
    ["otGender", 1],
]

// now unencrypted
function readMonBoxedRedux(start, bytes){
    const getNextWord = ()=>{
        const u32 = readNbytes(start + (wordIndex * 4),4, bytes)
        wordIndex++
        return u32
    }
    const setValueToField = (field, value) => {
        if (field.nbits > 32){
            if (!mon[field.name]){
                mon[field.name] = []
            }
            mon[field.name].push(value)
        } else {
            mon[field.name] = value
        }
    }
    const mon = {}
    let wordIndex = 0
    let word
    let bitsReaden
    for (const fieldArray of BoxPokemon){
        const field = {
            name: fieldArray[0],
            nbits: fieldArray[1]
        }
        if (field.nbits > 32) mon[field.name] = []
        let bitsLeftToRead = field.nbits
        while(bitsLeftToRead){
            if (!word) {
                word = getNextWord()
                bitsReaden = 0
            }
            // needs to read more than just what's left in the word
            // if 18 bits were read, and you need to read 32, then you need to read 14 now
            
            if (32 - bitsReaden - bitsLeftToRead < 0){
                // remove how many bits that have been read already
                let bitsThatGonnaBeRead = 32 - bitsReaden
                setValueToField(field, readBitsInU32(word, bitsReaden, bitsThatGonnaBeRead))
                bitsLeftToRead -= bitsThatGonnaBeRead
                word = undefined // will trigger a word read next loop
            } else {
               // there's enough bits left to read them all
               let bitsThatGonnaBeRead = bitsLeftToRead
               setValueToField(field, readBitsInU32(word, bitsReaden, bitsThatGonnaBeRead))
               bitsReaden += bitsLeftToRead
               bitsLeftToRead = 0 // will trigger the next field to be read
            }  
        }
    }
    return mon
}

function readMonPartyRedux(start, bytes){
    var mon = readMonBoxedRedux(start,bytes); // 0
    mon.pp = [
        readNbytes(start + 52, 1, bytes),
        readNbytes(start + 53, 1, bytes),
        readNbytes(start + 54, 1, bytes),
        readNbytes(start + 55, 1, bytes),
    ];
    mon.status = readNbytes(start + 56, 4, bytes);
    mon.level = readNbytes(start + 60, 1, bytes);
    mon.mail = readNbytes(start + 61, 1, bytes);
    mon.liveStat = {}
    mon.liveStat.currentHP = readNbytes(start + 62, 2, bytes);
    mon.liveStat.totalHP = readNbytes(start + 64, 2, bytes);
    mon.liveStat.atk = readNbytes(start + 66, 2, bytes);
    mon.liveStat.def = readNbytes(start + 68, 2, bytes);
    mon.liveStat.spe = readNbytes(start + 70, 2, bytes);
    mon.liveStat.spa = readNbytes(start + 72, 2, bytes);
    mon.liveStat.spd = readNbytes(start + 74, 2, bytes);
    return mon
}

const SaveBlock1Redux = {
    playerPartyCount: 0x234,
    playerParty: 0x238,
}
function readPartyRedux(bytes, SB1){
    const teamsize = readNbytes(SB1 + SaveBlock1Redux.playerPartyCount, 4, bytes)
    console.log(teamsize)
    const teamList = []
    for (let i = 0; i< teamsize; i++){
        const mon = readMonPartyRedux(SB1 + SaveBlock1Redux.playerParty + (i * 76), bytes)
        mon.moves = []
        for(let moveI = 0; moveI < 4; moveI++){
            const moveName = "move"+ (moveI + 1)
            mon.moves[moveI] = mon[moveName]
        }
        if (mon.species >= Object.keys(pokedex).length){
            let speciesIndex = GEN3_MONS.indexOf(Object.keys(pokedex).find(x => pokedex[x].id == mon.species))
            mon.species = speciesIndex
            
        }
        teamList.push(createGEN3mon(mon))
    }
    dispatchPlayerMon(teamList, P1.box.field_row1);
}

function readBoxRedux(bytes, PC, nbToRead=30*26){
    const boxedMons = []
    const DATA_BLOCK_SIZE = 4084
    // some pokemon are streched between two saveblocks
    let strechUnder = 0
    for (let i = 0; i < nbToRead; i++){
        let mon
        // the first 4 bytes are the active box nb, not valuable here
        const relativeOffset     = 4 + (i * 52)
        const saveblockNb        = Math.floor(relativeOffset / DATA_BLOCK_SIZE)
        const boxRelativeOffset  = relativeOffset % DATA_BLOCK_SIZE
        const absoluteOffset     = PC[saveblockNb] + boxRelativeOffset
        if (boxRelativeOffset + 52 > DATA_BLOCK_SIZE){
            strechUnder = DATA_BLOCK_SIZE - boxRelativeOffset
            const strechOver = 52 - strechUnder
            const strechedUnderBytes    = bytes.slice(absoluteOffset, absoluteOffset + strechUnder)
            const strechOverBytes       = bytes.slice(PC[saveblockNb + 1], PC[saveblockNb + 1] + strechOver)
            const reconstitutedBytes = new Uint16Array(strechedUnderBytes.length + strechOverBytes.length)
            reconstitutedBytes.set(strechedUnderBytes)
            reconstitutedBytes.set(strechOverBytes, strechedUnderBytes.length)
            mon = readMonBoxedRedux(0, reconstitutedBytes)
        } else {
            mon = readMonBoxedRedux(absoluteOffset , bytes)
        }
        if (!mon.personality) continue
        mon.moves = []
        for(let moveI = 0; moveI < 4; moveI++){
            const moveName = "move"+ (moveI + 1)
            mon.moves[moveI] = mon[moveName]
        }
        if (mon.species >= Object.keys(pokedex).length){
            let speciesIndex = GEN3_MONS.indexOf(Object.keys(pokedex).find(x => pokedex[x].id == mon.species))
            mon.species = speciesIndex
            
        }
        boxedMons.push(createGEN3mon(mon))
    }
    return boxedMons
}

function getFooterDataRedux(startOffset, endOffset, bytes) {
    const SIZE_SECTOR = 4096;
    const START_SECTOR_SAVEBOX = 12;
    const SAVEBBLOCK_1_SECTOR = 2;
    let SB1, // SAVEBLOCK 1
        //SI, //Save index
        SB = [],
        PC = [] // PC start
        //GS = [] // Game Sector testing purpose
        
    for (var ofs = startOffset; ofs < endOffset; ofs += SIZE_SECTOR){
        const off = ofs + 4084 //offset footer
        const sID = readNbytes(off,2,bytes)//Sector ID
        if (sID > 28) {
            console.log("Weird sector id:" +  sID + " at offset :" + ofs)
            continue
        }
        
        SB[sID] = ofs
        if (sID == SAVEBBLOCK_1_SECTOR){
            SB1 = ofs
        } else if(sID >= START_SECTOR_SAVEBOX){
            PC[sID - START_SECTOR_SAVEBOX] = ofs
        } 
        /*else if (sID >= 5){
            PC[sID - 5] = ofs
        } else {
            //GS[sID] = ofs
        }*/
        //var CS = readNbytes(off +2 ,2,bytes); //Checksum
        //var SG = readNbytes(off +4 ,2,bytes); //Signature
        //SI = readNbytes(off +8 ,2,bytes); //Save Index
    }
   // if (SI == 65535) SI = 0; //javascript aint build for binary
    return {
        SB1: SB1,
        PC: PC,
        SB: SB,
    }
}

function parseFileRedux(file){
    if (!file) return
    if (file.target) file = file.target.files[0]
    var reader = new FileReader();
	reader.onload = function (e) {
		var bytes = new Uint8Array(e.target.result);
        //size check, for now only emerald.
        if (bytes.length != 131072 && bytes.length != 131088) {
            console.warn("Not a pokemon emerald game", bytes.length)
            return
        }
        const RSave = getFooterDataRedux(0, 114688, bytes)
        var gameSets = RSave.SB[0] + 0x97
        gameSets = readNbytes(gameSets, 2, bytes)
        //(gameSets & 1 ? "Autorun" : "Manual run")
        //gameSets & 2 ? "Permanent repel" : "Manual Repel")
        //(gameSets & 64 ? "Enable EV" : "Disable EV") 
        
        if (gameSets & 64){
            $('#no-ev-off').prop("checked", true);
        } else {
            $('#no-ev-on').prop("checked", true);
        }
        //(gameSets & 128 ? "Player AI" : "Player Human") 
        var randomSets = bytes[RSave.SB[0] + 0xF30]
        var randomAbi = randomSets & 4
        if (randomAbi) {
            window.randomAbi = true
            $('#all-abis-on').prop("checked", true)
            $('#all-abis-on').change()
        }
        try {
            readPartyRedux(bytes, RSave.SB1)

            // get the numbers of pokemon to read from the settings
            const numberToRead = +$('#sv-nb-pkm').val();
            const monList = readBoxRedux(bytes, RSave.PC, numberToRead);
            dispatchPlayerMon(monList);
        } catch (e) {
            console.warn(e)
        }
        P1.setPanel() //forcefully refreshing
    }
    reader.readAsArrayBuffer(file);
};
