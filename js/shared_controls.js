function createPokemon(pokeInfo) {
	if (typeof pokeInfo === "string") {
		var pokemonName = pokeInfo
		var set = structuredClone(pokedex[pokeInfo]);
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
			pokemonMoves.push(new calc.Move(gen, moves[moveName] ? moveName : "(No Move)", 
				{ ability: pokemon.abilities[0], innates: pokemon.innates , item: item }));
		}
		var abiOn = false;
		var status = "Healthy"
		if ($('#cd-intimidate').prop("checked") && pokemon.ability === "Intimidate") abiOn = true;
		if ($('#cd-guts').prop("checked") && pokemon.ability === "Guts") status = "Burned";
		return new calc.Pokemon(gen, pokemonName, {
			level: set.level,
			ability: set.ability,
			innates: set.innates,
			abilityOn: abiOn,
			innatesOn: [false,false,false],
			status: CALC_STATUS[status],
			item: set.item && typeof set.item !== "undefined" && (set.item === "Eviolite" || set.item.indexOf("ite") < 0) ? set.item : "",
			nature: set.nature,
			ivs: ivs,
			evs: evs,
			moves: pokemonMoves,
		});
	}
}

/* dragging for the item box, note box*/
// target elements with the "box-frame-header" class
interact('.box-frame-header').draggable({
	inertia: true,
	modifiers: [
		interact.modifiers.restrictRect({
			restriction: document,
			endOnly: true
		})
	],
	autoScroll: true,

	listeners: {
		
		start () {
			document.body.classList.add("text-unselectable")
		},
		// call this function on every dragmove event
		move: dragMoveListener,
		end () {
			document.body.classList.remove("text-unselectable")
		}
	}
})


function dragMoveListener(event) {
	var target = event.target;
	var parent = target.parentNode;
	// special case for the screen box frame
	if (target.classList.contains("screen-box-frame")) {
		parent = target;
	}
	if (isNaN(event.dx)) return;
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
	parent.style.left = x + "px";
	parent.style.top = y + "px";

	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);

}

window.dragMoveListener = dragMoveListener

