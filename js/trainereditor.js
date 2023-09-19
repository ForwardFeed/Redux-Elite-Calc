
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
var GENERATION_O = GENERATION;

var SETDEX = [
	{},
	typeof SETDEX_RBY === 'undefined' ? {} : SETDEX_RBY,
	typeof SETDEX_GSC === 'undefined' ? {} : SETDEX_GSC,
	typeof SETDEX_ADV === 'undefined' ? {} : SETDEX_ADV,
	typeof SETDEX_DPP === 'undefined' ? {} : SETDEX_DPP,
	typeof SETDEX_BW === 'undefined' ? {} : SETDEX_BW,
	typeof SETDEX_XY === 'undefined' ? {} : SETDEX_XY,
	typeof SETDEX_SM === 'undefined' ? {} : SETDEX_SM,
	typeof SETDEX_SS === 'undefined' ? {} : SETDEX_SS,
	typeof SETDEX_SV === 'undefined' ? {} : SETDEX_SV,
];

var gen, genWasChanged, notation, setdex, typeChart, pokedex, moves, abilities, items, calcHP, calcStat, GENERATION;

function setupCalc() {
	gen = window.CALC_GEN_SETTINGS.calc;
	GENERATION = calc.Generations.get(gen);
	pokedex = calc.SPECIES[window.CALC_GEN_SETTINGS.dex];
	setdex = JSON.parse(localStorage.getItem(GameName + "setdex")) || TRAINER_DEX;
	if (setdex.length == 0) {
		setdex = [{trn: "Player", mons: [{species: "Beldum"}]}]
	}
	dexset = [];
	for (var a in setdex) {
		var name = setdex[a].trn;
		if (dexset[name]){
			continue;
		}
		dexset[name] = a;
	}
	typeChart = calc.TYPE_CHART[window.CALC_GEN_SETTINGS.type_chart];
	moves = calc.MOVES[window.CALC_GEN_SETTINGS.moves];
	items = calc.ITEMS[window.CALC_GEN_SETTINGS.items];
	abilities = calc.ABILITIES[window.CALC_GEN_SETTINGS.abilities];
	clearField();
	loadDefaultLists();
	$(".gen-specific.g" + gen).show();
	$(".gen-specific").not(".g" + gen).hide();
	var typeOptions = getSelectOptions(Object.keys(typeChart));
	$("select.type1, select.move-type").find("option").remove().end().append(typeOptions);
	$("select.teraType").find("option").remove().end().append(getSelectOptions(Object.keys(typeChart).slice(1)));
	$("select.type2").find("option").remove().end().append("<option value=\"\">(none)</option>" + typeOptions);
	var moveOptions = getSelectOptions(Object.keys(moves), true);
	$("select.move-selector").find("option").remove().end().append(moveOptions);
	var abilityOptions = getSelectOptions(abilities, true);
	$("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
	$("select.innates").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
	var itemOptions = getSelectOptions(items, true);
	$("select.item").find("option").remove().end().append("<option value=\"\">(none)</option>" + itemOptions);
}


function cleanTrainerEdition() {
	document.getElementById("trainer-edition-name").value = "";
	document.getElementById("poke-box").innerText = "";
	document.getElementById("edit-error").innerText = "";
}
function getSrcImgPokemon(pokeName) {
	if (!pokeName) {
		return;
	}
	//edge cases first
	if (pokeName == "Zygarde-10%") {
		pokeName = "Zygarde-10%25";
	} else if (pokeName == "Aegislash-Shield") {
		pokeName = "Aegislash";
	}
	return "https://raw.githubusercontent.com/May8th1995/sprites/master/" + pokeName + ".png";

}
// Check whether control button is pressed
$(document).keydown(function (event) {
	if (event.which == "17")
		cntrlIsPressed = true;
	else if (event.which == 65 && cntrlIsPressed) {
		// Cntrl+  A
	} else if (event.key === "Escape") {
		settingsMenuToggle()
	}
});

$(document).keyup(function () {
	cntrlIsPressed = false;
});
var cntrlIsPressed = false;
/* dragging for pokemons in boxes*/
function allowDrop(ev) {
	ev.preventDefault();
}

var pokeDragged = null;
function dragstart_handler(ev) {
	pokeDragged = ev.target;
}

function drop(ev) {
	ev.preventDefault();
	if (ev.target.closest(".dropzone")) {
		if (ev.target.tagName === "IMG") {
			// swap
			var prev1 = pokeDragged.previousElementSibling;
			if (!prev1) {
				ev.target.after(pokeDragged);
			} else {
				ev.target.before(pokeDragged);
				prev1.after(ev.target);
			}
		} else {
			pokeDragged.parentNode.removeChild(pokeDragged);
			if (ev.target.tagName == "LEGEND") {
				ev.target.parentNode.children[1].appendChild(pokeDragged);
			} else if (ev.target.id == "poke-trash") {
				pokeDragged.parentNode.removeChild(pokeDragged);
			} else {
				ev.target.appendChild(pokeDragged);
			}
		}
	}
	ev.target.classList.remove('over');
	pokeDragged.click()
	pokeDragged = null;
}

function handleDragEnter(ev) {
	ev.target.classList.add('over');
	ev.target.removeAttribute("data-placeholder");
}

function handleDragLeave(ev) {
	ev.target.classList.remove('over');
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

function createPokemon(pokeInfo) {
	if (typeof pokeInfo === "string") {
		var parsed = parseSelector(pokeInfo)
		var trainerID	= parsed[0],
			trainer		= parsed[1], 
			pokemon 	= parsed[2],
			pokemonName = parsed[3];
		var set = pokemon;
		var ivs = {};
		var evs = {};
		for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
			var legacyStat = LEGACY_STATS[gen][i];
			var stat = legacyStatToStat(legacyStat);

			ivs[stat] = (gen >= 3 && set.ivs && typeof set.ivs[legacyStat] !== "undefined") ? set.ivs[legacyStat] : 31;
			evs[stat] = (set.evs && typeof set.evs[legacyStat] !== "undefined") ? set.evs[legacyStat] : 0;
		}
		var moveNames = set.moves;

		var pokemonMoves = [];
		for (var i = 0; i < 4; i++) {
			var moveName = moveNames[i];
			pokemonMoves.push(new calc.Move(gen, moves[moveName] ? moveName : "(No Move)", {ability: ability, item: item}));
		}

		return new calc.Pokemon(gen, pokemonName, {
			level: set.level,
			ability: set.ability,
			innates: set.innates,
			abilityOn: true,
			item: set.item && typeof set.item !== "undefined" && (set.item === "Eviolite" || set.item.indexOf("ite") < 0) ? set.item : "",
			nature: set.nature,
			ivs: ivs,
			evs: evs,
			moves: pokemonMoves
		});
	} else {
		var selectID = pokeInfo.find("input.set-selector").val();
		parsed = parseSelector(selectID);
		var trainerID	= parsed[0],
			trainer		= parsed[1],
			pokemon 	= parsed[2],
			pokemonName = parsed[3];
		var name = pokemonName;
		var baseStats = {};
		var ivs = {};
		var evs = {};
		var boosts = {};
		for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
			var stat = legacyStatToStat(LEGACY_STATS[gen][i]);
			baseStats[stat === 'spc' ? 'spa' : stat] = ~~pokeInfo.find("." + LEGACY_STATS[gen][i] + " .base").val();
			ivs[stat] = gen > 2 ? ~~pokeInfo.find("." + LEGACY_STATS[gen][i] + " .ivs").val() : ~~pokeInfo.find("." + LEGACY_STATS[gen][i] + " .dvs").val() * 2 + 1;
			evs[stat] = ~~pokeInfo.find("." + LEGACY_STATS[gen][i] + " .evs").val();
			boosts[stat] = ~~pokeInfo.find("." + LEGACY_STATS[gen][i] + " .boost").val();
		}
		if (gen === 1) baseStats.spd = baseStats.spa;
		var innates = [ pokeInfo.find(".innates").eq(0).val(), pokeInfo.find(".innates").eq(1).val()
		,pokeInfo.find(".innates").eq(2).val() ];
		var ability = pokeInfo.find(".ability").val();
		var item = pokeInfo.find(".item").val();
		var isDynamaxed = pokeInfo.find(".max").prop("checked");
		var teraType = pokeInfo.find(".teraToggle").is(":checked") ? pokeInfo.find(".teraType").val() : undefined;
		pokeInfo.isDynamaxed = isDynamaxed;
		calcHP(pokeInfo);
		var curHP = ~~pokeInfo.find(".current-hp").val();
		// FIXME the Pokemon constructor expects non-dynamaxed HP
		if (isDynamaxed) curHP = Math.floor(curHP / 2);
		var types = [pokeInfo.find(".type1").val(), pokeInfo.find(".type2").val()];
		return new calc.Pokemon(gen, name, {
			level: ~~pokeInfo.find(".level").val(),
			innates: innates,
			ability: ability,
			abilityOn: pokeInfo.find(".abilityToggle").is(":checked"),
			item: item,
			gender: pokeInfo.find(".gender").is(":visible") ? getGender(pokeInfo.find(".gender").val()) : "N",
			nature: pokeInfo.find(".nature").val(),
			ivs: ivs,
			evs: evs,
			isDynamaxed: isDynamaxed,
			isSaltCure: pokeInfo.find(".saltcure").is(":checked"),
			alliesFainted: parseInt(pokeInfo.find(".alliesFainted").val()),
			boostedStat: pokeInfo.find(".boostedStat").val() || undefined,
			teraType: teraType,
			boosts: boosts,
			curHP: curHP,
			status: CALC_STATUS[pokeInfo.find(".status").val()],
			toxicCounter: status === 'Badly Poisoned' ? ~~pokeInfo.find(".toxic-counter").val() : 0,
			moves: [
				getMoveDetails(pokeInfo.find(".move1"), name, ability, item, isDynamaxed),
				getMoveDetails(pokeInfo.find(".move2"), name, ability, item, isDynamaxed),
				getMoveDetails(pokeInfo.find(".move3"), name, ability, item, isDynamaxed),
				getMoveDetails(pokeInfo.find(".move4"), name, ability, item, isDynamaxed)
			],
			overrides: {
				baseStats: baseStats,
				types: types
			}
		});
	}
}
function getMoveDetails(moveInfo, species, ability, item, useMax) {
	var moveName = moveInfo.find("select.move-selector").val();
	var isZMove = gen > 6 && moveInfo.find("input.move-z").prop("checked");
	var isCrit = moveInfo.find(".move-crit").prop("checked");
	var hits = +moveInfo.find(".move-hits").val();
	var timesUsed = +moveInfo.find(".stat-drops").val();
	var timesUsedWithMetronome = moveInfo.find(".metronome").is(':visible') ? +moveInfo.find(".metronome").val() : 1;
	var overrides = {
		basePower: +moveInfo.find(".move-bp").val(),
		type: moveInfo.find(".move-type").val()
	};
	if (gen >= 4) overrides.category = moveInfo.find(".move-cat").val();
	return new calc.Move(gen, moveName, {
		ability: ability, item: item, useZ: isZMove, species: species, isCrit: isCrit, hits: hits,
		timesUsed: timesUsed, timesUsedWithMetronome: timesUsedWithMetronome, overrides: overrides, useMax: useMax
	});
}

