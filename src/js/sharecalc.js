/*
	Quick Explanation.
	This is to share with someone your calculation at a given time.
	By clicking Share Calculation at the Import/Export section,
	the user gets a link copied to its clipboard.
	The user then share this link to another user by external means,
	which when opened recreate the calculation.

	I'll call field HTML nodes that contains a data important
	needed to recreate the calculation.
	Some field might be missing. To add another field to be shared
	there are table, or rather maps, that are used to ravel and unravel the data.
	Each element of the table have this structure.
	[0] => Jquery selector to the HTML node
	[1] => The function name to call to extract the data from the HTML node
	[2] => Specific to the function name,
	for example for the func "val", it's the default value, so when not written it can be
	implicitely recovered without writing any data.

	Table wise:
	use SHARE_FIELD_TABLE if it's not specific to a pannel,
	or if you directly target the field by its ID.
	use SHARE_PANNEL_TABLE if it's specific  a pannel,
	and you have a class or any non-id Jquery selector.
	use SHARE_SET_TABLE if it's data that is used by the export/import
	because when shared it first insert the calculation protagonists
	as a custom set.

	adaptFieldsToGen() function modify just before ravelling the data to
	, in idea, to share only what's needed. but to be fair it might be overkill.

*/
var SHARE_FIELD_TABLE = [
	["input:radio[name='defaultLevel']", "find"],
	["input:checkbox[name='terrain']", "find"],
	["input:radio[name='format']", "find"],
	["#beads", "checked"],
	["#tablets", "checked"],
	["#sword", "checked"],
	["#vessel", "checked"],
	["#magicroom", "checked"],
	["#wonderroom", "checked"],
	["#gravity", "checked"],
	["#srL", "checked"], ["#srR", "checked"],
	["#steelsurgeL", "checked"], ["#steelsurgeR", "checked"],
	["#vinelashL", "checked"], ["#vinelashR", "checked"],
	["#wildfireL", "checked"], ["#wildfireR", "checked"],
	["#cannonadeL", "checked"], ["#cannonadeR", "checked"],
	["#volcalithL", "checked"], ["#volcalithR", "checked"],
	["#reflectL", "checked"], ["#reflectR", "checked"],
	["#lightScreenL", "checked"], ["#lightScreenR", "checked"],
	["#protectL", "checked"], ["#protectR", "checked"],
	["#leechSeedL", "checked"], ["#leechSeedR", "checked"],
	["#foresightL", "checked"], ["#foresightR", "checked"],
	["#helpingHandL", "checked"], ["#helpingHandR", "checked"],
	["#tailwindL", "checked"], ["#tailwindR", "checked"],
	["#flowerGiftL", "checked"], ["#flowerGiftR", "checked"],
	["#friendGuardL", "checked"], ["#friendGuardR", "checked"],
	["#auroraVeilL", "checked"], ["#auroraVeilR", "checked"],
	["#batteryL", "checked"], ["#batteryR", "checked"],
	["#powerSpotL", "checked"], ["#powerSpotR", "checked"],
    /*["#AtkL","checked"], ["#AtkR","checked"],
	["#SpecL","checked"], ["#SpecR","checked"],
	["#DefL","checked"], ["#DefR","checked"],
	["#SpeL","checked"], ["#SpeR","checked"],*/
    ["#defCurlL","checked"], ["#defCurlR","checked"],
    ["#infatuationL","checked"], ["#infatuationR","checked"],
	["#switchingL","checked"], ["#switchingR","checked"],
	["#switchingL", "checked"], ["#switchingR", "checked"],
	["#critL1", "checked"], ["#critR1", "checked"],
	["#critL2", "checked"], ["#critR2", "checked"],
	["#critL3", "checked"], ["#critR3", "checked"],
	["#critL4", "checked"], ["#critR4", "checked"],
	["#zL1", "checked"], ["#zR1", "checked"],
	["#zL2", "checked"], ["#zR2", "checked"],
	["#zL3", "checked"], ["#zR3", "checked"],
	["#zL4", "checked"], ["#zR4", "checked"],
	["#innatesL1", "index", "abilities"], ["#innatesR1", "index", "abilities"],
	["#innatesL2", "index", "abilities"], ["#innatesR2", "index", "abilities"],
	["#innatesL3", "index", "abilities"], ["#innatesR3", "index", "abilities"],
];

