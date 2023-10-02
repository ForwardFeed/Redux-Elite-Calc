
function fuzeAllTrainers() {
	//prevent spamming the img request
	window.getSrcImgPokemon = function(){
		return ""
	}
	var t0 = performance.now()
	// then fuze progressively all trainer
	for (var i = 1; i < setdex.length; i++) {
		try{
			fuzeTrainer(i)
		} catch(e){
			console.error("Error at trainer n° " + i + " : " + e)
		}
	}
	var t1 = performance.now()
	var timefuze = (t1 - t0) / 1000
	console.log("Fuzing " + setdex.length + " trainers has taken " + timefuze + " seconds")
}

function fuzeTrainer(i) {
	P2.box.selectTrainer(i)
		if (P2.trainer.rem){
			for (var j = 0; j < P2.trainer.rem.length; j++) {
				const fakeEV = {
					target: {
						dataset : {
							id: j
						}
					}
				}
				P2.box.trainerTeamChange("rem", fakeEV)
			}
		}
		if (P2.trainer.insane){
			const fakeEV = {
				target: {
					dataset : {
						id: 0
					}
				}
			}
			P2.box.trainerTeamChange("insane", fakeEV)
		}
		if (P2.trainer.alt) {
			for (var j = 0; j < P2.trainer.alt.length; j++) {
				const fakeEV = {
					target: {
						dataset : {
							id: j
						}
					}
				}
				P2.box.trainerTeamChange("alt", fakeEV)
			}
		}
}