function startsWith(string, target) {
	return (string || '').slice(0, target.length) === target;
}

var LEGACY_STATS_RBY = ["hp", "at", "df", "sl", "sp"];
var LEGACY_STATS_GSC = ["hp", "at", "df", "sa", "sd", "sp"];
var LEGACY_STATS = [[], LEGACY_STATS_RBY, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC, LEGACY_STATS_GSC];
var HIDDEN_POWER_REGEX = /Hidden Power (\w*)/;

var CALC_STATUS = {
	'Healthy': '',
	'Paralyzed': 'par',
	'Poisoned': 'psn',
	'Badly Poisoned': 'tox',
	'Burned': 'brn',
	'Asleep': 'slp',
	'Frozen': 'frz'
};

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

// input field validation
var bounds = {
	"level": [0, 100],
	"base": [1, 255],
	"evs": [0, 252],
	"ivs": [0, 31],
	"dvs": [0, 15],
	"move-bp": [0, 65535]
};
for (var bounded in bounds) {
	attachValidation(bounded, bounds[bounded][0], bounds[bounded][1]);
}
function attachValidation(clazz, min, max) {
	$("." + clazz).keyup(function () {
		validate($(this), min, max);
	});
}
function validate(obj, min, max) {
	obj.val(Math.max(min, Math.min(max, ~~obj.val())));
}

$("input:radio[name='format']").change(function () {
	var gameType = $("input:radio[name='format']:checked").val();
	if (gameType === 'Singles') {
		$("input:checkbox[name='ruin']:checked").prop("checked", false);
	}
	$(".format-specific." + gameType.toLowerCase()).each(function () {
		if ($(this).hasClass("gen-specific") && !$(this).hasClass("g" + gen)) {
			return;
		}
		$(this).show();
	});
	$(".format-specific").not("." + gameType.toLowerCase()).hide();
});

// auto-calc stats and current HP on change
$(".level").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcHP(poke);
	calcStats(poke);
});
$(".nature").bind("keyup change", function () {
	calcStats($(this).closest(".poke-info"));
});
$(".hp .base, .hp .evs, .hp .ivs").bind("keyup change", function () {
	calcHP($(this).closest(".poke-info"));
});
$(".at .base, .at .evs, .at .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'at');
});
$(".df .base, .df .evs, .df .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'df');
});
$(".sa .base, .sa .evs, .sa .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'sa');
});
$(".sd .base, .sd .evs, .sd .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'sd');
});
$(".sp .base, .sp .evs, .sp .ivs").bind("keyup change", function () {
	calcStat($(this).closest(".poke-info"), 'sp');
});
$(".sl .base").keyup(function () {
	calcStat($(this).closest(".poke-info"), 'sl');
});
$(".at .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'at');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".df .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'df');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sa .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'sa');
	poke.find(".sd .dvs").val($(this).val());
	calcStat(poke, 'sd');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sp .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'sp');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});
$(".sl .dvs").keyup(function () {
	var poke = $(this).closest(".poke-info");
	calcStat(poke, 'sl');
	poke.find(".hp .dvs").val(getHPDVs(poke));
	calcHP(poke);
});

function getHPDVs(poke) {
	return (~~poke.find(".at .dvs").val() % 2) * 8 +
(~~poke.find(".df .dvs").val() % 2) * 4 +
(~~poke.find(".sp .dvs").val() % 2) * 2 +
(~~poke.find(gen === 1 ? ".sl .dvs" : ".sa .dvs").val() % 2);
}

function calcStats(poke) {
	for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
		calcStat(poke, LEGACY_STATS[gen][i]);
	}
}

function calcCurrentHP(poke, max, percent, skipDraw) {
	var current = Math.round(Number(percent) * Number(max) / 100);
	poke.find(".current-hp").val(current);
	if (!skipDraw) drawHealthBar(poke, max, current);
	return current;
}
function calcPercentHP(poke, max, current, skipDraw) {
	var percent = Math.round(100 * Number(current) / Number(max));
	if (percent === 0 && current > 0) {
		percent = 1;
	} else if (percent === 100 & current < max) {
		percent = 99;
	}

	poke.find(".percent-hp").val(percent);
	if (!skipDraw) drawHealthBar(poke, max, current);
	return percent;
}
function drawHealthBar(poke, max, current) {
	var fillPercent = 100 * current / max;
	var fillColor = fillPercent > 50 ? "green" : fillPercent > 20 ? "yellow" : "red";

	var healthbar = poke.find(".hpbar");
	healthbar.addClass("hp-" + fillColor);
	var unwantedColors = ["green", "yellow", "red"];
	unwantedColors.splice(unwantedColors.indexOf(fillColor), 1);
	for (var i = 0; i < unwantedColors.length; i++) {
		healthbar.removeClass("hp-" + unwantedColors[i]);
	}
	healthbar.css("background", "linear-gradient(to right, " + fillColor + " " + fillPercent + "%, white 0%");
}
// TODO: these HP inputs should really be input type=number with min=0, step=1, constrained by max=maxHP or 100
$(".current-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").text();
	validate($(this), 0, max);
	var current = $(this).val();
	calcPercentHP($(this).parent(), max, current);
});
$(".percent-hp").keyup(function () {
	var max = $(this).parent().children(".max-hp").text();
	validate($(this), 0, 100);
	var percent = $(this).val();
	calcCurrentHP($(this).parent(), max, percent);
});

$(".ability").bind("keyup change", function () {
	$(this).closest(".poke-info").find(".move-hits").val($(this).val() === 'Skill Link' ? 5 : 3);

	var ability = $(this).closest(".poke-info").find(".ability").val();

	var TOGGLE_ABILITIES = ['Flash Fire', 'Intimidate', 'Minus', 'Plus', 'Slow Start', 'Unburden', 'Stakeout'];

	if (TOGGLE_ABILITIES.indexOf(ability) >= 0) {
		$(this).closest(".poke-info").find(".abilityToggle").show();
	} else {
		$(this).closest(".poke-info").find(".abilityToggle").hide();
	}

	var boostedStat = $(this).closest(".poke-info").find(".boostedStat");
	if (['Protosynthesis', 'Quark Drive'].indexOf(ability) >= 0) {
		boostedStat.show();
	} else {
		boostedStat.hide();
	}

	if (ability === "Supreme Overlord") {
		$(this).closest(".poke-info").find(".alliesFainted").show();
	} else {
		$(this).closest(".poke-info").find(".alliesFainted").val('0');
		$(this).closest(".poke-info").find(".alliesFainted").hide();

	}
});

$("#p1 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 0);
	autosetTerrain($(this).val(), 0);
});