var SHARE_PANNEL_TABLE = [
	[".gender", "keyid", "genders"],
	[".max", "checked"],
	// bug: gigamax conflicts with current HP because it generates the giga max update after the current hp
	// effectively doubling the HP it should have
	[".current-hp", "val"],
	[".status", "indexid", "CALC_STATUS"],
	[".at .boost", "val", "0"],
	[".df .boost", "val", "0"],
	[".sp .boost", "val", "0"],
	[".saltcure", "checked"],
];

var SHARE_SET_TABLE = [
	[".level", "val", "100"],
	[".teraType", "indexid", "typeChart"],
	[".nature", "keyidTI", "NATURES_BY_ID"],
	[".item", "index", "items"],
	[".ability", "index", "abilities"],
	[".move1 .select2-offscreen.move-selector", "indexid", "moves"],
	[".move2 .select2-offscreen.move-selector", "indexid", "moves"],
	[".move3 .select2-offscreen.move-selector", "indexid", "moves"],
	[".move4 .select2-offscreen.move-selector", "indexid", "moves"],

	//evs   // in function of generation
	//ivs   // --
	//dvs   // --
];
// GS => Generation Specific
var SHARE_GS_SET_TABLE, SHARE_GS_PANNEL_TABLE, SHARE_GS_FIELD_TABLE;

var genders = ["Male", "Female", ""];

function adaptFieldsToGen() {
	SHARE_GS_SET_TABLE = [];
	SHARE_GS_FIELD_TABLE = [];
	SHARE_GS_PANNEL_TABLE = [];
	if (gen == 1) {
		SHARE_GS_SET_TABLE = SHARE_GS_SET_TABLE.concat([
			[".sl .dvs", "val", "15"],
		]);
		SHARE_GS_PANNEL_TABLE = SHARE_GS_PANNEL_TABLE.concat([
			[".sl .boost", "val", "0"],
		]);
	} else {
		SHARE_GS_PANNEL_TABLE = SHARE_GS_PANNEL_TABLE.concat([
			[".sa .boost", "val", "0"],
			[".sd .boost", "val", "0"],
		]);
	}
	if (gen == 2) {
		SHARE_GS_SET_TABLE = SHARE_GS_SET_TABLE.concat([
			[".sa .dvs", "val", "15"],
			[".sd .dvs", "val", "15"],
		]);
		SHARE_GS_FIELD_TABLE = SHARE_GS_FIELD_TABLE.concat([
			["#gscSpikesL", "checked"],
			["#gscSpikesR", "checked"],
			["input:radio[name='gscWeather']", "find"],
		]);
	}
	if (gen < 3) {
		SHARE_GS_SET_TABLE = SHARE_GS_SET_TABLE.concat([
			[".hp .dvs", "val", "15"],
			[".at .dvs", "val", "15"],
			[".df .dvs", "val", "15"],
			[".sp .dvs", "val", "15"],
		]);
	} else {
		SHARE_GS_FIELD_TABLE = SHARE_GS_FIELD_TABLE.concat([
			["input:radio[name='spikesL']:checked", "val", "0"],
			["input:radio[name='spikesR']:checked", "val", "0"],
			["input:radio[name='weather']", "find"],
		]);
		SHARE_GS_SET_TABLE = SHARE_GS_SET_TABLE.concat([
			[".hp .ivs", "val", "31"],
			[".hp .evs", "val", "0"],
			[".at .ivs", "val", "31"],
			[".at .evs", "val", "0"],
			[".df .ivs", "val", "31"],
			[".df .evs", "val", "0"],
			[".sa .ivs", "val", "31"],
			[".sa .evs", "val", "0"],
			[".sd .ivs", "val", "31"],
			[".sd .evs", "val", "0"],
			[".sp .ivs", "val", "31"],
			[".sp .evs", "val", "0"],
		]);
	}
}

