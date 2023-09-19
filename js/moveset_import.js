/*
	for now only save the current trainer #p1
*/
function saveTrainerPokemon() {
	var pokeInfo = $(this).closest(".poke-info");
	var selectID = pokeInfo.find("input.selector").val()
	var pokeID = selectID.split(";");
	var tID = 0;
	var monID = pokeID[2] || setdex[0].mons.length;
	var trainerName = pokeID[1] || null
	var poke = addSets(ExportPokemon(pokeInfo));
	var innatesObj = pokeInfo.find(".innates");
	var innates = [];
	for(var i = 0; i < 3; i++){
		innates.push(innatesObj.eq(i).val());
	}
	poke[0].innates = innates;
	if (!trainerName) dispatchPlayerMon(poke);
	setdex[tID].mons[monID] = poke[0];
	setHighestLevelMon();
	localStorage.setItem(GameName + "playerdex", JSON.stringify(window.setdex[0].mons));

	$("#save-change").prop("hidden", true);
	if (!trainerName) return;
	var boxedImg = idToNode[monID];
	boxedImg.src = getSrcImgPokemon(pokeID[0]);
	boxedImg.dataset.id = pokeID[0] + ";" + pokeID[1] + ";" + monID;
	pokeInfo.find("input.selector").val(boxedImg.dataset.id);

	
}
var highestMonLevel = 5; //always innit to 5, might change it later if a trick master want to do weird shenanigans
function setHighestLevelMon(){
	highestMonLevel = 5;
	for (var i in setdex[0].mons){
		var mon = setdex[0].mons[i]
		if (mon.level > highestMonLevel){
			$('#levelR1').val(mon.level);
			highestMonLevel= mon.level;
		} 
	}
}





function moveSetBuildLegend(set){
	var monLegend = document.createElement("legend");
	var evoText = set.evl ? " (" + set.evl + ")": " ";
	monLegend.innerText = set.mon + evoText;
	return monLegend;
}

function moveSetBuildSector(set){
	var fragA = new DocumentFragment();
	var fragB = new DocumentFragment();
	for (var i = 0, iLen = set.mv.length; i< iLen; i++) {
		var move = set.mv[i];
		var row = document.createElement("div");
		row.className = "moveset-row";
		row.innerText = "Lv." + move[0] + " " + move[1];
		//slit into two rows, the lower level left
		Math.round(i / iLen) ? fragB.append(row) : fragA.append(row);
	}
	var blockA = document.createElement("div");
	blockA.className = "moveset-block";
	blockA.append(fragA)
	var blockB = document.createElement("div");
	blockB.className = "moveset-block";
	blockB.append(fragB)
	var movesetBox = document.createElement("div");
	movesetBox.className = "moveset-sector"
	movesetBox.append(blockA)
	movesetBox.append(blockB)
	
	return movesetBox;
}	

function moveSetShow(set, evoset, preevo){
	var box = document.getElementById("moveset-box-body");
	if (set.ab){ //it may be missing
		box.children[0].innerHTML = `<b>Abilities:</b> <span>${set.ab[0][0]} </span> | <span> ${set.ab[1][0]} </span> <b>Hidden:</b> <span> ${set.ab[2][0]}</span>`;
	}
	box.children[1].innerHTML = "";
	box.children[1].append(moveSetBuildLegend(set));
	box.children[1].append(moveSetBuildSector(set));
	if (evoset) {
		box.children[1].append(moveSetBuildLegend(evoset));
		box.children[1].append(moveSetBuildSector(evoset));
	}
	if (preevo) {
		box.children[1].append(moveSetBuildLegend(preevo));
		box.children[1].append(moveSetBuildSector(preevo));
	}
}

function moveSetToggling(){
	var frame = document.getElementById("moveset-box-frame");
	frame.toggleAttribute("hidden")
	var state = frame.getAttribute("hidden") === "" ? false : true; //weird dev web moment
	if (state) {
		//show
		var monSel = $('#p1').find("input.selector").val();
		var monName = monSel.split(";")[0];
		if (! MOVESETS) return //not ready yet
		for (var i = 0, iLen = MOVESETS.length; i < iLen; i++){
			var set = MOVESETS[i];
			if (set.mon !== monName) continue;
			var evoset = set.evl ? MOVESETS[i+1] : null;
			var preevo =  MOVESETS[i-1].evl ? MOVESETS[i-1]: null;
			// fetch the next next evo and set preevo to it instead
			if (evoset && !preevo) preevo = evoset.evl ? MOVESETS[i+2] : null
			// fetch the previous pre evo and set nextEvo to it instead
			if (!evoset && preevo) evoset = MOVESETS[i-2].evl ? MOVESETS[i-2] : null
			moveSetShow(set, evoset, preevo);
		}
	} else {
		//hide
	}
}


$(document).ready(function () {
	$('#save-change').click(saveTrainerPokemon);
	$("#import").click(importMonsPlayer);
	var savedMons = JSON.parse(localStorage.getItem(GameName + "playerdex"));
	if (savedMons) {
		dispatchPlayerMon(savedMons);
		setHighestLevelMon()
	}
	$('#p2').find("input.selector").change();
	$('#p1').find("input.selector").change();
	clearField();
	$('#close-moveset-box').click(moveSetToggling);
	$('#moveset').click(moveSetToggling);
	var script = document.createElement("script");
	script.src = "./data/movesets.js";
	document.head.appendChild(script)
});
