
function getSrcImgPokemon(pokeName) {
	if (!pokeName) {
		return;
	}
	//General exceptions
	if (pokeName == "Zygarde 10" || pokeName == 'Zygarde 10 Power Construct') {
		pokeName = "Zygarde 10 Percent";
	} else if (pokeName == "Zygarde 50 Power Construct") {
		pokeName = "Zygarde Complete";
	} else if (pokeName == "Aegislash-Shield") {
		pokeName = "Aegislash";
	} else if (pokeName == 'Rockruff Own Tempo') {
		pokeName = "Rockruff";
	} else if (pokeName == "Unown Emark" || pokeName == "Unown Qmark"){
		pokeName = "Unown";
	} else if (pokeName == "Pikachu World Cap"){
		pokeName = "Pikachu";
	} else if (pokeName == "Sinistea Antique"){
		pokeName = "Sinistea";
	} else if (pokeName == "Polteageist Antique"){
		pokeName = "Polteageist";
	} else if (pokeName == "Greninja Battle Bond"){
		pokeName = "Greninja";
	} else if (/Arceus/.test(pokeName)){
		pokeName = "Arceus";
	} else if (/Genesect/.test(pokeName)){
		pokeName = "Genesect";
	} else if (/Pumpkaboo/.test(pokeName)){
		pokeName = "Pumpkaboo";
	} else if (/Gourgeist/.test(pokeName)){
		pokeName = "Gourgeist";
	} else if (/Silvally/.test(pokeName)){
		pokeName = "Silvally";
	} else if (/Minior/.test(pokeName)){
		pokeName = "Minior";
	} else if (/Alcremie/.test(pokeName)){
		pokeName = "Alcremie";
	} else if (/Urshifu/.test(pokeName)){
		pokeName = "Urshifu";
	} 
	
	return "../img/sprites/" + pokeName + ".png";

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
						isMon: true, /* shows a different text boldness*/
					});
				}
				// get rematch sets
				if (trainer.rem){
					for (const rem of trainer.rem){
						for (const remMon of rem){
							setOptions.push({
								text: remMon.species + " : " + trainer.trn,
								id: remMon.species + ";" + trainer.trn + ";" + rem.indexOf(remMon) +
									';rem;' + trainer.rem.indexOf(rem),
								isMon: true,
							});
						}
					}
				}
				// get alternative sets
				if (trainer.alt){
					for (const alt of trainer.alt){
						for (const altMon of alt.mons){
							setOptions.push({
								text: altMon.species + " : " + alt.trn,
								id: altMon.species + ";" + trainer.trn + ";" + alt.mons.indexOf(altMon) +
								 ';alt;' + trainer.alt.indexOf(alt),
								isMon: true,
							});
						}
					}
				}
				// get insane sets
				if (trainer.insane){
					for (const mon of trainer.insane){
						setOptions.push({
							text: mon.species + " : " + trainer.trn + '(Elite)',
							id: mon.species + ";" + trainer.trn + ";" + trainer.insane.indexOf(mon) +
							 ';insane;' + 0,
							isMon: true,
						});
					}
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

$(document).ready(function(){
    $('#report').click( function() {
		var to_print = {
			result: calcGateway.result,
			settings: {
				
			}
		}
	})
});