function exportCalculation() {
	adaptFieldsToGen();
	var findChecked = function (query) {
		var fullQuery = $(query).toArray();
		for (var i = 0, iLen = fullQuery.length; i < iLen; i++) {
			if (fullQuery[i].checked) {
				return i;
			}
		}
		return "";
	};
	// the second layer of compaction
	// addLoc => additionnal locator, to adapt to pannels
	var tableCompaction = function (table, addLoc) {
		addLoc = addLoc || "";
		var fieldComposition = "";
		for (var i = 0, iLen = table.length; i < iLen; i++) {
			var field = table[i];
			var locator = $(addLoc + field[0]);
			var extractor = field[1];
			var data = "";
			if (extractor === "checked") {
				data = +locator.prop("checked");
				if (data == 0) {
					data = "";
				}
			} else if (extractor === "val") {
				data = locator.val();
				var defaultVal = field[2];
				if (data == defaultVal) {
					data = "";
				}
			} else if (extractor === "find") {
				data = findChecked(locator);
			} else if (extractor === "index") {
				var obj = window[field[2]];
				data = obj.indexOf(locator.val());
			} else if (extractor === "keyidTI") {
				var obj = window[field[2]];
				var value = window.toID(locator.val());
				data = Object.keys(obj).indexOf(value);
			} else if (extractor === "keyid") {
				var obj = window[field[2]];
				data = obj.indexOf(locator.val());
			} else if (extractor === "indexid") {
				var obj = window[field[2]];
				data = Object.keys(obj).indexOf(locator.val());
			} else if (extractor === "text") {
				data = locator.text();
			}
			if (!data) {
				data = "";
			}
			fieldComposition += data + ":";
		}
		return fieldComposition;
	};

	var selectToData = function(panel){
		var select = panel.select.split(";");
		var data = ""
		data += Object.keys(pokedex).indexOf(select[0]);
		if (select.length < 2){
			// just a pokemon alone
			return data + ":"
		}
		data += ";" + +dexset[select[1]].split(":")[0];
		data += ";" + select[2];
		if (panel.trainer.flagid){
			data += ";" + panel.trainer.flagid
		}
		return data + ":"
	}
	var fieldComposition = "";
	fieldComposition += +$('#all-abis-on').prop("checked") ? "1:" : ":";
	fieldComposition += selectToData(P1);
	fieldComposition += selectToData(P2);

	// need to transmit which version of the calc you're in
	fieldComposition += tableCompaction(
		SHARE_SET_TABLE.concat(SHARE_GS_SET_TABLE), "#p1 ");
	fieldComposition += tableCompaction(
		SHARE_SET_TABLE.concat(SHARE_GS_SET_TABLE), "#p2 ");
	fieldComposition += tableCompaction(
		SHARE_PANNEL_TABLE.concat(SHARE_GS_PANNEL_TABLE), "#p1 ");
	fieldComposition += tableCompaction(
		SHARE_PANNEL_TABLE.concat(SHARE_GS_PANNEL_TABLE), "#p2 ");
	fieldComposition += tableCompaction(
		SHARE_FIELD_TABLE.concat(SHARE_GS_FIELD_TABLE));
	// trim the last separator
	fieldComposition = fieldComposition.replace(RegExp(":$"), "");
	/* further compaction alg
		if there is 3 or more default values in a row
		(care to make the tables in a way that all default value sensitive
		row are aligned, so its optimise evenmore)
		if the field encounters ;, it will interprets the integer following
		as the number of default value in a row.
		so the uncompacter will expand it intuitively.
	*/
	var data = fieldComposition.split(":");
	var compactedFieldComposition = "";
	var skip = 0;
	// effectively the first layer of compaction
	// which trims 50% of the data
	var writeSkipped = function (data, skip) {
		if (skip == 1) {
			// means "::"
			data = data.slice(0, -1) + "!";
		} else if (skip == 2) {
			// means ":::"
			data = data.slice(0, -1) + "~";
		} else if (skip == 3) {
			// means ":::"
			data = data.slice(0, -1) + "_";
		} else if (skip > 3) {
			data = data.slice(0, -1);
			data += "," + skip + ":";
		}
		return data;
	};
	for (var i = 0, iLen = data.length; i < iLen; i++) {
		var row = data[i];
		if (row === "" && i != 0) {
			skip++;
			continue;
		}
		compactedFieldComposition = writeSkipped(compactedFieldComposition, skip);
		skip = 0;
		compactedFieldComposition += row + ":";
	}
	if (skip > 0) {
		compactedFieldComposition = writeSkipped(compactedFieldComposition, skip);
	}
	// trim the last separator
	compactedFieldComposition = compactedFieldComposition.replace(RegExp(":$"), "");
	return "&share=" + compactedFieldComposition;
}

