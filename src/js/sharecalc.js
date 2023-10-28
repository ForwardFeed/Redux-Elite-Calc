var FIELD_TABLE = [
    ["", ""], ["", ""], //PlaceHolder for spikes
    ["", ""], // PlaceHolder for weather
    ["input:checkbox[name='terrain']", "find"],
    ["input:radio[name='format']", "find"],
	["#beads","checked"],
	["#tablets","checked"],
	["#sword","checked"],
	["#vessel","checked"],
	["#magicroom","checked"],
	["#wonderroom","checked"],
	["#gravity","checked"],
	["#srL","checked"], ["#srR","checked"],
	["#AtkL","checked"], ["#AtkR","checked"],
	["#SpecL","checked"], ["#SpecR","checked"],
	["#DefL","checked"], ["#DefR","checked"],
	["#SpeL","checked"], ["#SpeR","checked"],
	["#steelsurgeL","checked"], ["#steelsurgeR","checked"],
	["#vinelashL","checked"], ["#vinelashR","checked"],
	["#wildfireL","checked"], ["#wildfireR","checked"],
	["#cannonadeL","checked"], ["#cannonadeR","checked"],
	["#volcalithL","checked"], ["#volcalithR","checked"],
	["#reflectL","checked"], ["#reflectR","checked"],
	["#lightScreenL","checked"], ["#lightScreenR","checked"],
	["#protectL","checked"], ["#protectR","checked"],
	["#leechSeedL","checked"], ["#leechSeedR","checked"],
	["#foresightL","checked"], ["#foresightR","checked"],
	["#helpingHandL","checked"], ["#helpingHandR","checked"],
	["#tailwindL","checked"], ["#tailwindR","checked"],
	["#flowerGiftL","checked"], ["#flowerGiftR","checked"],
	["#friendGuardL","checked"], ["#friendGuardR","checked"],
	["#auroraVeilL","checked"], ["#auroraVeilR","checked"],
	["#batteryL","checked"], ["#batteryR","checked"],
	["#powerSpotL","checked"], ["#powerSpotR","checked"],
	["#defCurlL","checked"], ["#defCurlR","checked"],
	["#infatuationL","checked"], ["#infatuationR","checked"],
	["#switchingL","checked"], ["#switchingR","checked"],
	["#switchingInL","checked"], ["#switchingInR","checked"],
    ["#p1 .gender","val"], ["#p2 .gender","checked"],
    ["#p1 .level","val"], ["#p2 .level","checked"],
    ["#p1 .teraType","val"], ["#p2 .teraType","checked"],
    ["#p1 .hp .ivs","val"], ["#p2 .hp .ivs","val"],
    ["#p1 .hp .evs","val"], ["#p2 .hp .evs","val"],
    ["#p1 .at .ivs","val"], ["#p2 .at .ivs","val"],
    ["#p1 .at .evs","val"], ["#p2 .at .evs","val"],
    ["#p1 .at .boost","val"], ["#p2 .at .boost","val"],
    ["#p1 .df .ivs","val"], ["#p2 .df .ivs","val"],
    ["#p1 .df .evs","val"], ["#p2 .df .evs","val"],
    ["#p1 .df .boost","val"], ["#p2 .df .boost","val"],
    ["#p1 .sa .ivs","val"], ["#p2 .sa .ivs","val"],
    ["#p1 .sa .evs","val"], ["#p2 .sa .evs","val"],
    ["#p1 .sa .boost","val"], ["#p2 .sa .boost","val"],
    ["#p1 .sd .ivs","val"], ["#p2 .sd .ivs","val"],
    ["#p1 .sd .evs","val"], ["#p2 .sd .evs","val"],
    ["#p1 .sd .boost","val"], ["#p2 .sd .boost","val"],
    ["#p1 .sp .ivs","val"], ["#p2 .sp .ivs","val"],
    ["#p1 .sp .evs","val"], ["#p2 .sp .evs","val"],
    ["#p1 .sp .boost","val"], ["#p2 .sp .boost","val"],
    ["#p1 .nature","keyid", "NATURES_BY_ID"], ["#p2 .nature","keyid", "NATURES_BY_ID"],
    ["#p1 .ability","genkeyid", "ABILITIES_BY_ID"], ["#p2 .ability","genkeyid", "ABILITIES_BY_ID"],
    ["#p1 .item","genkeyid", "ITEMS_BY_ID"], ["#p2 .item","genkeyid", "ITEMS_BY_ID"],
    ["#p1 .status","val"], ["#p2 .status","val"],
    ["#p1 .cureR","checked"], ["#p2 .cureR","checked"],
    ["#p1 .current-hp","val"], ["#p2 .current-hp","val"],
    ["#p1 .move1 .select2-offscreen.move-selector","val"], ["#p2 .move1 .select2-offscreen.move-selector","val"],
    ["#p1 .move2 .select2-offscreen.move-selector","val"], ["#p2 .move2 .select2-offscreen.move-selector","val"],
    ["#p1 .move3 .select2-offscreen.move-selector","val"], ["#p2 .move3 .select2-offscreen.move-selector","val"],
    ["#p1 .move4 .select2-offscreen.move-selector","val"], ["#p2 .move4 .select2-offscreen.move-selector","val"],
    ["#p1 .move1 .move-bp","val"], ["#p2 .move1 .move-bp","val"],
    ["#p1 .move2 .move-bp","val"], ["#p2 .move2 .move-bp","val"],
    ["#p1 .move3 .move-bp","val"], ["#p2 .move3 .move-bp","val"],
    ["#p1 .move4 .move-bp","val"], ["#p2 .move4 .move-bp","val"],
    ["#critL1", "checked"], ["#critR1", "checked"],
    ["#critL2", "checked"], ["#critR2", "checked"],
    ["#critL3", "checked"], ["#critR3", "checked"],
    ["#critL4", "checked"], ["#critR4", "checked"],
    ["#zL1", "checked"], ["#zR1", "checked"],
    ["#zL2", "checked"], ["#zR2", "checked"],
    ["#zL3", "checked"], ["#zR3", "checked"],
    ["#zL4", "checked"], ["#zR4", "checked"],
]