var lastManualWeather = "";
var lastAutoWeather = ["", ""];
function autosetWeather(ability, i) {
	var currentWeather = $("input:radio[name='weather']:checked").val();
	if (lastAutoWeather.indexOf(currentWeather) === -1) {
		lastManualWeather = currentWeather;
		lastAutoWeather[1 - i] = "";
	}
	switch (ability) {
	case "Drought":
	case "Orichalcum Pulse":
		lastAutoWeather[i] = "Sun";
		$("#sun").prop("checked", true);
		break;
	case "Drizzle":
		lastAutoWeather[i] = "Rain";
		$("#rain").prop("checked", true);
		break;
	case "Sand Stream":
		lastAutoWeather[i] = "Sand";
		$("#sand").prop("checked", true);
		break;
	case "Snow Warning":
		if (gen >= 9) {
			lastAutoWeather[i] = "Snow";
			$("#snow").prop("checked", true);
		} else {
			lastAutoWeather[i] = "Hail";
			$("#hail").prop("checked", true);
		}
		break;
	case "Desolate Land":
		lastAutoWeather[i] = "Harsh Sunshine";
		$("#harsh-sunshine").prop("checked", true);
		break;
	case "Primordial Sea":
		lastAutoWeather[i] = "Heavy Rain";
		$("#heavy-rain").prop("checked", true);
		break;
	case "Delta Stream":
		lastAutoWeather[i] = "Strong Winds";
		$("#strong-winds").prop("checked", true);
		break;
	default:
		lastAutoWeather[i] = "";
		var newWeather = lastAutoWeather[1 - i] !== "" ? lastAutoWeather[1 - i] : "";
		$("input:radio[name='weather'][value='" + newWeather + "']").prop("checked", true);
		break;
	}
}

var lastManualTerrain = "";
var lastAutoTerrain = ["", ""];
function autosetTerrain(ability, i) {
	var currentTerrain = $("input:checkbox[name='terrain']:checked").val() || "No terrain";
	if (lastAutoTerrain.indexOf(currentTerrain) === -1) {
		lastManualTerrain = currentTerrain;
		lastAutoTerrain[1 - i] = "";
	}
	// terrain input uses checkbox instead of radio, need to uncheck all first
	$("input:checkbox[name='terrain']:checked").prop("checked", false);
	switch (ability) {
	case "Electric Surge":
	case "Hadron Engine":
		lastAutoTerrain[i] = "Electric";
		$("#electric").prop("checked", true);
		break;
	case "Grassy Surge":
		lastAutoTerrain[i] = "Grassy";
		$("#grassy").prop("checked", true);
		break;
	case "Misty Surge":
		lastAutoTerrain[i] = "Misty";
		$("#misty").prop("checked", true);
		break;
	case "Psychic Surge":
		lastAutoTerrain[i] = "Psychic";
		$("#psychic").prop("checked", true);
		break;
	default:
		lastAutoTerrain[i] = "";
		var newTerrain = lastAutoTerrain[1 - i] !== "" ? lastAutoTerrain[1 - i] : lastManualTerrain;
		if ("No terrain" !== newTerrain) {
			$("input:checkbox[name='terrain'][value='" + newTerrain + "']").prop("checked", true);
		}
		break;
	}
}

$("#p1 .item").bind("keyup change", function () {
	autosetStatus("#p1", $(this).val());
});

var lastManualStatus = {"#p1": "Healthy"};
var lastAutoStatus = {"#p1": "Healthy"};
function autosetStatus(p, item) {
	var currentStatus = $(p + " .status").val();
	if (currentStatus !== lastAutoStatus[p]) {
		lastManualStatus[p] = currentStatus;
	}
	if (item === "Flame Orb") {
		lastAutoStatus[p] = "Burned";
		$(p + " .status").val("Burned");
		$(p + " .status").change();
	} else if (item === "Toxic Orb") {
		lastAutoStatus[p] = "Badly Poisoned";
		$(p + " .status").val("Badly Poisoned");
		$(p + " .status").change();
	} else {
		lastAutoStatus[p] = "Healthy";
		if (currentStatus !== lastManualStatus[p]) {
			$(p + " .status").val(lastManualStatus[p]);
			$(p + " .status").change();
		}
	}
}

$(".status").bind("keyup change", function () {
	if ($(this).val() === 'Badly Poisoned') {
		$(this).parent().children(".toxic-counter").show();
	} else {
		$(this).parent().children(".toxic-counter").hide();
	}
});


$(".item").change(function () {
	var itemName = $(this).val();
	var $metronomeControl = $(this).closest('.poke-info').find('.metronome');
	if (itemName === "Metronome") {
		$metronomeControl.show();
	} else {
		$metronomeControl.hide();
	}
});

function formatMovePool(moves) {
	var formatted = [];
	for (var i = 0; i < moves.length; i++) {
		formatted.push(isKnownDamagingMove(moves[i]) ? moves[i] : '<i>' + moves[i] + '</i>');
	}
	return formatted.join(', ');
}

function isKnownDamagingMove(move) {
	var m = GENERATION.moves.get(calc.toID(move));
	return m && m.basePower;
}

function selectMovesFromRandomOptions(moves) {
	var selected = [];

	var nonDamaging = [];
	for (var i = 0; i < moves.length; i++) {
		if (isKnownDamagingMove(moves[i])) {
			selected.push(moves[i]);
			if (selected.length >= 4) break;
		} else {
			nonDamaging.push(moves[i]);
		}
	}

	while (selected.length < 4 && nonDamaging.length) {
		selected.push(nonDamaging.pop());
	}

	return selected;
}

function showFormes(formeObj, pokemonName, pokemon, baseFormeName) {
	var formes = pokemon.otherFormes.slice();
	formes.unshift(baseFormeName);

	var defaultForme = formes.indexOf(pokemonName);
	if (defaultForme < 0) defaultForme = 0;

	var formeOptions = getSelectOptions(formes, false, defaultForme);
	formeObj.children("select").find("option").remove().end().append(formeOptions).change();
	formeObj.show();
}

function setSelectValueIfValid(select, value, fallback) {
	select.val(!value ? fallback : select.children("option[value='" + value + "']").length ? value : fallback);
}

$(".forme").change(function () {
	var altForme = pokedex[$(this).val()],
		container = $(this).closest(".info-group").siblings(),
		selectID = container.find(".select2-chosen").first().text(),
		parsed = parseSelector(selectID);

	var trainerID	= parsed[0],
		trainer		= parsed[1],
		pokemon 	= parsed[2],
		pokemonName = parsed[3];
	$(this).parent().siblings().find(".type1").val(altForme.types[0]);
	$(this).parent().siblings().find(".type2").val(altForme.types[1] ? altForme.types[1] : "");
	for (var i = 0; i < LEGACY_STATS[9].length; i++) {
		var baseStat = container.find("." + LEGACY_STATS[9][i]).find(".base");
		baseStat.val(altForme.bs[LEGACY_STATS[9][i]]);
		baseStat.keyup();
	}
	var chosenSet = pokemon;
	var greninjaSet = $(this).val().indexOf("Greninja") !== -1;
	var isAltForme = $(this).val() !== pokemonName;
	if (isAltForme && abilities.indexOf(altForme.ab) !== -1 && !greninjaSet) {
		container.find(".ability").val(altForme.ab);
	} else if (greninjaSet) {
		$(this).parent().find(".ability");
	} else if (chosenSet) {
		container.find(".ability").val(chosenSet.abilities[0]);
	}
	var innates = container.find(".innates");
	for (var i = 0; i < 3; i++){
		setSelectValueIfValid(innates.eq(i), altForme.innates[i], "");
	}
	container.find(".ability").keyup();

	if ($(this).val().indexOf("-Mega") !== -1 && $(this).val() !== "Rayquaza-Mega") {
		container.find(".item").val("").keyup();
	} else {
		container.find(".item").prop("disabled", false);
	}
});
function correctCompactedIVEV(pokemon){
	if (pokemon.evs){
		var hp = pokemon.evs.hp ? pokemon.evs.hp : pokemon.evs[0] ? pokemon.evs[0] : 0;
		var at = pokemon.evs.at ? pokemon.evs.at : pokemon.evs[1] ? pokemon.evs[1] : 0;
		var df = pokemon.evs.df ? pokemon.evs.df : pokemon.evs[2] ? pokemon.evs[2] : 0;
		var sa = pokemon.evs.sa ? pokemon.evs.sa : pokemon.evs[3] ? pokemon.evs[3] : 0;
		var sd = pokemon.evs.sd ? pokemon.evs.sd : pokemon.evs[4] ? pokemon.evs[4] : 0;
		var sp = pokemon.evs.sp ? pokemon.evs.sp : pokemon.evs[5] ? pokemon.evs[5] : 0;
		if (typeof at === "function") at = pokemon.evs[1] //at is array function of at()...
		pokemon.evs = {hp: hp, at: at, df, df, sa: sa, sd: sd, sp:sp};
	}
	if (pokemon.ivs){
		hp = pokemon.ivs.hp ? pokemon.ivs.hp : pokemon.ivs[0] ? pokemon.ivs[0] : 0;
		at = pokemon.ivs.at ? pokemon.ivs.at : pokemon.ivs[1] ? pokemon.ivs[1] : 0;
		df = pokemon.ivs.df ? pokemon.ivs.df : pokemon.ivs[2] ? pokemon.ivs[2] : 0;
		sa = pokemon.ivs.sa ? pokemon.ivs.sa : pokemon.ivs[3] ? pokemon.ivs[3] : 0;
		sd = pokemon.ivs.sd ? pokemon.ivs.sd : pokemon.ivs[4] ? pokemon.ivs[4] : 0;
		sp = pokemon.ivs.sp ? pokemon.ivs.sp : pokemon.ivs[5] ? pokemon.ivs[5] : 0;
		if (typeof at === "function") at = pokemon.ivs[1]
		pokemon.ivs = {hp: hp, at: at, df, df, sa: sa, sd: sd, sp:sp};
	}
	
	return pokemon;
}