function importCalculation(compactedData) {
	/*
		uncompact the first layer of compactions
	*/
	compactedData = compactedData.replaceAll("!", "::");
	compactedData = compactedData.replaceAll("~", ":::");
	compactedData = compactedData.replaceAll("_", "::::");
	compactedData = compactedData.split(",");
	var data = compactedData[0];
	for (var i = 1; i < compactedData.length; i++) {
		var row = compactedData[i];
		var skip = row.match(/^[^:]+/)[0];
		row = row.slice(skip.length);
		row = ":".repeat(+skip) + row;
		data += row;
	}
	data = data.split(":");
	adaptFieldsToGen();
	// function to uncompact the second layer
	var tableUncompaction = function (table, addLoc) {
		for (var i = 0, iLen = table.length; i < iLen; i++) {
			addLoc = addLoc || "";
			var field = table[i];
			var locator = $(addLoc + field[0]);
			var extractor = field[1];
			var field_data = data.splice(0, 1)[0];
			if (extractor === "checked") {
				if (+field_data) {
					locator.prop("checked", true);
				} else {
					locator.prop("checked", false);
				}
			} else if (extractor === "val") {
				var defaultVal = field[2];
				if (field_data) {
					locator.val(field_data);
				} else {
					locator.val(defaultVal);
				}
			} else if (extractor === "find") {
				if (field_data !== "") {
					locator.eq(field_data).prop("checked", true);
				}
			} else if (extractor === "index") {
				if (field_data) {
					var obj = window[field[2]];
					
					locator.val(obj[field_data]);
				}
			} else if (extractor === "keyidTI") {
				if (field_data) {
					var obj = window[field[2]];
					field_data = obj[Object.keys(obj)[field_data]].name;
					locator.val(field_data);
				}
			} else if (extractor === "keyid") {
				if (!field_data) field_data = "0"
				var obj = window[field[2]];
				field_data = obj[Object.keys(obj)[field_data]];
				locator.val(field_data);
			} else if (extractor === "indexid") {
				var obj = window[field[2]];
				field_data = Object.keys(obj)[field_data];
				locator.val(field_data);
				locator.change();
			} else if (extractor === "text") {
				locator.text(field_data);
			}
		}
	};
	var dataToSelect = function(panel, data){
		var select = data.split(";");
		var pokeName = Object.keys(pokedex)[select[0]];
		if (select.length < 2) {
			// just a pokemon alone
			panel.select =pokeName
			return
		}
		var trainerName = setdex[select[1]].trn
		if (panel.constructor.name === "PlayerPanel") {
			trainerName = setdex[setdex.length -1].trn
			select[2] = 0
			setdex[setdex.length -1].mons.push({species: pokeName})
		}
		var newSelect = pokeName + ";" + trainerName + ";" + select[2]
		if (select.length > 4) {
			newSelect += ";" + select[3] + ";" + select[4]
		}
		panel.select =newSelect
	}
	//need to import the all abilities settings first.
	if (data.splice(0,1)){
		$('#all-abis-on').prop("checked", true)
		$('#all-abis-on').change()
	} else {
		$('#all-abis-off').prop("checked", true)
		$('#all-abis-off').change()
	}
	dataToSelect(P1, data.splice(0,1)[0])
	dataToSelect(P2, data.splice(0,1)[0])
	P1.setPanel()
	P2.setPanel()
	//issue to fix btw
	//pannel don't refresh when switching alternate set, also goes for the little image on top.
	
	tableUncompaction(
		SHARE_SET_TABLE.concat(SHARE_GS_SET_TABLE), "#p1 ");
	tableUncompaction(
		SHARE_SET_TABLE.concat(SHARE_GS_SET_TABLE), "#p2 ");
		
	tableUncompaction(
		SHARE_PANNEL_TABLE.concat(SHARE_GS_PANNEL_TABLE), "#p1 ");
	tableUncompaction(
		SHARE_PANNEL_TABLE.concat(SHARE_GS_PANNEL_TABLE), "#p2 ");
	tableUncompaction(
		SHARE_FIELD_TABLE.concat(SHARE_GS_FIELD_TABLE));
	P1.box.saveTrainerPokemon()
	P1.stats.calcCurrentHP() 
	P2.stats.calcCurrentHP() 
}

$(document).ready(function () {
	$('#share-calc').click(function () {
		var baseLink = (window.location + "").replace(RegExp("(?<=html).*"), "");
		var data = exportCalculation();
		navigator.clipboard.writeText(baseLink + "?" + data).then(function () {
			$('#share-calc').text("Copied to clipboard");
			setTimeout(function () {
				$('#share-calc').text("Share Calculation");
			}, 2500);
		});
	});
	var params = new URLSearchParams(window.location.search);
	var data = params.get('share');
	if (data) {
		importCalculation(data);
		params.delete('share');
	}

});

