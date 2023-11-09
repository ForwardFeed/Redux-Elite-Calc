
function settingsMenuToggle() {
    document.getElementById("settings-menu").toggleAttribute("hidden");
}

function resultColorToggle() {
    var resultColor = +localStorage.getItem("result-color")
    if (resultColor) {
        var subgroups = document.getElementsByClassName("move-result-subgroup");
        for (sub of subgroups){
            for(div of sub.children){
                if (div.className.match(/move-dmg-[0-9]/)) div.className = ""
            }
        }
    }
}

function colorCodingSets(ev){
    var checkBorder = +$('#cc-spe-border').prop("checked")
    var checkDamage = +$('#cc-damage-color').prop("checked")
    if ((ev.target.id === 'cc-spe-border' && checkBorder) || 
    (ev.target.id === 'cc-damage-color' && checkDamage)) {
        calcGateway.calcTrigger()
    }
    if (ev.target.id === 'cc-damage-color' && !checkDamage) {
        for (const img of P1.box.idToNode){
            img.className = img.className.replace(/mon-dmg.*/, "")
        }
    }
    if (ev.target.id === 'cc-spe-border' && !checkBorder) {
        for (const img of P1.box.idToNode){
            img.className = img.className.replace(/mon-speed-./, "")
        }
    }
    if (ev.target.id === 'cc-spe-width'){
        document.documentElement.style.setProperty("--spe-bor-width", $('#cc-spe-width').val()+"px"); 
    }
    localStorage.setItem("cd-sets", JSON.stringify([
        +$('#cd-intimidate').prop("checked"),
        +$('#cd-guts').prop("checked"),
        checkBorder,
        checkDamage,
        $('#cc-spe-width').val()
    ]))
}

function deserializeColorCodingSets(){
    var serie = JSON.parse(localStorage.getItem("cd-sets")) || [0, 0, 1, 1, 3];
    $('#cd-intimidate').prop("checked", serie[0])
    $('#cd-guts').prop("checked", serie[1])
    $('#cc-spe-border').prop("checked", serie[2])
    $('#cc-damage-color').prop("checked", serie[3])
    $('#cc-spe-width').val(serie[4])
}

/*
    this util function, is just a glorified wrapper for settings that are just on/off radio buttons
    althought it might not be as readable, its aim is to force me to be standard
    @options : [
        selectors: [jquery node,],
        event: @string of any jquery event",
        default: @number of the jquery node to be default, 
        name: @string of the localstorage string,
        func: @callback that at least change the local storage string
    ]
*/
function offOnSettings(options){
    for (const opt of options){
        try{
            // the order is based on the principle that ON is at the right
            for (const slc of opt.selectors){
                slc[opt.event](opt.func)
            }
            if (localStorage.getItem(opt.name) != null || localStorage.getItem(opt.name) != true){
                opt.selectors[+localStorage.getItem(opt.name)].prop("checked", true).change()
            } else {
                localStorage.setItem(opt.name, opt.default)
                opt.selectors[opt.default].prop("checked", true).change()
            }
            
        } catch(e){
            console.warn(e)
        }
    }
     
}

$(document).ready(function () {
    try{
        // button for opening / closing the settings
        $('#open-settings-box').click(settingsMenuToggle);
        $('#close-settings-box').click(settingsMenuToggle);

        $('#light-theme').change(themeSelection);
        $('#dark-theme').change(themeSelection);
        $('#forest-theme').change(themeSelection);
        $('#blahaj-theme').change(themeSelection);
        $('#sepia-theme').change(themeSelection);

        // radio inpuy
        offOnSettings([
            {
                selectors: [$('#double-two'),$('#double-one')],
                event: "change",
                default: 0,
                name: "doubleLegacy",
                func: function(){
                    localStorage.setItem("doubleLegacy", +$('#double-one').prop("checked"));
                    document.querySelector("input[name='format']:checked").click()
                },
            },
            {
                selectors: [$('#hide-arrows'),$('#show-arrows')],
                event: "change",
                default: 0,
                name: "sidearrow",
                func: function(){
                    localStorage.setItem("sidearrow", +$('#show-arrows').prop("checked"));
                    sideArrowToggle();
                },
            },
            {
                selectors: [$('#field-reset-off'),$('#field-reset-on')],
                event: "change",
                default: 0,
                name: "field-reset",
                func: function(){
                    localStorage.setItem("field-reset", +$('#field-reset-on').prop("checked"));
                },
            },
            {
                selectors: [$('#result-color-off'),$('#result-color-on')],
                event: "change",
                default: 0,
                name: "result-color",
                func: function(){
                    localStorage.setItem("result-color", +$('#result-color-on').prop("checked"));
                    resultColorToggle()
                },
            },
            {
                selectors: [$('#p-notes-off'),$('#p-notes-on')],
                event: "change",
                default: 0,
                name: "p-notes",
                func: function(){
                    localStorage.setItem("p-notes", +$('#p-notes-on').prop("checked"))
                    $("#div-p-notes").prop("hidden", $('#p-notes-off').prop("checked"));
                },
            },
            {
                selectors: [$('#p-s-specifier-off'),$('#p-s-specifier-on')],
                event: "change",
                default: 0,
                name: "p-s-spe",
                func: function(){
                    localStorage.setItem("p-s-spe", +$('#p-s-specifier-on').prop("checked"))
                    const css_val = $('#p-s-specifier-on').prop("checked") ? "inline" : "none"
                    $(".pokebar-selection-specifier").css("display", css_val);
                },
            },
            {
                selectors: [$('#rcrits-off'),$('#rcrits-on')],
                event: "change",
                default: 1,
                name: "rcrits",
                func: function(){
                    localStorage.setItem("rcrits", +$('#rcrits-on').prop("checked"))
                },
            },
            {
                selectors: [$('#all-abis-off'),$('#all-abis-on')],
                event: "change",
                default: 1,
                name: "all-abis",
                func: function(){
                    if (+$('#all-abis-on').prop("checked")) {
                        var abilityOptions = getSelectOptions(abilities, true);
                        $("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
                    }
                    P1.setPanel() //refreshing because it cause a small bug
                    P2.setPanel()
                    localStorage.setItem("all-abis", +$('#all-abis-on').prop("checked"))
                },
            },
            {
                selectors: [$('#no-ev-off'),$('#no-ev-on')],
                event: "change",
                default: 0,
                name: "no-ev",
                func: function(){
                    localStorage.setItem("no-ev", +$('#no-ev-on').prop("checked"))
                },
            },
        ])
        //input value
        $('#sv-nb-pkm').val(localStorage.getItem("sv-nb-pkm") || 150);
        $('#sv-nb-pkm').bind('change keyup', function(){
            var value = $(this).val().replace(/\D/g, "");
            if (value > 420) {
                value = 420
            }
            localStorage.setItem("sv-nb-pkm", value)
            $(this).val(value);
        });
        // checkboxes
        $('#p-notes-reset').change(clearAllNotes);
        //color coding
        $('#cd-intimidate').change(colorCodingSets);
        $('#cd-guts').change(colorCodingSets);
        $('#cc-spe-border').change(colorCodingSets);
        $('#cc-damage-color').change(colorCodingSets);
        $('#cc-spe-width').change(colorCodingSets);
        deserializeColorCodingSets();
   
   
    } catch(e) {
        console.warn(e)
    }

});