function correctHiddenPower(pokemon) {
	// After Gen 7 bottlecaps means you can have a HP without perfect IVs
	if (gen >= 7 && pokemon.level >= 100) return pokemon;

	// Convert the legacy stats table to a useful one, and also figure out if all are maxed
	var ivs = {};
	var maxed = true;
	for (var i = 0; i <= LEGACY_STATS[9].length; i++) {
		var s = LEGACY_STATS[9][i];
		var iv = ivs[legacyStatToStat(s)] = (pokemon.ivs && pokemon.ivs[s]) || 31;
		if (iv !== 31) maxed = false;
	}

	var expected = calc.Stats.getHiddenPower(GENERATION, ivs);
	for (var i = 0; i < pokemon.moves.length; i++) {
		var m = pokemon.moves[i].match(HIDDEN_POWER_REGEX);
		if (!m) continue;
		// The Pokemon has Hidden Power and is not maxed but the types don't match we don't
		// want to attempt to reconcile the user's IVs so instead just correct the HP type
		if (!maxed && expected.type !== m[1]) {
			pokemon.moves[i] = "Hidden Power " + expected.type;
		} else {
			// Otherwise, use the default preset hidden power IVs that PS would use
			var hpIVs = calc.Stats.getHiddenPowerIVs(GENERATION, m[1]);
			if (!hpIVs) continue; // some impossible type was specified, ignore

			pokemon.ivs = pokemon.ivs || {hp: 31, at: 31, df: 31, sa: 31, sd: 31, sp: 31};
			pokemon.dvs = pokemon.dvs || {hp: 15, at: 15, df: 15, sa: 15, sd: 15, sp: 15};
			for (var stat in hpIVs) {
				pokemon.ivs[calc.Stats.shortForm(stat)] = hpIVs[stat];
				pokemon.dvs[calc.Stats.shortForm(stat)] = calc.Stats.IVToDV(hpIVs[stat]);
			}
			if (gen < 3) {
				pokemon.dvs.hp = calc.Stats.getHPDV({
					atk: pokemon.ivs.at,
					def: pokemon.ivs.df,
					spe: pokemon.ivs.sp,
					spc: pokemon.ivs.sa
				});
				pokemon.ivs.hp = calc.Stats.DVToIV(pokemon.dvs.hp);
			}
		}
	}
	return pokemon;
}

function getGender(gender) {
	if (!gender || gender === 'genderless' || gender === 'N') return 'N';
	if (gender.toLowerCase() === 'male' || gender === 'M') return 'M';
	return 'F';
}


function calcHP(poke) {
	var total = calcStat(poke, "hp");
	var $maxHP = poke.find(".max-hp");

	var prevMaxHP = Number($maxHP.attr('data-prev')) || total;
	var $currentHP = poke.find(".current-hp");
	var prevCurrentHP = $currentHP.attr('data-set') ? Math.min(Number($currentHP.val()), prevMaxHP) : prevMaxHP;
	// NOTE: poke.find(".percent-hp").val() is a rounded value!
	var prevPercentHP = 100 * prevCurrentHP / prevMaxHP;

	$maxHP.text(total);
	$maxHP.attr('data-prev', total);

	var newCurrentHP = calcCurrentHP(poke, total, prevPercentHP);
	calcPercentHP(poke, total, newCurrentHP);

	$currentHP.attr('data-set', true);
}

function calcStat(poke, StatID) {
	var stat = poke.find("." + StatID);
	var base = ~~stat.find(".base").val();
	var level = ~~poke.find(".level").val();
	var nature, ivs, evs;
	if (gen < 3) {
		ivs = ~~stat.find(".dvs").val() * 2;
		evs = 252;
	} else {
		ivs = ~~stat.find(".ivs").val();
		evs = ~~stat.find(".evs").val();
		if (StatID !== "hp") nature = poke.find(".nature").val();
	}
	// Shedinja still has 1 max HP during the effect even if its Dynamax Level is maxed (DaWoblefet)
	var total = calc.calcStat(gen, legacyStatToStat(StatID), base, ivs, evs, level, nature);
	if (gen > 7 && StatID === "hp" && poke.isDynamaxed && total !== 1) {
		total *= 2;
	}
	stat.find(".total").text(total);
	return total;
}



$(".notation").change(function () {
	notation = $(this).val();
});

function clearField() {
	$("#singles-format").prop("checked", true);
	$("#clear").prop("checked", true);
	$("#gscClear").prop("checked", true);
	$("#gravity").prop("checked", false);
	$("#srL").prop("checked", false);
	$("#srR").prop("checked", false);
	$("#spikesL0").prop("checked", true);
	$("#spikesR0").prop("checked", true);
	$("#gscSpikesL").prop("checked", false);
	$("#gscSpikesR").prop("checked", false);
	$("#steelsurgeL").prop("checked", false);
	$("#steelsurgeR").prop("checked", false);
	$("#vinelashL").prop("checked", false);
	$("#vinelashR").prop("checked", false);
	$("#wildfireL").prop("checked", false);
	$("#wildfireR").prop("checked", false);
	$("#cannonadeL").prop("checked", false);
	$("#cannonadeR").prop("checked", false);
	$("#volcalithL").prop("checked", false);
	$("#volcalithR").prop("checked", false);
	$("#reflectL").prop("checked", false);
	$("#reflectR").prop("checked", false);
	$("#lightScreenL").prop("checked", false);
	$("#lightScreenR").prop("checked", false);
	$("#protectL").prop("checked", false);
	$("#protectR").prop("checked", false);
	$("#leechSeedL").prop("checked", false);
	$("#leechSeedR").prop("checked", false);
	$("#foresightL").prop("checked", false);
	$("#foresightR").prop("checked", false);
	$("#helpingHandL").prop("checked", false);
	$("#helpingHandR").prop("checked", false);
	$("#tailwindL").prop("checked", false);
	$("#tailwindR").prop("checked", false);
	$("#friendGuardL").prop("checked", false);
	$("#friendGuardR").prop("checked", false);
	$("#auroraVeilL").prop("checked", false);
	$("#auroraVeilR").prop("checked", false);
	$("#batteryL").prop("checked", false);
	$("#batteryR").prop("checked", false);
	$("#switchingL").prop("checked", false);
	$("#switchingR").prop("checked", false);
	$("input:checkbox[name='terrain']").prop("checked", false);
}

