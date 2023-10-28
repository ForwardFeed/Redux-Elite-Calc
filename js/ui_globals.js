/*	THIS FILE CONTAINS ALL THE IMPORTANT GLOBAL VARIABLE FOR THE UI
	as well as the initialization / setup
*/


var LEGACY_STATS_RBY = ["hp", "at", "df", "sl", "sp"];
var LEGACY_STATS_GSC = ["hp", "at", "df", "sa", "sd", "sp"];
var LEGACY_STATS = [[], LEGACY_STATS_RBY, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC];
var CALC_STATUS = {
	'Healthy': '',
	'Paralyzed': 'par',
	'Poisoned': 'psn',
	'Badly Poisoned': 'tox',
	'Burned': 'brn',
	'Asleep': 'slp',
	'Frozen': 'frz'
};

var HIDDEN_POWER_REGEX = /Hidden Power (\w*)/;

var GENERATION = {
	'1': 1, 'rb': 1, 'rby': 1,
	'2': 2, 'gs': 2, 'gsc': 2,
	'3': 3, 'rs': 3, 'rse': 3, 'frlg': 3, 'adv': 3,
	'4': 4, 'dp': 4, 'dpp': 4, 'hgss': 4,
	'5': 5, 'bw': 5, 'bw2': 5, 'b2w2': 5,
	'6': 6, 'xy': 6, 'oras': 6,
	'7': 7, 'sm': 7, 'usm': 7, 'usum': 7,
	'8': 8, 'ss': 8,
	'9': 9, 'sv': 9
};

var gen, notation, pokedex, dexpoke, setdex, dexset, typeChart, moves, abilities, items, GENERATION = [];

function initializeUICalc() {
	gen = window.CALC_GEN_SETTINGS.calc;
	GENERATION = calc.Generations.get(gen);
	pokedex = calc.SPECIES[window.CALC_GEN_SETTINGS.dex];
	dexpoke = [];
	for (var pokeName in pokedex) {
		dexpoke.push([pokeName])
	}
	setdex = TRAINER_DEX;
	dexset = [];
	for (var a in setdex) {
		var trn = setdex[a];
		var name = trn.trn
		if (dexset[name]) {
			continue;
		}
		if (trn.alt){
			for(const altIndex in trn.alt){
				const alt = trn.alt[altIndex]
				dexset[alt.trn] = a + ":" + altIndex
			}
		}
		dexset[name] = a;
	}
	
	typeChart = calc.TYPE_CHART[window.CALC_GEN_SETTINGS.type_chart];
	moves = calc.MOVES[window.CALC_GEN_SETTINGS.moves];
	items = calc.ITEMS[window.CALC_GEN_SETTINGS.items];
	abilities = calc.ABILITIES[window.CALC_GEN_SETTINGS.abilities];
}
$(document).ready(function () {
	initializeUICalc()
});