function loadPokemonList() {
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

function loadTrainerList() {
	$(".player-selector").select2({
		//when a result is push to deal with the rendering it goes throught it function here
		formatResult: function (object) {
			return object.text;
		},
		//gets called when the user type something in
		query: function (query) {
			var pageSize = 30;
			var results = [];
			var options = getPlayerOptions();
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
			callback(getPlayerOptions()[0]);
		}
	});
}

function loadDefaultLists() {
	loadTrainerList();
	loadPokemonList();
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



/*imitate a manual selection*/
function select2Select(select, id, title) {
	select.val(id);
	select.change();
	select.closest(".panel").find('.selector .select2-chosen').text(title);
}

// keybinds
$(document).keydown(function (event) {
	if (event.key === "Escape") {
		settingsMenuToggle()
	} else if (event.target.classList.contains("select2-input") || event.target.tagName === "TEXTAREA") {
		return
	}
	else if (event.shiftKey) {
		if (event.key === "Z") {
			oppositeAllCrits()
		}
	}
});
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
	if (ev.target.classList.contains("dropzone")) {
		pokeDragged.parentNode.removeChild(pokeDragged);
		if (ev.target.tagName == "LEGEND") {
			ev.target.parentNode.children[1].appendChild(pokeDragged);
		} else if (ev.target.id == "poke-trash") {
			pokeDragged.parentNode.removeChild(pokeDragged);
		} else {
			ev.target.appendChild(pokeDragged);
		}
	} else if (ev.target.tagName === "IMG") {
		// swap
		var prev1 = pokeDragged.previousElementSibling;
		if (!prev1) {
			ev.target.after(pokeDragged);
		} else {
			ev.target.before(pokeDragged);
			prev1.after(ev.target);
		}
	}
	ev.target.classList.remove('over');
	pokeDragged = null;
}

function handleDragEnter(ev) {
	ev.target.classList.add('over');
	ev.target.removeAttribute("data-placeholder");
}

function handleDragLeave(ev) {
	ev.target.classList.remove('over');
}

function truckMessage() {
	var truckMsgId = Number(localStorage.getItem("truckMsg"));
	if (truckMsgId == undefined) {
		truckMsgId = -1;
	}
	truckMsgId += 1;
	if (truckMsgId >= TRUCK_MESSAGES.length) {
		truckMsgId = 2;
	}
	localStorage.setItem("truckMsg", truckMsgId);
	//yaayy dynamic strings
	return typeof TRUCK_MESSAGES[truckMsgId] === 'string' ? TRUCK_MESSAGES[truckMsgId] : TRUCK_MESSAGES[truckMsgId]();

}

function autoAdaptFieldPerTrainer() {
	var textTrainer = JSON.stringify(setdex[P2.trainerID].mons);
	//$('#protectR').parent().prop("hidden", !new RegExp(/Protect/).test(textTrainer));
	//map field regex 
	var mapFR = [["srR",/Stealth Rock/],["helpingHandR", /Helping Hand/ ], ["leechSeedR",/Leech Seed/], 
	["tailwindR",/Tailwind/], ["auroraVeilR",/Aurora Veil/], ["foresightR",/(Odor Sleuth|Foresight)/]
	, ["flowerGiftR", /Flower Gift/], ["friendGuardR", /Friend Guard/], ["batteryR", /Battery/], ["powerSpotR", /Power Spot/]]
	for (var i = 0; i < mapFR.length; i++) {
		$('#'+mapFR[i][0]).parent().prop("hidden", !new RegExp(mapFR[i][1]).test(textTrainer));
	}
	// rejected , ["spikesR3",/\"Spikes/]
}


function selectFirstPlayerAvailable(select) {
	$('#pl-any-selection').checked = true; // first check any pokemon
	var toSel = getPlayerOptions()[4];
	select2Select(select, toSel.id, toSel.text);
}

function clearTrainerSets() {
	var yes = confirm("This cannot be undone, are you sure?")
	if (!yes) {
		return;
	}
	var mons = document.getElementById("trainer-mons").querySelectorAll("img");
	for (var mon of mons) {
		mon.parentNode.removeChild(mon);
	}
	setdex[0].mons = [];
	localStorage.setItem(GameName + "playerdex", JSON.stringify(setdex[0].mons));
	var select = $(this).closest(".panel").find("input.selector")
	selectFirstPlayerAvailable(select)
}

window.isInDoubles = false;
function switchIconSingle() {
	document.getElementById("monDouble").removeAttribute("hidden");
	window.isInDoubles = true;
	if (+localStorage.getItem("doubleLegacy")) {
		return;
	}
	document.getElementById("trainer-pok-list-opposing2").removeAttribute("hidden");
	var divs = document.getElementsByClassName("for-doubles");
	for (var index = 0; index < divs.length; index++) {
		divs[index].removeAttribute("hidden");

	}

}

function switchIconDouble() {
	document.getElementById("monDouble").setAttribute("hidden", true);
	window.isInDoubles = false;
	if (+localStorage.getItem("doubleLegacy")) {
		return;
	}
	var topOppositeBox = document.getElementById("trainer-pok-list-opposing");
	var bottomOppositeBox = document.getElementById("trainer-pok-list-opposing2");
	bottomOppositeBox.setAttribute("hidden", true);
	var divs = document.getElementsByClassName("for-doubles");
	for (var index = 0; index < divs.length; index++) {
		divs[index].setAttribute("hidden", true);

	}
	// set all pokemons that were left in the bottom, replace them onto the top
	for (var index = 0; index < bottomOppositeBox.childElementCount; index++) {
		topOppositeBox.append(bottomOppositeBox.children[index]);

	}
}

function openCloseItemBox() {
	document.getElementById("item-box-frame").toggleAttribute("hidden");
}

function openCloseNoteBox() {
	document.getElementById("note-box-frame").toggleAttribute("hidden");
}

function selectItem(ev) {
	var newItem = ev.target.getAttribute("data-id");
	$("#itemL1").val(newItem);
	$("#itemL1").change();
}

function onFirstTime() {
	document.getElementById("team-poke-list").setAttribute("data-placeholder", "You can drag & drop your pokemons here");
	document.getElementById("box-poke-list2").setAttribute("data-placeholder", "You can drag & drop your pokemons here");
	document.getElementById("trash-box").setAttribute("data-placeholder", "drop here and click remove to remove");
	$('#rcrits-on').prop("checked", true).click()
}

var screenDivCount = 0;
function closeScreenCalc(id) {
	var screenDiv = document.getElementById("calc-screen-id" + id);
	screenDiv.parentNode.removeChild(screenDiv);
	screenDivCount--
}
function onClickScreenCalc() {
	var screenDiv = document.createElement("div");
	// box frame header here so it's less code in the end;
	var mon1Name = document.getElementById("resultHeaderL").innerText.match(/^[^\']+/);
	var mon2Name = document.getElementById("resultHeaderR").innerText.match(/^[^\']+/);
	screenDiv.className = "box-frame screen-box-frame box-frame-header";
	screenDiv.id = "calc-screen-id" + screenDivCount;
	screenDiv.dataset.x = "500";
	screenDiv.dataset.y = "250";
	screenDiv.innerHTML = ` <div class="screen-box-frame-header"><legend>Calculation ${mon1Name} VS ${mon2Name}</legend>
	<div class="close-frame" id="close-calc-box-${screenDivCount}" onclick="closeScreenCalc(${screenDivCount})"><div class="mdiv"><div class="md"></div></div></div></div>`;
	var moveResults = document.getElementsByClassName("move-result-group");
	for (let i = 0; i < moveResults.length; i++) {
		if (moveResults[i].parentNode.classList.contains("box-frame")) {
			continue
		}
		screenDiv.appendChild(moveResults[i].cloneNode(true));
	}
	document.body.append(screenDiv);
	for (let label of document.querySelectorAll('.box-frame label')) {
		label.removeAttribute("for");
	}
	for (let span of document.querySelectorAll('.box-frame span')) {
		span.removeAttribute("id");
	}
	for (let input of document.querySelectorAll('.box-frame input')) {
		input.removeAttribute("id");
	}
	for (let group of document.querySelectorAll('.box-frame .move-result-group')) {
		group.classList.remove("move-result-group");
		group.classList.add("screen-result-group");
	}
	screenDivCount++
}

function clearPNotes() {
	$("#clearNotes").prop("hidden", true);
	$('#active-p-note').val("");
}

function showClearPNotes() {
	$("#clearNotes").prop("hidden", false);
}
var PNOTES = new Map(JSON.parse(localStorage.getItem(GameName + "pnotes")))
function savePNotes(fullID) {
	var prevNotes = PNOTES.get(fullID);
	var notes = $('#active-p-note').val();
	if (prevNotes) {
		if (!notes) {
			PNOTES.delete(fullID)
			return
		}
		else if (notes === prevNotes) {
			// i don't trigger a save over this
			return
		} else {
			PNOTES.set(fullID, notes);
		}
	} else if (notes) {
		PNOTES.set(fullID, notes);
	}
	localStorage.setItem(GameName + "pnotes", JSON.stringify(Array.from(PNOTES.entries())))
}

function restorePNotes(fullID) {
	var notes = PNOTES.get(fullID)
	if (!notes) {
		clearPNotes()
	} else {
		$('#active-p-note').val(notes)
		showClearPNotes();
	}
}

function clearAllNotes() {
	var yes = confirm("This will clear all the data of all the notes you've written so far, this cannot be undone, do you wish to proceed anyway?")
	if (yes) {
		localStorage.setItem(GameName + "pnotes", "[]")
	}
	$('#p-notes-reset').prop("checked", false);
}

window.AUTO_REFRESH = false;
var P1, P2; //Pannels
var calcGateway;
$(document).ready(function () {
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

	$(".move-selector").select2({
		dropdownAutoWidth: true,
		matcher: function (term, text) {
			// 2nd condition is for Hidden Power
			return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().indexOf(" " + term.toUpperCase()) >= 0;
		}
	});
	calcGateway = new CalcGateway()
	P1 = new Pannel($('#p1'))
    P2 = new Pannel($('#p2'))
	$(".player-selector").val(getPlayerOptions()[0].id);
	$(".player-selector").change();
	//$(".terrain-trigger").bind("change keyup", getTerrainEffects);
	/*$("#previous-trainer").click(previousTrainer);
	$("#next-trainer").click(nextTrainer);
	$("#reset-trainer").click(resetTrainer);*/
	
	//$('#trash-pok').click(trashPokemon);
	$('#clearSets').click(clearTrainerSets);
	$('#singles-format').click(switchIconDouble);
	$('#doubles-format').click(switchIconSingle);
	$('#close-item-box, #ball-item').click(openCloseItemBox);
	$('#close-note-box, #open-note').click(openCloseNoteBox);
	$('#screen-calc').click(onClickScreenCalc)
	$('#active-p-note').keydown(showClearPNotes);
	$('#clearNotes').click(clearPNotes);
	for (let dropzone of document.getElementsByClassName("dropzone")) {
		dropzone.ondragenter = handleDragEnter;
		dropzone.ondragleave = handleDragLeave;
		dropzone.ondrop = drop;
		dropzone.ondragover = allowDrop;
	}
	//select last trainer
	var last = parseInt(localStorage.getItem(GameName + "trainer"));
	if (isNaN(last)) {
		if (setdex.length < 2){
			//
		} else {
			P2.box.selectTrainer(1);
		}
		
	} else {
		P2.box.selectTrainer(last);
	}
	//to indicate some features to new arrivants
	var isNotNew = JSON.parse(localStorage.getItem("isNotNew"))
	if (!isNotNew) {//first time loading the page
		onFirstTime()
		localStorage.setItem("isNotNew", true)
	}
	//some CSS variable;
	document.documentElement.style.setProperty("--spe-bor-width", "3px");
});


