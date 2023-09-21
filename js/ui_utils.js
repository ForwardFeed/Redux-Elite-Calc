
function getSrcImgPokemon(pokeName) {
	if (!pokeName) {
		return;
	}
	// Redux megas
	var exceptions = ["Milotic-Mega","Butterfree-Mega","Machamp-Mega","Kingler-Mega","Lapras-Mega","Flygon-Mega","Kingdra-Mega","Dewgong-Mega","Hitmonchan-Mega","Hitmonlee-Mega","Hitmontop-Mega","Crobat-Mega","Skarmory-Mega","Bruxish-Mega","Torterra-Mega","Infernape-Mega","Empoleon-Mega","Shuckle-Mega","Relicanth-Mega","Quagsire-Mega","Jellicent-Mega","Toucannon-Mega","Dragonite-Mega","Breloom-Mega","Slaking-Mega"]
	if (exceptions.includes(pokeName)){
		return "../img/" + pokeName + ".png";
	}
	//General exceptions
	if (pokeName == "Zygarde-10%") {
		pokeName = "Zygarde-10%25";
	} else if (pokeName == "Aegislash-Shield") {
		pokeName = "Aegislash";
	} else if (pokeName === "Sirfetchd"){
		pokeName = "Sirfetch’d"
	}
	if (/Arceus/.test(pokeName)) pokeName = 'Arceus'
	pokeName = pokeName.replace('Galarian', 'Galar')
	return "https://raw.githubusercontent.com/May8th1995/sprites/master/" + pokeName + ".png";

}


function correctCompactedIVEV(pokemon){
	const ev = (pokemon.evs && pokemon.evs.constructor.name === "Array")
	const iv = (pokemon.ivs && pokemon.ivs.constructor.name === "Array")
	if (!ev && !iv) return pokemon
	let evs = {}
	let ivs = {}
	for (const index in LEGACY_STATS[gen]) {
		const stat = LEGACY_STATS[gen][index]
		if (ev) evs[stat] = pokemon.evs[index]
		if (iv) ivs[stat] = pokemon.ivs[index]
	}
	if (ev) pokemon.evs = evs
	if (iv) pokemon.ivs = ivs
	return pokemon;
}

function getSelectOptions(arr, sort, defaultOption) {
	if (sort) {
		arr.sort();
	}
	var r = '';
	for (var i = 0; i < arr.length; i++) {
		r += '<option value="' + arr[i] + '" ' + (defaultOption === i ? 'selected' : '') + '>' + arr[i] + '</option>';
	}
	return r;
}

function getSetOptions() {
	var setOptions = [];
	if (!document.getElementById('pokemons-only').checked) {
		//the zero trainer is off
		for (var i = 0; i < setdex.length; i++) {
			var trainer = setdex[i];
			if (!trainer.mons && i != 0) {
				console.log("invalid trainer: ", i, " Removing")
				setdex.splice(i, 1)
				continue
			}
			if (!trainer.mons[0]) {
				continue
			}
			setOptions.push({
				text: trainer.trn,
				id: trainer.mons[0].species + ";" + trainer.trn + ";" + "0"
			});
			if (document.getElementById('no-pokedex').checked || document.getElementById("any-selection").checked) {
				for (var j = 0; j < trainer.mons.length; j++) {
					var mon = trainer.mons[j];
					if (!mon) {
						continue
					}
					setOptions.push({
						text: mon.species + " : " + trainer.trn,
						id: mon.species + ";" + trainer.trn + ";" + j, /*without id it doesn't get selectable*/
						isMon: true,
					});
				}
			}
		}
	}
	if (!document.getElementById('trainers-only').checked) {
		var pokeNames = Object.keys(pokedex);
		pokeNames.sort();
		for (var i = 0; i < pokeNames.length; i++) {
			var pokeName = pokeNames[i];
			setOptions.push({
				text: pokeName,
				id: pokeName
			});
		}
	}
	return setOptions;
}
function getPlayerOptions() {
	var setOptions = [];
	if (!document.getElementById('pl-pokemons-only').checked) {
		if (!setdex[0].mons) {
		} else {
			for (var i = 0, iLen = setdex[0].mons.length; i < iLen; i++) {
				var pokemon = setdex[0].mons[i];
				setOptions.push({
					text: pokemon.species + " : Player",
					id: pokemon.species + ";Player;" + i
				});
			}
		}
	}
	if (!document.getElementById('pl-trainer-only').checked || setdex[0].mons.length == 0) {
		var pokeNames = Object.keys(pokedex);
		pokeNames.sort();
		for (var i = 0, iLen = pokeNames.length; i < iLen; i++) {
			var pokeName = pokeNames[i];
			setOptions.push({
				text: pokeName,
				id: pokeName
			});
		}
	}
	return setOptions;
}

function legacyStatToStat(st) {
	switch (st) {
		case 'hp':
			return "hp";
		case 'at':
			return "atk";
		case 'df':
			return "def";
		case 'sa':
			return "spa";
		case 'sd':
			return "spd";
		case 'sp':
			return "spe";
		case 'sl':
			return "spc";
	}
}

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement, fromIndex) { // eslint-disable-line no-extend-native
		var k;
		if (this == null) {
			throw new TypeError('"this" equals null or n is undefined');
		}
		var O = Object(this);
		var len = O.length >>> 0;
		if (len === 0) {
			return -1;
		}
		var n = +fromIndex || 0;
		if (Math.abs(n) === Infinity) {
			n = 0;
		}
		if (n >= len) {
			return -1;
		}
		k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
		while (k < len) {
			if (k in O && O[k] === searchElement) {
				return k;
			}
			k++;
		}
		return -1;
	};
}


function displayDamageHits(damage) {
	// Fixed Damage
	if (typeof damage === 'number') return damage;
	// Standard Damage
	if (damage.length > 2) return damage.join(', ');
	// Fixed Parental Bond Damage
	if (typeof damage[0] === 'number' && typeof damage[1] === 'number') {
		return '1st Hit: ' + damage[0] + '; 2nd Hit: ' + damage[1];
	}
	// Parental Bond Damage
	return '1st Hit: ' + damage[0].join(', ') + '; 2nd Hit: ' + damage[1].join(', ');
}

function statToLegacyStat(stat) {
	switch (stat) {
	case 'hp':
		return "hp";
	case 'atk':
		return "at";
	case 'def':
		return "df";
	case 'spa':
		return "sa";
	case 'spd':
		return "sd";
	case 'spe':
		return "sp";
	}
}

var highestMonLevel = 1;
function setHighestLevelMon(){
	highestMonLevel = 1;
	var hasChanged = false
	for (var i in P1.trainer.mons){
		var mon = P1.trainer.mons[i]
		if (mon.level > highestMonLevel){
			$('#levelR1').val(mon.level);
			highestMonLevel= mon.level;
			P2.pokemon.level = highestMonLevel 
			hasChanged = true;
		} 
	}
	if (hasChanged) P2.stats.calcStats() 
	
}

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

// IT also corrects wrongs stuff
class DiscreteFuze{
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
	}
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
	startTrainer(){
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
	startPokedex(){
		var t0 = performance.now()
		for (var pokeName of Object.keys(pokedex)){
			this.fuzzPokemon(pokeName)
		}
		this.printLog()
		var t1 = performance.now()
		var timefuze = (t1 - t0) / 1000
		console.log("Discrete fuzing of " + pokedex.length + " pokemons has taken " + timefuze + " seconds")
	}
}

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

function fuzeAllPokedex(){
	
}