function exportCalculation(){
    // need to export:
    // Pokemon A, Pokemon B
    var findChecked = function(query){
        var fullQuery = $(query).toArray()
        for (var i = 0, iLen = fullQuery.length; i < iLen; i++){
            if (fullQuery[i].checked){
                return i
            }
        }
        return "_"
    }
    //Object.keys(pokedex).indexOf("Aron") => "keyid"
    //$("input:radio[name='gen']")
    //gender
    //level
    //tera type gen (9)
    //IV;EV;BOOST (except for HP)
    //nature Object.keys(NATURES_BY_ID).indexOf("timid") 
    //Ability  => genkeyid
    //item
    //status
    if (gen === 2) {
        FIELD_TABLE[0] = ["gscSpikesL", "checked"]
        FIELD_TABLE[1] = ["gscSpikesR", "checked"]
        FIELD_TABLE[2] = ["input:radio[name='gscWeather']", "find"]
	} else {
        FIELD_TABLE[0] = ["input:radio[name='spikesL']:checked", "val"]
        FIELD_TABLE[1] = ["input:radio[name='spikesR']:checked", "val"]
        FIELD_TABLE[2] = ["input:radio[name='weather']", "find"]
	}
    fieldComposition = gen
    for (var i = 0, iLen = FIELD_TABLE.length; i < iLen; i++){
        var field = FIELD_TABLE[i];
        var locator = field[0];
        var extractor = field[1];
        var data = ""
        if (extractor === "checked") {
            data =  +$(locator).prop("checked");
        } else if (extractor === "val"){
            data = $(locator).val();
        } else if (extractor === "find"){
            data = findChecked(locator) 
        } else if (extractor === "keyid"){
            var obj = field[2]
            data = Object.keys(obj).indexOf($(locator).val())
        } else if (extractor === "keygenid"){
            var obj = field[2]
            data = Object.keys(obj[gen]).indexOf($(locator).val())
        }
        fieldComposition += data + ",";
    }
    return fieldComposition
    
}

function importCalculation(data){
    //$("input:radio[name='gen']") 
    //Object.keys(pokedex)[256]
    data = data.split(",")
    if (gen === 2) { //NEED TO IMPORT THE RIGHT GEN FIRST
        FIELD_TABLE[0] = ["gscSpikesL", "checked"]
        FIELD_TABLE[1] = ["gscSpikesR", "checked"]
        FIELD_TABLE[2] = ["input:radio[name='gscWeather']", "find"]
	} else {
        FIELD_TABLE[0] = ["input:radio[name='spikesL']:checked", "val"]
        FIELD_TABLE[1] = ["input:radio[name='spikesR']:checked", "val"]
        FIELD_TABLE[2] = ["input:radio[name='weather']", "find"]
	}
    for (var i = 0, iLen = FIELD_TABLE.length; i < iLen; i++){
        var field = FIELD_TABLE[i];
        var locator = field[0];
        var extractor = field[1];
        var field_data = data[i]
        if (extractor === "checked") {
            if (field_data){
                $(locator).prop("checked", true);
            } else {
                $(locator).prop("checked", false);
            }
            
        } else if (extractor === "val"){
            if (field_data){
                $(locator).val(field_data);
            } else {
                $(locator).val("");
            }
        } else if (extractor === "find"){
            if (field_data !== "_"){
                $(locator).eq(field_data).prop("checked", true)
            }
        }
    }
}