class DiscreteFuzzer{
	constructor(){
		// list all bad named fields
		this.species = [] 
		this.items = []
		this.moves = []
		this.abi = []
		this.inn = []
		this.weightkg = []
		this.bs = []
		this.unnamed = []
        this.unexpected = []
	}
    // It also corrects some wrong species, or others furthers
	correctSpecies(specie, list){
		return specie
		if (list[specie]) return specie
		if (list[specie.replace('Of', 'of')]) return specie.replace('Of', 'of')
		if (list[specie.replace(' ', '-')]) return specie.replace(' ', '-')
		if (list[specie.replace('-', ' ')]) return specie.replace('-', ' ')
		if (list[specie.split(' ')[0]]) return specie.split(' ')[0]
		switch(specie){
			case 'Calyrex':
				return 'Calyrex Ice Rider'
			case 'Sirfetch’d':
				return 'Sirfetchd'
		}
		return specie
	}
	correctItemName(itemName, list){
		if (list[itemName]) return itemName
		switch(itemName){
			case "Heavy Duty Boots":
				return 'Heavy-Duty Boots'
			case 'Kings Rock':
				return 'King\'s Rock'
			case 'None':
				return ''
		}
		return itemName
	}
	correctMoveName(igName, list){
		if (list[igName]) return igName
		switch(igName){
			case "Baby Doll Eyes":
				igName = "Baby-Doll Eyes";break
			case "V Create":
				igName = "V-create";break
			case "U Turn":
				igName = "U-turn";break
			case "Will O Wisp":
				igName = "Will-O-Wisp";break
			case "Freeze Dry":
				igName = "Freeze-Dry";break
			case "Double Edge":
				igName = "Double-Edge";break
			case 'None':
				igName = '(No Move)';break
			default:
				if (list[igName.replace(" Of ", " of ")]) return igName.replace(" Of ", " of ");
				if (list[igName.replace("s ", "'s ")]) return igName.replace("s ", "'s ");
				if (list[igName.replace(" ", "-")]) return igName.replace(" ", "-");
		}
		return igName
	}
	printLog(){
		console.log("Species: ", this.species)
		console.log("Items: ", this.items)
		console.log("Moves: ", this.moves)
		console.log("Abilities: ", this.abi)
		console.log("Innates: ", this.inn)
		console.log("weighkg: ", this.weightkg)
		console.log("BaseStats: ", this.bs)
		console.log("you forgot log: ", this.unnamed)
	}
	hasOrLog(list, item, log){
		if (!log) log = this.unnamed
		if (list.constructor.name === 'Object'){
			if (list[item] === undefined) {
				//log
				if(!log.includes(item)){
					log.push(item)
				}
			}
		} else if (list.constructor.name === 'Array'){
			if (!list.includes(item)) {
				//log
				if(!log.includes(item)){
					log.push(item)
				}
			}
		}
	}
	fuzzPoke(poke){
		poke.species = this.correctSpecies(poke.species, pokedex)
		this.hasOrLog(pokedex, poke.species, this.species)
		poke.item = this.correctItemName(poke.item, items)
		this.hasOrLog(items, poke.item, this.items)
		for (var i in poke.moves){
			poke.moves[i] = this.correctMoveName(poke.moves[i], moves)
			this.hasOrLog(moves, poke.moves[i], this.moves)
		}
	}
	fuzzSet(set){
		for (const poke of set){
			this.fuzzPoke(poke)
		}
	}
	fuzzTrainer(trn){
		this.fuzzSet(trn.mons)
		if (trn.rem){
			for (const rem of trn.rem) {
				this.fuzzSet(rem)
			}
		}
		if (trn.alt){
			for (const rem of trn.alt) {
				this.fuzzTrainer(rem)
			}
		}
		if (trn.insane){
			this.fuzzSet(trn.insane)
		}
	}
	FuzzTrainers(){
		var t0 = performance.now()
		// then fuze progressively all trainer
		for (var i = 1; i < setdex.length; i++) {
			try{
				this.fuzzTrainer(setdex[i])
			} catch(e){
				console.error("Error at trainer n° " + i + " : " + e)
			}
		}
		this.printLog()
		var t1 = performance.now()
		var timefuze = (t1 - t0) / 1000
		console.log("Discrete fuzing " + setdex.length + " trainers has taken " + timefuze + " seconds")
	}
	fuzzPokemon(pokeName){
		const poke = pokedex[pokeName]
		if (poke.abilities && typeof poke.abilities[Symbol.iterator] === 'function'){
			for (var abi of poke.abilities){
				this.hasOrLog(abilities, abi, this.abi)
			}
		} else {
			if (!poke.abilities) {
				this.hasOrLog([], pokeName, this.abi)
			}
		}
		if (poke.innates && typeof poke.innates[Symbol.iterator] === 'function'){
			for (var abi of poke.innates){
				this.hasOrLog(abilities, abi, this.inn)
			}
		} else {
			if (!poke.innates) {
				this.hasOrLog([], pokeName, this.inn)
			}
		}
		if (poke.weightkg == undefined) this.hasOrLog([], pokeName, this.weightkg)
		if (poke.bs == undefined) this.hasOrLog([], pokeName, this.bs)
		if (poke.id == undefined) this.hasOrLog([], pokeName, this.id)
	}
	FuzzPokedex(){
		var t0 = performance.now()
		for (var pokeName of Object.keys(pokedex)){
			this.fuzzPokemon(pokeName)
		}
		this.printLog()
		var t1 = performance.now()
		var timefuze = (t1 - t0) / 1000
		console.log("Discrete fuzing of " + Object.keys(pokedex).length + " pokemons has taken " + timefuze + " seconds")
	}
	fuzzImageSrc(){
		this.t0 = performance.now()
		console.log('Starting to fuze all poke icons :', Object.keys(pokedex).length)
		var localIndex = 0
		P1.field_pokeImg[0].onload = ()=>{
			if (localIndex >= Object.keys(pokedex).length) {
				this.endOfImageFuze()
				return
			}
			localIndex += 1
			P1.field_pokeImg[0].src = getSrcImgPokemon(Object.keys(pokedex)[localIndex])
		}
		P1.field_pokeImg[0].onerror = ()=>{
			if (localIndex >= Object.keys(pokedex).length) {
				this.endOfImageFuze()
				return
			}
			this.species.push(Object.keys(pokedex)[localIndex])
			localIndex += 1
			P1.field_pokeImg[0].src = getSrcImgPokemon(Object.keys(pokedex)[localIndex])
		}
		P1.field_pokeImg[0].src = getSrcImgPokemon(Object.keys(pokedex)[localIndex])
		
	}
	endOfImageFuze(){
		var t1 = performance.now()
		var timefuze = (t1 - this.t0) / 1000
		console.log("Discrete fuzing of " + Object.keys(pokedex).length + " sprites has taken " + timefuze + " seconds")
		console.log(this.species)
	}
    fuzzeAbilitiesMechanicsCalc(){
        var t0 = performance.now()
        var x = P1.createPokemon()
        var y = P2.createPokemon()
        const hasAbility = Pokemon.prototype.hasAbility;
        window.__fuzzer = this
        this.called_Abi = []
        // list all called abilities
        var fuzzAbility = function () {
            for (const abi2Test of arguments){
                var indexAbi = __fuzzer.called_Abi.indexOf(abi2Test)
                if (indexAbi == -1) {
                    __fuzzer.called_Abi.push(abi2Test)
                }
            }
            hasAbility.apply(this, arguments);
        }
        Pokemon.prototype.hasAbility = fuzzAbility
        Pokemon.prototype.__proto__.hasAbility = fuzzAbility
        try {
            calcGateway.performCalculations(x, y)
        } catch(e) {
            this.unexpected.push(e)
        }
        var copyAbi = structuredClone(abilities)
        for (const called of this.called_Abi){
            this.hasOrLog(abilities, called, this.abi)
            var indexAbi = copyAbi.indexOf(called)
            if (indexAbi != -1){
                copyAbi.splice(indexAbi, 1)
            }
        }
        var t1 = performance.now()
		var timefuze = (t1 - t0) / 1000
		console.log("Fuzzing of abilities called during calculation has taken " + timefuze + " seconds")
        console.log('Bad Abilities called', this.abi.length,'/', abilities.length,':', this.abi)
        console.log('Untested Abilities', copyAbi.length,'/', abilities.length,':', copyAbi)
		console.log('Unexpexted errors', this.unexpected)
    }
	fuzzAbiDesc(){
		for(const abi of abilities){
			if (!ABI_DESC[abi]){
				this.abi.push(abi)
			}
		}
		console.log('Ability without descriptions', this.abi.length,'/', abilities.length,':', this.abi)
	}
}
//new DiscreteFuzzer().fuzzeAbilitiesMechanicsCalc()

function reorder(){
	var newOrder = []
	var missed = []
	for (var name of T_LIST){
		if (typeof name === 'string'){
			var id = dexset[name]
			if (id) {
				newOrder.push(setdex[id])
				setdex[id] = ""
			} else {
				missed.push(name)
			}
		} else {
			var id = dexset[name[0]]
			if (id) {
				newOrder.push(setdex[id])
				setdex[id] = ""
			} else {
				missed.push(name)
			}
			var trn = newOrder[newOrder.length - 1]
			trn.alt = []
			for (var i = 1; i < name.length; i++) {
				var id = dexset[name[i]]
				if (id) {
					trn.alt.push(setdex[id])
					setdex[id] = ""
				} else {
					missed.push(name)
				}
			}
		}
		
	}
	var newSet = []
	for (var index in setdex) {
		if (setdex[index]) {
			newSet.push(setdex[index])
		}
	}
	setdex = newOrder.concat(newSet)
	//setdex = newOrder.concat(setdex)
	console.log("Missed:",missed.length,' ', missed)
	console.log('Hit :', newOrder.length,' ', newOrder)
	console.log('not in list: ', newSet.length)
}