function getSetOptions() {
	var setOptions = [];
	if (!document.getElementById('pokemons-only').checked) {
		//the zero trainer is off because it means no trainer in further devellopement
		for (var i = 1; i < setdex.length; i++) {
			var trainer = setdex[i];
			setOptions.push({
				text: trainer.trn,
				id: i, /*without id it doesn't get selectable*/
			});
			if (document.getElementById('no-pokedex').checked || document.getElementById("any-selection").checked) {
				if (!trainer.mons) {
					continue
				}
				for (var j = 0; j < trainer.mons.length; j++) {
					
					var mon = trainer.mons[j];
					if (!mon) {
						continue;
					}
					setOptions.push({
						text: mon.species + " : " + trainer.trn,
						id: i + ";" + j,
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
var stickyMoves = (function () {
	var lastClicked = 'resultMoveL1';
	$(".result-move").click(function () {
		if (this.id === lastClicked) {
			$(this).toggleClass("locked-move");
		} else {
			$('.locked-move').removeClass('locked-move');
		}
		lastClicked = this.id;
	});

	return {
		clearStickyMove: function () {
			lastClicked = null;
			$('.locked-move').removeClass('locked-move');
		},
		setSelectedMove: function (slot) {
			lastClicked = slot;
		},
		getSelectedSide: function () {
			if (lastClicked) {
				if (lastClicked.indexOf('resultMoveL') !== -1) {
					return 'p1';
				} else if (lastClicked.indexOf('resultMoveR') !== -1) {
					return 'p2';
				}
			}
			return null;
		}
	};
})();

function isPokeInfoGrounded(pokeInfo) {
	var teraType = pokeInfo.find(".teraToggle").is(":checked") ? pokeInfo.find(".teraType").val() : undefined;
	return $("#gravity").prop("checked") || (
		  teraType ? teraType !== "Flying" : pokeInfo.find(".type1").val() !== "Flying" &&
        teraType ? teraType !== "Flying" : pokeInfo.find(".type2").val() !== "Flying" &&
        pokeInfo.find(".ability").val() !== "Levitate" &&
        pokeInfo.find(".item").val() !== "Air Balloon"
	);
}

function getTerrainEffects() {
	var className = $(this).prop("className");
	className = className.substring(0, className.indexOf(" "));
	switch (className) {
	case "type1":
	case "type2":
	case "teraType":
	case "teraToggle":
	case "item":
		var id = $(this).closest(".poke-info").prop("id");
		var terrainValue = $("input:checkbox[name='terrain']:checked").val();
		if (terrainValue === "Electric") {
			$("#" + id).find("[value='Asleep']").prop("disabled", isPokeInfoGrounded($("#" + id)));
		} else if (terrainValue === "Misty") {
			$("#" + id).find(".status").prop("disabled", isPokeInfoGrounded($("#" + id)));
		}
		break;
	case "ability":
		// with autoset, ability change may cause terrain change, need to consider both sides
		var terrainValue = $("input:checkbox[name='terrain']:checked").val();
		if (terrainValue === "Electric") {
			$("#p1").find(".status").prop("disabled", false);
			$("#p2").find(".status").prop("disabled", false);
			$("#p1").find("[value='Asleep']").prop("disabled", isPokeInfoGrounded($("#p1")));
			$("#p2").find("[value='Asleep']").prop("disabled", isPokeInfoGrounded($("#p2")));
		} else if (terrainValue === "Misty") {
			$("#p1").find(".status").prop("disabled", isPokeInfoGrounded($("#p1")));
			$("#p2").find(".status").prop("disabled", isPokeInfoGrounded($("#p2")));
		} else {
			$("#p1").find("[value='Asleep']").prop("disabled", false);
			$("#p1").find(".status").prop("disabled", false);
			$("#p2").find("[value='Asleep']").prop("disabled", false);
			$("#p2").find(".status").prop("disabled", false);
		}
		break;
	default:
		$("input:checkbox[name='terrain']").not(this).prop("checked", false);
		if ($(this).prop("checked") && $(this).val() === "Electric") {
			// need to enable status because it may be disabled by Misty Terrain before.
			$("#p1").find(".status").prop("disabled", false);
			$("#p2").find(".status").prop("disabled", false);
			$("#p1").find("[value='Asleep']").prop("disabled", isPokeInfoGrounded($("#p1")));
			$("#p2").find("[value='Asleep']").prop("disabled", isPokeInfoGrounded($("#p2")));
		} else if ($(this).prop("checked") && $(this).val() === "Misty") {
			$("#p1").find(".status").prop("disabled", isPokeInfoGrounded($("#p1")));
			$("#p2").find(".status").prop("disabled", isPokeInfoGrounded($("#p2")));
		} else {
			$("#p1").find("[value='Asleep']").prop("disabled", false);
			$("#p1").find(".status").prop("disabled", false);
			$("#p2").find("[value='Asleep']").prop("disabled", false);
			$("#p2").find(".status").prop("disabled", false);
		}
		break;
	}
}

function loadDefaultLists() {
	$(".set-selector").select2({
		//when a result is push to deal with the rendering it goes throught it function here
		formatResult: function (object) {
			return object.isMon ? object.text : "<b>" + object.text + "</b>";
		},
		//gets called when the user type something in
		query: function (query) {
			var pageSize = 30;
			var results = [];
			var options = getSetOptions();
			for (var i = 0; i < options.length; i++) {
				var option = options[i];
				var pokeName = option.text.toUpperCase();
				if (!query.term || query.term.toUpperCase().split(" ").every(function (term) {
					return pokeName.indexOf(term) === 0 || pokeName.indexOf("-" + term) >= 0 || pokeName.indexOf(" " + term) >= 0;
				})) {
					results.push(option);
				}
			}
			query.callback({
				results: results.slice((query.page - 1) * pageSize, query.page * pageSize),
				more: results.length >= query.page * pageSize
			});
		},
		// gets called after the initialization
		initSelection: function (element, callback) {
			callback(getSetOptions()[1]);
		}
	});
}

function allPokemon(selector) {
	var allSelector = "";
	for (var i = 0; i < $(".poke-info").length; i++) {
		if (i > 0) {
			allSelector += ", ";
		}
		allSelector += "#p" + (i + 1) + " " + selector;
	}
	return allSelector;
}

function saveTrigger(ev) {
	var isUser = ev.originalEvent ? ev.originalEvent.isTrusted : false;
	if (isUser || ev.added) { //ev.added is for the moves buttons
		$('#save-change').attr("hidden", false);
	}
}

function saveTrainerPokemon() {
	var saveField = $("#p2");
	$('#save-change').attr("hidden", true);
	var poke = createPokemon(saveField);
	poke.species = poke.name;
	for (var i = 0; i < 4; i++) {
		poke.moves[i] = poke.moves[i].originalName;
	}
	delete poke.boosts
    delete poke.evs
    delete poke.gen
    delete poke.nfe
    delete poke.originalCurHP
    delete poke.rawStats
    delete poke.status
    delete poke.stats
    delete poke.types
    delete poke.toxicCounter
    delete poke.abilityOn
    delete poke.alliesFainted
    delete poke.abilities
    delete poke.bs
    delete poke.isDynamaxed
    delete poke.isSaltCure
    delete poke.weightkg
    delete poke.name
	delete poke.dynamaxLevel
    delete poke.boostedStat
	delete poke.innates
	delete poke.innatesOn
	poke.level = 0 //typical of redux elite
	delete poke.id
    if (!poke.teraType) delete poke.teraTyp
	if(setdex[window.current_trainer_id].flagid){
		var flagid = setdex[window.current_trainer_id].flagid.split(";")
		var flag = flagid[0]
		var id = flagid[1]
		if (flag === "rem"){
			setdex[window.current_trainer_id][flag][id][window.current_pokemon_id] = poke
		} else {
			setdex[window.current_trainer_id][flag][id].mons[window.current_pokemon_id] = poke
		}
		
	}else{
		setdex[window.current_trainer_id].mons[window.current_pokemon_id] = poke;
	}
	saveTrainer();
	
}

function importSets() {
	var textDiv = document.getElementById("import-zone");
	var text = textDiv.value;
	var monsList = window.addSets(text);
	if (monsList.length <= 0) {
		return;
	}
	var box = document.getElementById("poke-box");
	var offsetid = box.childElementCount;
	for (var i = 0; i < monsList.length; i++) {
		var poke = monsList[i];

		addBoxed(box, poke, parseInt(offsetid) + parseInt(i));
		setdex[window.current_trainer_id].mons.push(poke);
	}
	textDiv.value = "";
}
$(".move-selector").change(function () {
	var moveName = $(this).val();
	var move = moves[moveName] || moves['(No Move)'];
	var moveGroupObj = $(this).parent();
	moveGroupObj.children(".move-bp").val(moveName === 'Present' ? 40 : move.bp);
	var m = moveName.match(HIDDEN_POWER_REGEX);
	if (m) {
		var pokeObj = $(this).closest(".poke-info");
		var pokemon = createPokemon(pokeObj);
		var actual = calc.Stats.getHiddenPower(GENERATION, pokemon.ivs);
		if (actual.type !== m[1]) {
			var hpIVs = calc.Stats.getHiddenPowerIVs(GENERATION, m[1]);
			if (hpIVs && gen < 7) {
				for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
					var legacyStat = LEGACY_STATS[gen][i];
					var stat = legacyStatToStat(legacyStat);
					pokeObj.find("." + legacyStat + " .ivs").val(hpIVs[stat] !== undefined ? hpIVs[stat] : 31);
					pokeObj.find("." + legacyStat + " .dvs").val(hpIVs[stat] !== undefined ? calc.Stats.IVToDV(hpIVs[stat]) : 15);
				}
				if (gen < 3) {
					var hpDV = calc.Stats.getHPDV({
						atk: pokeObj.find(".at .ivs").val(),
						def: pokeObj.find(".df .ivs").val(),
						spe: pokeObj.find(".sp .ivs").val(),
						spc: pokeObj.find(".sa .ivs").val()
					});
					pokeObj.find(".hp .ivs").val(calc.Stats.DVToIV(hpDV));
					pokeObj.find(".hp .dvs").val(hpDV);
				}
				pokeObj.change();
				moveGroupObj.children(".move-bp").val(gen >= 6 ? 60 : 70);
			}
		} else {
			moveGroupObj.children(".move-bp").val(actual.power);
		}
	} else if (gen >= 2 && gen <= 6 && HIDDEN_POWER_REGEX.test($(this).attr('data-prev'))) {
		// If this selector was previously Hidden Power but now isn't, reset all IVs/DVs to max.
		var pokeObj = $(this).closest(".poke-info");
		for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
			var legacyStat = LEGACY_STATS[gen][i];
			pokeObj.find("." + legacyStat + " .ivs").val(31);
			pokeObj.find("." + legacyStat + " .dvs").val(15);
		}
	}
	$(this).attr('data-prev', moveName);
	moveGroupObj.children(".move-type").val(move.type);
	moveGroupObj.children(".move-cat").val(move.category);
	moveGroupObj.children(".move-crit").prop("checked", move.willCrit === true);

	var stat = move.category === 'Special' ? 'spa' : 'atk';
	var dropsStats =
		move.self && move.self.boosts && move.self.boosts[stat] && move.self.boosts[stat] < 0;
	if (Array.isArray(move.multihit)) {
		moveGroupObj.children(".stat-drops").hide();
		moveGroupObj.children(".move-hits").show();
		var pokemon = $(this).closest(".poke-info");
		var moveHits = (pokemon.find(".ability").val() === 'Skill Link') ? 5 : 3;
		moveGroupObj.children(".move-hits").val(moveHits);
	} else if (dropsStats) {
		moveGroupObj.children(".move-hits").hide();
		moveGroupObj.children(".stat-drops").show();
	} else {
		moveGroupObj.children(".move-hits").hide();
		moveGroupObj.children(".stat-drops").hide();
	}
	moveGroupObj.children(".move-z").prop("checked", false);
});

//flag => "mons", "rem", "insane, "alt"
function trainerTeamChange(flag, id){
	saveTrainerPokemon();
	if (!flag) return
	var trn = setdex[current_trainer_id]
	switch(flag){
		case "alt":
			// if we're in a rematch, put it down
			if (trn.swp){
				trn.mons = trn.swp;
				delete trn.swp;
				delete trn.flagid
			}
			// if we change from the base one, we need to save it in the trainer swap
			if (!trn.trnswp){
				trn.trnswp = {
					trn : trn.trn,
					mons : trn.mons,
					rem : trn.rem,
				}
			}
			// then we can change all the trainer settings to the currentrainer
			// like taking the fork of the little kitchen inside the kitchen to replace the fork of the kitchen
			// Jeez i plain my future self to have to understand my current code, it's very wonderlandish
			if (id === "Base"){
				trn.trn = trn.trnswp.trn
				trn.mons = trn.trnswp.mons
				trn.rem = trn.trnswp.rem
				delete trn.trnswp
				delete trn.flagid
			} else {
				var alt = trn.alt[id];
				trn.trn = alt.trn;
				trn.mons = alt.mons;
				trn.rem = alt.rem;
				trn.flagid = flag + ";" + id;
			}
			break;
		case "rem":
			if (!trn.swp){
				trn.swp = trn.mons;
			}
			trn.mons = trn[flag][id];
			trn.flagid = flag + ";" + id
			break;
		case "insane":
			if (!trn.swp){
				trn.swp = trn.mons;
			}
			trn.mons = trn[flag];
			trn.flagid = flag + ";" + id
			break;
		case "mons":
			if (trn.swp){
				trn.mons = trn.swp;
				delete trn.swp;
				delete trn.flagid;
			}
			break;
		default:
			return
	}
	boxOppositeTrainer(trn)
}
function rematchAlternativeShow(trainer){
	if (!trainer) return
	//rematch
	var div = document.getElementById("rematches");
	if (trainer.rem){
		div.removeAttribute("hidden");
		div.innerText = "Rematches :"
		var baseBtn = document.createElement("button");
			baseBtn.innerText = "Base";
			baseBtn.onclick = ()=>{trainerTeamChange("mons")};
		div.append(baseBtn)
		var rems = trainer.rem
		for(var i = 0; i < rems.length; i++){
			var newBtn = document.createElement("button");
				newBtn.innerText = i + 1
				newBtn.dataset.id = i
				newBtn.onclick = (ev)=>{trainerTeamChange("rem", ev.target.dataset.id)},
			div.append(newBtn)
		}
	} else{
		div.setAttribute("hidden", true);
	}
	// alternative or insane
	div = document.getElementById("alternatives")
	if (!trainer.insane && !trainer.alt){
		div.setAttribute("hidden", true);
		return
	}
	div.removeAttribute("hidden");
	div.innerText = "Alternatives :"
	if(trainer.insane){
		var baseBtn = document.createElement("button");
			baseBtn.innerText = "Base";
			baseBtn.onclick = ()=>{trainerTeamChange("mons")};
		div.append(baseBtn)
		var insaneBtn = document.createElement("button");
			insaneBtn.innerText = "Insane";
			insaneBtn.onclick = ()=>{trainerTeamChange("insane")};
		div.append(insaneBtn)
	}
	var newBtn = document.createElement("button");
		newBtn.innerText = setdex[current_trainer_id].trn;
		newBtn.dataset.id = 'Base';
		newBtn.onclick = (ev)=>{trainerTeamChange("alt", ev.target.dataset.id)},
	div.append(newBtn)
	if (trainer.alt){	
		var alts = trainer.alt
		for(var i = 0; i < alts.length; i++){
			var newBtn = document.createElement("button");
			newBtn.innerText = setdex[current_trainer_id].alt[i].trn;
			dexset[setdex[current_trainer_id].alt[i].trn] = current_trainer_id
			newBtn.dataset.id = i;
			newBtn.onclick = (ev)=>{trainerTeamChange("alt", ev.target.dataset.id)},
		div.append(newBtn)
		}
	}
}

function boxOppositeTrainer(trainer){
	var box = document.getElementById("poke-box");
	box.innerText = "";
	for (var i = 0; i < trainer.mons.length; i++) {
		var poke = trainer.mons[i];
		addBoxed(box, poke, i);
	}
	//this is to skip saving the mon, it causes bug
	var select = $("#p2").closest(".panel").find("input.set-selector");
	var tar = box.children[0];
	select2Select(select, tar.dataset.id, tar.dataset.title);
}

function parseSelector(value) {
	var parsed = value.split(";");
	var trainerID, trainer, pokemon, pokemonName, pokeID;
	pokemonName = parsed[0];

	if (parsed.length == 3) {
		pokeID = parsed[2];
		window.current_pokemon_id = pokeID;
		//it's a pokemon from a trainer
		if (parsed[1] == "Player") {
			// from the player
			trainerID = 0;
			trainer = setdex[trainerID];
			pokemon = trainer.mons[pokeID];
			pokemon = Object.assign(pokemon, pokedex[pokemon.species]);
			return [trainerID, trainer, pokemon, pokemonName];
		} else {
			//for a NPC
			trainerID = window.dexset[parsed[1]];
			trainer = setdex[trainerID];
			pokemon = trainer.mons[pokeID];
			pokemon = Object.assign(pokemon, pokedex[pokemon.species]);
			return [trainerID, trainer, pokemon, pokemonName];
		}
	} else {
		trainerID = parseInt(pokemonName);
		window.current_pokemon_id = 0;
		if (isNaN(trainerID)) {
			//It's a pokemon
			return [null, null, pokedex[pokemonName], pokemonName];
		} else {
			//It's a trainer
			trainer = setdex[trainerID];
			pokemon = trainer.mons[0];
			pokemon = Object.assign(pokemon, pokedex[pokemon.species]);
			if (!pokemon) {
				return;
			}
			pokemonName = pokemon.name || pokemon.species || pokemon.baseSpecies;
			return [trainerID, trainer, pokemon, pokemonName];
		}
	}
}
// auto-update set details on select
$(".set-selector").change(function () {
	var id = $(this).val();
	var parsed = parseSelector(id);
	var trainerID	= parsed[0],
		trainer		= parsed[1],
		pokemon 	= parsed[2],
		pokemonName = parsed[3]
	if (trainer) {
		if (trainerID == 0 || window.current_trainer_id == trainerID) {
			//Trainer hasn't changed or it's the player's mon
		} else {
			// changed trainer
			if (trainer.swp) trainer.mons = trainer.swp
			document.getElementById("trainer-edition-name").value = trainer.trn;
			switchToModTrainer();
			window.current_trainer_id = parseInt(trainerID);
			rematchAlternativeShow(trainer);
			localStorage.setItem(GameName + "tid", trainerID);
			boxOppositeTrainer(trainer)
			pokemonName = pokemonName || trainer.mons[0].species;
			pokemon = pokemon || trainer.mons[0];
			Object.assign(pokemon, pokedex[pokemonName]);
			var selectVal = pokemonName + ";" + trainer.trn + ";" + 0;
			$(this).val(selectVal);
		}
	}
	if (pokemon) {
		setDataPanel($(this), pokemonName, pokemon, trainer);
	}
});

function setDataPanel(panel, pokemonName, pokemon, trainer) {
	window.NO_CALC = true;
	var pokeObj = panel.closest(".poke-info");
	if (stickyMoves.getSelectedSide() === pokeObj.prop("id")) {
		stickyMoves.clearStickyMove();
	}
	pokeObj.find(".teraToggle").prop("checked", false);
	pokeObj.find(".boostedStat").val("Auto-Select");
	pokeObj.find(".type1").val(pokemon.types[0]);
	pokeObj.find(".type2").val(pokemon.types[1]);
	pokeObj.find(".hp .base").val(pokemon.bs.hp);
	var i;
	for (i = 0; i < LEGACY_STATS[gen].length; i++) {
		pokeObj.find("." + LEGACY_STATS[gen][i] + " .base").val(pokemon.bs[LEGACY_STATS[gen][i]]);
	}
	pokeObj.find(".boost").val(0);
	pokeObj.find(".percent-hp").val(100);
	pokeObj.find(".status").val("Healthy");
	$(".status").change();
	var moveObj;
	var abilityObj = pokeObj.find(".ability");
	var itemObj = pokeObj.find(".item");

	panel.closest('.poke-info').find(".ability-pool").hide();
	panel.closest('.poke-info').find(".item-pool").hide();
	panel.closest('.poke-info').find(".role-pool").hide();
	panel.closest('.poke-info').find(".tera-type-pool").hide();
	if (trainer) {
		if (!pokemon.moves) {
			pokemon.moves=["(No Move)","(No Move)","(No Move)","(No Move)"];
		}
		var set = correctCompactedIVEV(correctHiddenPower(pokemon));
		if (trainer) {
			pokeObj.find(".teraType").val(set.teraType || pokemon.types[0]);
		}
		pokeObj.find(".level").val(set.level);
		pokeObj.find(".hp .evs").val((set.evs && set.evs.hp !== undefined) ? set.evs.hp : 0);
		pokeObj.find(".hp .ivs").val((set.ivs && set.ivs.hp !== undefined) ? set.ivs.hp : 31);
		pokeObj.find(".hp .dvs").val((set.dvs && set.dvs.hp !== undefined) ? set.dvs.hp : 15);
		for (i = 0; i < LEGACY_STATS[gen].length; i++) {
			pokeObj.find("." + LEGACY_STATS[gen][i] + " .evs").val(
				(set.evs && set.evs[LEGACY_STATS[gen][i]] !== undefined) ?
					set.evs[LEGACY_STATS[gen][i]] : 0);
			pokeObj.find("." + LEGACY_STATS[gen][i] + " .ivs").val(
				(set.ivs && set.ivs[LEGACY_STATS[gen][i]] !== undefined) ? set.ivs[LEGACY_STATS[gen][i]] : 31);
			pokeObj.find("." + LEGACY_STATS[gen][i] + " .dvs").val(
				(set.dvs && set.dvs[LEGACY_STATS[gen][i]] !== undefined) ? set.dvs[LEGACY_STATS[gen][i]] : 15);
		}
		setSelectValueIfValid(pokeObj.find(".nature"), set.nature, "Hardy");
		var abilityFallback = (typeof pokemon.abilities !== "undefined") ? pokemon.abilities[0] : "";
		setSelectValueIfValid(abilityObj, set.ability, abilityFallback);
		setSelectValueIfValid(itemObj, set.item, "");
		var innates = pokeObj.find(".innates");
		for (var i = 0; i < 3; i++){
			setSelectValueIfValid(innates.eq(i), set.innates[i], "");
		}
		var setMoves = set.moves;
		var moves = selectMovesFromRandomOptions(setMoves);
		for (i = 0; i < 4; i++) {
			moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
			moveObj.attr('data-prev', moveObj.val());
			setSelectValueIfValid(moveObj, moves[i], "(No Move)");
			moveObj.change();
		}
	} else {
		pokeObj.find(".teraType").val(pokemon.types[0]);
		pokeObj.find(".level").val(100);
		pokeObj.find(".hp .evs").val(0);
		pokeObj.find(".hp .ivs").val(31);
		pokeObj.find(".hp .dvs").val(15);
		for (i = 0; i < LEGACY_STATS[gen].length; i++) {
			pokeObj.find("." + LEGACY_STATS[gen][i] + " .evs").val(0);
			pokeObj.find("." + LEGACY_STATS[gen][i] + " .ivs").val(31);
			pokeObj.find("." + LEGACY_STATS[gen][i] + " .dvs").val(15);
		}
		pokeObj.find(".nature").val("Hardy");
		setSelectValueIfValid(abilityObj, pokemon.ab, "");
		var innates = pokeObj.find(".innates");
		for (var i = 0; i < 3; i++){
			setSelectValueIfValid(innates.eq(i), pokemon.innates[i], "");
		}
		itemObj.val("");
		for (i = 0; i < 4; i++) {
			moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
			moveObj.attr('data-prev', moveObj.val());
			moveObj.val("(No Move)");
			moveObj.change();
		}
	}
	var formeObj = panel.siblings().find(".forme").parent();
	itemObj.prop("disabled", false);
	var baseForme;
	if (pokemon.baseSpecies && pokemon.baseSpecies !== pokemon.name) {
		baseForme = pokedex[pokemon.baseSpecies];
	}
	if (pokemon.otherFormes) {
		showFormes(formeObj, pokemonName, pokemon, pokemonName);
	} else if (baseForme && baseForme.otherFormes) {
		showFormes(formeObj, pokemonName, baseForme, pokemon.baseSpecies);
	} else {
		formeObj.hide();
	}
	calcHP(pokeObj);
	calcStats(pokeObj);
	abilityObj.change();
	itemObj.change();
	if (pokemon.gender === "N") {
		//pokeObj.find(".gender").parent().hide();
		pokeObj.find(".gender").val("N");
	} else {
		var genderDiv = pokeObj.find(".gender");
		var gender = pokemon.gender === "M" ? "Male" :  pokemon.gender === "F" ? "Female" : "";
		genderDiv.val(gender);
		genderDiv.change();
		genderDiv.parent().show();
	}
	panel.closest("fieldset")[0].querySelector("img").src = getSrcImgPokemon(pokemonName);
	window.NO_CALC = false;
}

/*imitate a manual selection*/
function select2Select(select, id, title) {
	select.val(id);
	select.change();
	select.closest(".panel").find('.select2-chosen').first().text(title);
}
function iconMonClicked(ev) {
	saveTrainerPokemon();
	var select = $(this).closest(".panel").find("input.set-selector");
	var tar = ev.target;
	select2Select(select, tar.dataset.id, tar.dataset.title);
}

//check if a trainer has already the same name, return its id
function checkPreExistingTrainer(tName) {
	for (var i = 0, iLen = setdex.length; i < iLen; i++) {
		if (setdex[i].trn == tName) return i;
	}
	return undefined;
}

function saveTrainer() {
	var tName = document.getElementById("trainer-edition-name");
	if (!tName.value) {
		tName.focus();
		document.getElementById("edit-error").innerText = "Missing trainer name";
		return;
	}
	var tPoks = document.getElementById("poke-box");
	if (!tPoks.childElementCount) {
		document.getElementById("edit-error").innerText = "Missing Pokemons";
		return;
	}
	var trn = setdex[current_trainer_id]
	if (trn.trnswp){
		trn.trn = trn.trnswp.trn
		trn.mons = trn.trnswp.mons
		trn.rem = trn.trnswp.rem
		delete trn.trnswp
		delete trn.flagid
	}
	localStorage.setItem(GameName +"setdex", JSON.stringify(setdex));
	switchToModTrainer();
	document.getElementById("edit-error").innerText = "";
}

function rowEditOnClick(ev) {
	var id = ev.target.dataset.id;
	var name = setdex[id].trn;
	document.getElementById("trainer-edition-name").value = name || "";
	selectTrainer(parseInt(id))
	
}

function rowDeleteOnClick(ev) {
	var yes = confirm("Do you really want to proceed?")
	if (!yes) return
	var row = ev.target.parentNode;
	row.parentNode.removeChild(row);
	saveTrainerListOrder();
	localStorage.setItem(GameName + "setdex", JSON.stringify(setdex));
}

function rowChangePos(ev) {
	var tar = ev.target;
	var value = parseInt(tar.value);
	var prev = parseInt(tar.dataset.prev);
	var diff = value - prev;
	if (!diff) {
		return;
	}
	var row = tar.closest('tr');
	var parent = row.parentNode;
	if (diff > 0) {
		var crossed;
		for (var i = prev; i <= diff + prev - 1; i++) {
			crossed = parent.children[i];
			var inputRow = crossed.children[1].children[0];
			inputRow.value--;
			inputRow.setAttribute("value", inputRow.value);
			inputRow.dataset.prev = inputRow.value;
		}
		crossed.after(row);
	} else {
		var crossed;
		for (var i = prev - 2; i + 1 >= prev + diff; i--) {
			crossed = parent.children[i];
			var inputRow = crossed.children[1].children[0];
			inputRow.value++;
			inputRow.setAttribute("value", inputRow.value);
			inputRow.dataset.prev = inputRow.value;
		}
		crossed.before(row);
	}
	tar.dataset.prev = value;
	tar.setAttribute("value", value);
	saveTrainerListOrder();
	localStorage.setItem(GameName + "setdex", JSON.stringify(setdex));
}


function saveTrainerListOrder() {
	var table = document.getElementById("trn-table");
	//reverse trainer dex
	var dexset = [];
	for (var a in setdex) {
		var name = setdex[a].trn;
		dexset[name] = a;
	}
	var tempDexSet = [setdex[0]];
	for (var i = 0, iLen = table.childElementCount; i < iLen; i++) {
		var row = table.children[i];
		var trainerName = row.children[0].innerText;
		var trainerID = dexset[trainerName];
		if (!trainerID) {
			continue; //weird bugs with some text difference (spaces and stuff), will fix if it became more a hassle
		}
		tempDexSet.push(setdex[trainerID]);
		row.children[0].dataset.id = trainerID;
	}
	setdex = tempDexSet;
}

function appendTrainerToList(node, trainer, id) {
	var row = document.createElement("tr");
	var rowClass = "row-" + (id % 2 ? "pair" : "odd");
	row.className = rowClass;
	var rowName = document.createElement("td");
	rowName.innerText = trainer.trn;
	var rowPos = document.createElement("td");
	rowPos.innerHTML = '<input class="t-pos" type="number" min="1" max="" step="1" value="' + id + '" data-prev="' + id + '">';
	rowPos.children[0].addEventListener("change", rowChangePos);
	var rowEdit = document.createElement("td");
	rowEdit.innerText = "edit";
	rowEdit.className = "row-edit";
	rowEdit.dataset.id = id;
	rowEdit.onclick = rowEditOnClick;
	var rowDelete = document.createElement("td");
	rowDelete.innerText = "Delete";
	rowDelete.className = "row-delete";
	rowDelete.dataset.id = id;
	rowDelete.onclick = rowDeleteOnClick;
	row.append(rowName);
	row.append(rowPos);
	row.append(rowEdit);
	row.append(rowDelete);
	node.append(row);
}

function appendAllTrainerToList() {
	var frag = new DocumentFragment();
	if (!setdex) {
		return;
	}
	var setdexLength = setdex.length;
	for (var i = 1; i <= setdexLength - 1; i++) {
		appendTrainerToList(frag, setdex[i], i);
	}
	document.getElementById("trn-table").append(frag);
}

function addMon() {
	var box = document.getElementById("poke-box");
	var poke = window.addSets(window.ExportPokemon($("#p2")))[0];
	var idMon = box.childElementCount;
	addBoxed(box, poke, idMon);
	setdex[window.current_trainer_id].mons.push(poke);
}

function addBoxed(box, poke, id) {
	if (!poke) {
		return;
	}
	var newPoke = document.createElement("img");
	newPoke.id = poke.species + ";" + id;
	newPoke.src = getSrcImgPokemon(poke.species);
	newPoke.className = "poke-icon";
	var trainerName = setdex[window.current_trainer_id].trn || document.getElementById("sets-trainer").value || "No-Named Trainer";
	newPoke.dataset.title = poke.species + " : " + trainerName;
	newPoke.dataset.id = poke.species + ";" + trainerName + ";" + id;
	newPoke.addEventListener("dragstart", dragstart_handler);
	newPoke.addEventListener("click", iconMonClicked);
	box.append(newPoke);
	
}
function selectTrainer(id) {
	document.getElementById("poke-box").innerText = "";
	var parsed = parseSelector(String(id));
	var	trainerID = parsed[0],
		trainer = parsed[1],
		pokemon = parsed[2],
		pokemonName = parsed[3];
	document.getElementById("trainer-edition-name").value = trainer.trn;
	select2Select($('#p2').find("input.set-selector"), id, pokemonName + " : " + trainer.trn);
}

function nextTrainer() {
	dexset = []
	for (var a in setdex) {
		var name = setdex[a].trn;
		if (dexset[name]){
			continue;
		}
		dexset[name] = a;
	}
	saveTrainer();
	var next = parseInt(window.current_trainer_id) + 1;
	if (next < setdex.length) {
		selectTrainer(next);
	}
}

function previousTrainer() {
	dexset = []
	for (var a in setdex) {
		var name = setdex[a].trn;
		if (dexset[name]){
			continue;
		}
		dexset[name] = a;
	}
	saveTrainer();
	var prev = window.current_trainer_id - 1;
	if (prev >= 1) {
		selectTrainer(prev);
	}
}

function testAlltrainer() {
	for (var i = 1; i < setdex.length; i++) {
		selectTrainer(i);
	}
}

function exportFile() {
	var Filetext = JSON.stringify(setdex);
	Filetext = "var TRAINER_DEX" + " = " + Filetext;
	var a = document.getElementById("a");
	var file = new Blob([Filetext], {type: "text/javascript"});
	a.href = URL.createObjectURL(file);
	a.download = "trainersets.js";
	a.removeAttribute("hidden");
}

function tagOptionnal() {
	var div = document.getElementById("trainer-edition-name");
	var value = div.value;
	var regex = new RegExp("(Optional)");
	if (regex.test(value)) {
		value = value.replace("(Optional)", "");
	} else {
		value += "(Optional)";
	}
	setdex[window.current_trainer_id].trn = value;
	dexset[value] = window.current_trainer_id;
	div.value = value;
}

function renameTrainerOnclick() {
	var div = document.getElementById("trainer-edition-name");
	var value = div.value;
	var renameInput = document.getElementById("edition-rename-trainer");
	var validate = document.getElementById("validate-rename");
	renameInput.value = value;
	renameInput.style.display = "inline";
	validate.style.display = "inline";
	var selfBtn = document.getElementById("rename-trainer");
	selfBtn.style.display = "none";
}

function validateTrainerRename() {
	var renameInput = document.getElementById("edition-rename-trainer");
	var value = renameInput.value;
	var existingID = checkPreExistingTrainer(value);
	if (existingID && existingID != window.current_trainer_id) {
		document.getElementById("edit-error").innerText = "Trainer already exist";
		return;
	}
	setdex[window.current_trainer_id].trn = value;
	dexset[value]=window.current_trainer_id;
	localStorage.setItem(GameName + "setdex", JSON.stringify(setdex));

	var div = document.getElementById("trainer-edition-name");
	div.value = value;
	var validate = document.getElementById("validate-rename");
	renameInput.style.display = "none";
	validate.style.display = "none";
	var selfBtn = document.getElementById("rename-trainer");
	selfBtn.style.display = "inline";
	var trTable = document.getElementById("trn-table");
	trTable.children[window.current_trainer_id - 1].children[0].innerText = value;
	var pokeBox = document.getElementById("poke-box")
	var mons = pokeBox.querySelectorAll("img")
	for (var monI in mons){
		var mon = mons[monI]
		var title = mon.dataset.title.split(" : ");
		mon.dataset.title = [title[1] + value].join(" : ");
		var id =  mon.dataset.id.split(";");
		mon.dataset.id= [id[0] + value + id[2]].join(";");
	}
	mons[i].click()
}

function switchToNewTrainer() {
	document.getElementById("new-trainer").removeAttribute("hidden");
	document.getElementById("edit-trainer").setAttribute("hidden", true);
	document.getElementById("next-trainer").setAttribute("hidden", true);
	document.getElementById("previous-trainer").setAttribute("hidden", true);
	window.current_trainer_id = parseInt(document.getElementById("trn-table").childElementCount + 1);
	document.getElementById("poke-box").innerText = "";
}

function validateTrainerName () {
	var nameInput = document.getElementById("trainer-edition-name");
	var value = nameInput.value;
	var existingID = checkPreExistingTrainer(value);
	if (existingID && existingID != window.current_trainer_id) {
		document.getElementById("edit-error").innerText = "Trainer already exist";
		return;
	}
	setdex[window.current_trainer_id] = {trn: value, mons: [{species: "Beldum"}]}
	dexset[value]=window.current_trainer_id;
	localStorage.setItem(GameName + "setdex", JSON.stringify(setdex));
	switchToModTrainer()
}

function switchToModTrainer() {
	document.getElementById("edit-trainer").removeAttribute("hidden");
	document.getElementById("next-trainer").removeAttribute("hidden");
	document.getElementById("previous-trainer").removeAttribute("hidden");
	document.getElementById("new-trainer").setAttribute("hidden", true);
}


function searchTrainer(){
	var match = new RegExp($('#trainer-search').val())
	var fields = $('#trn-table')
	for (var i = 0, iLen = fields.children().length; i < iLen; i++) {
		var namefield = fields.children().eq(i)
		var name = namefield.children().eq(0).text()
		if (match.test(name)){
			namefield.show()
		} else {
			namefield.hide()
		}
	}
}

$(document).ready(function () {
	setupCalc();
	loadDefaultLists();
	$(".move-selector").select2({
		dropdownAutoWidth: true,
		matcher: function (term, text) {
			// 2nd condition is for Hidden Power
			return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().indexOf(" " + term.toUpperCase()) >= 0;
		}
	});
	var trainerid = JSON.parse(localStorage.getItem(GameName + "tid")) || 1;
	if (setdex.length < 2) {
		//keep the trainer unselected
	} else {
		selectTrainer(trainerid);
	}
	$('#trainer-search').keyup(searchTrainer)
	$(".terrain-trigger").bind("change keyup", getTerrainEffects);
	$('#next-trainer').click(nextTrainer);
	$('#previous-trainer').click(previousTrainer);
	$("#pokemon-edition-save").click(addMon);
	$('#trainer-edition-add').click(switchToNewTrainer);
	$('#validate-name').click(validateTrainerName);
	appendAllTrainerToList();
	$('#trainer-edition-save').click(saveTrainer);
	$('#import-sets').click(importSets);
	$("#rename-trainer").click(renameTrainerOnclick);
	$("#validate-rename").click(validateTrainerRename);
	var dropzones = document.getElementsByClassName("dropzone");
	for (var i = 0; i < dropzones.length; i++) {
		var dropzone = dropzones[i];
		dropzone.ondragenter = handleDragEnter;
		dropzone.ondragleave = handleDragLeave;
		dropzone.ondrop = drop;
		dropzone.ondragover = allowDrop;
	}
	$('#tag-optionnal').click(tagOptionnal);
	$(".save-trigger").bind("change keyup", saveTrigger);
	$('#save-change').click(saveTrainerPokemon);
	$("#export-file").click(exportFile);
});

/* Click-to-copy function */
$("#mainResult").click(function () {
	navigator.clipboard.writeText($("#mainResult").text()).then(function () {
		document.getElementById('tooltipText').style.visibility = 'visible';
		setTimeout(function () {
			document.getElementById('tooltipText').style.visibility = 'hidden';
		}, 2000);
	});
});
