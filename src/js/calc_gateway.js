/*this file is intented to be the host of the class that make the link between the calc, and the ui
 */

class CalcGateway{
    constructor(){
        this.speFinal = [null,null,null]
        this.damageResults = new Array(4)
        this.timeoutCalc = false;
        this.isGateClosed = false;
        this.display = new CalcResults($('.move-result-group').eq(0), $('.main-result-group').eq(0))
        this.display2 = new CalcResults($('.move-result-group').eq(1), $('.main-result-group').eq(1))
        this.setup()
       
    }
    setup(){
        $(".ic").click((ev)=>{this.calcTrigger(ev)});
	    $(".calc-trigger").bind("change keyup drop", (ev)=>{this.calcTrigger(ev)});
    }
    calcTrigger(){
        // when in 2 v 1 mode, the calculation may trigger an ever ending loop because it changes panel
        // which then cause calc trigger to be called again
        // that's why the calc gateway close itself while the last calculation hasn't done
        if (this.isGateClosed) return
        try {
            this.launchCalculation()
        } catch(e){
            console.error('something went wrong in the calculation', e)
        }
        
    }
    prepareDouble(topActive, topInactive, bot){
        /*  Since i take rigor not to change more than once the panel
        i have to know if the top row is active or not, since top row is always p2 
        and bot row is always p3
        the arguments are select values not boolean as it might suggest!
        */
        // save the weather
        var savedWeather = $("input:radio[name='weather']:checked").val();
        savedWeather = savedWeather ? savedWeather.charAt(0).toLowerCase() + savedWeather.slice(1): "clear";
        const p1 = P1.createPokemon()

        var p2, p3
        if (topActive) { // simple
            p2 = P2.createPokemon()
            P2.select = bot
            // switch back to the previously selected weather for the calculation
            // not to be troubled by weather summoning ability like drought
            $('#'+ savedWeather).prop("checked", true);
            p3 = P2.createPokemon()
        } else { // just invert the logic
            p3 = P2.createPokemon()
            P2.select = topInactive
            // switch back to the previously selected weather for the calculation
            // not to be troubled by weather summoning ability like drought
            $('#'+ savedWeather).prop("checked", true);
            p2 = P2.createPokemon()
        }
        $('#'+ savedWeather).prop("checked", true);
        const result = this.performCalculations(p1, p2, p3);
        P1.stats.spFinal = p1.stats.spe
        P2.stats.spFinal = p2.stats.spe
        this.display.display(result[0])
        this.display2.display(result[1])
        this.result=result
    }
    prepareSingle(){
        const p1 = P1.createPokemon()
        const p2 = P2.createPokemon()
        const result = this.performCalculations(p1, p2);
        P1.stats.spFinal = p1.stats.spe
        P2.stats.spFinal = p2.stats.spe
        this.display.display(result[0])
        this.result=result
    }
    launchCalculation() {
        this.isGateClosed = true;
        if ($('#doubles-format').prop("checked")) {
            var monRow1 = P2.box.monRow1
            var monRow2 = P2.box.monRow2
            var activeMon = P2.select
            var dataSave = this.saveCurrentMon();
            
            if (monRow1 && monRow2) {
                if (monRow1 != activeMon && monRow2 != activeMon) {
                    // before i need to know on which row is the already selected
                    // p2 always being the top row and p3 the bottom row 
                    if (P2.box.rowActiveMon == 1){
                        this.prepareDouble(activeMon,null,monRow2)
                    } else {
                        this.prepareDouble(null, activeMon, monRow1)
                    }
                } else if (monRow1 == activeMon) {
                    this.prepareDouble(activeMon,null,monRow2)
                } else if (monRow2 == activeMon) {
                    this.prepareDouble(null,monRow1,activeMon)
                    
                }
                P2.select = activeMon //switch back to the original pokemon
                this.loadSavedMon(dataSave);
            } else {
                this.prepareSingle()
            }
        } else {
            this.prepareSingle()
        }
        P1.colorCoding()
        this.isGateClosed = false;
    }
    performCalculations(p1, p2, p3, double) {
        var damageResults = new Array(2)
        double = double ? 2 : 0;
        var p1field = createField();
        var p2field = p1field.clone().swap();
        var p1Save = p1.clone() //prevents double apply of initimate
        damageResults = this.calculateAllMoves(gen, p1, p1field, p2, p2field, double, p3);
        p1 = damageResults[0][0].attacker;
        p2 = damageResults[1][0].attacker;
        p1.maxDamages = [];
        p2.maxDamages = [];
        var fastestSide = p1.stats.spe > p2.stats.spe ? 0 : p1.stats.spe === p2.stats.spe ? "tie" : 1;
        var highLowRoll = [[0, 0, 0],[0, 0, 0]] //move index, lowest highest, highest highest
        var highestPrio = [[0, -7],[0, -7]];//move index, priority level
        var result, maxDamage;
        var zProtectAlerted = false;
        for (var i = 0; i < 4; i++) {
            // P1
            result = damageResults[0][i];
            
            maxDamage = result.range()[1] * p1.moves[i].hits;
            if (!zProtectAlerted && maxDamage > 0 && p1.item.indexOf(" Z") === -1 && p1field.defenderSide.isProtected && p1.moves[i].isZ) {
                alert('Although only possible while hacking, Z-Moves fully damage through protect without a Z-Crystal');
                zProtectAlerted = true;
            }
            var lowRoll = result.damage[0] || result.damage
            var highRoll = result.damage[15] || result.damage
            if (highLowRoll[0][2] < highRoll) {
                highLowRoll[0]=[i, lowRoll, highRoll]
            }
            if (highestPrio[0][1] < (result.move.priority || -7)){
                highestPrio[0] = [i, result.move.priority]
            }

            // P2
            result = damageResults[1][i];
            maxDamage = result.range()[1] * p2.moves[i].hits;
            if (!zProtectAlerted && maxDamage > 0 && p2.item.indexOf(" Z") === -1 && p2field.defenderSide.isProtected && p2.moves[i].isZ) {
                alert('Although only possible while hacking, Z-Moves fully damage through protect without a Z-Crystal');
                zProtectAlerted = true;
            }
            
            var lowRoll = result.damage[0] || result.damage
            var highRoll = result.damage[15] || result.damage
            if (highLowRoll[1][2] < highRoll) {
                highLowRoll[1] = [i, lowRoll, highRoll]
            }
            if (highestPrio[1][1] < (result.move.priority || -7)) {
                highestPrio[1] = [i, result.move.priority]
            }
        }

        if (!double && p3){
            return [    
                {
                    fastestSide: fastestSide,
                    result: damageResults,
                    highLowRoll: highLowRoll,
                    highestPrio: highestPrio,
                }, 
                this.performCalculations(p1Save, p3, p2, true)[0]
            ];
        }
        return [{
            fastestSide: fastestSide,
            result: damageResults,
            highLowRoll: highLowRoll,
            highestPrio: highestPrio,
        }]
    }
    checkRetribution(gen, attacker, defender, move, field, defenderFriend){
        if (defender.hasAbility('Cold Rebound') && move.flags.contact){
            var saveMoveName = move
            move = calc.MOVES[gen]['Icy Wind'] 
            var overrides = {
                basePower: move.basePower,
                type: move.type,
            };
            move = new calc.Move(gen, 'Icy Wind', {
                ability: attacker.ability, innates: attacker.innates, item: attacker.item, useZ: false, species: attacker.species, isCrit: false,
                hits: 1, timesUsed: 0, timesUsedWithMetronome: 0, overrides: overrides,
                useMax: false
            });
            var retribution = calc.calculate(gen,defender, attacker, move, field, defenderFriend)
            move = saveMoveName;
            return "Warning: "  + attacker.name + " May Trigger Cold Rebound for " + retribution.moveDesc(notation) + "   "
        } else if (defender.hasAbility('Parry') && move.flags.contact) {
            var saveMoveName = move
            move = calc.MOVES[gen]['Mach Punch']
            var overrides = {
                basePower: move.basePower,
                type: move.type,
            };
            move = new calc.Move(gen, 'Mach Punch', {
                ability: attacker.ability, innates: attacker.innates, item: attacker.item, useZ: false, species: attacker.species, isCrit: false,
                hits: 1, timesUsed: 0, timesUsedWithMetronome: 0, overrides: overrides,
                useMax: false
            });
            var retribution = calc.calculate(gen,defender, attacker, move, field, defenderFriend)
            move = saveMoveName;
            return "Warning: "  + attacker.name + " May Trigger Parry for " + retribution.moveDesc(notation) + "   "
        }
        return "";
    }
    checkStatBoost(p1, p2) {
        if ($('#StatBoostL').prop("checked")) {
            for (var stat in p1.boosts) {
                if (stat === 'hp') continue;
                p1.boosts[stat] = Math.min(6, p1.boosts[stat] + 1);
            }
        }
        if ($('#StatBoostR').prop("checked")) {
            for (var stat in p2.boosts) {
                if (stat === 'hp') continue;
                p2.boosts[stat] = Math.min(6, p2.boosts[stat] + 1);
            }
        }
    }   
    calculateAllMoves(gen, p1, p1field, p2, p2field, double, pP3) {
        var warning
        if (double) {
            warning = document.getElementById('warning2')
        } else {
            warning = document.getElementById('warning')
        }
        var warnMessage = "";
        this.checkStatBoost(p1, p2);
        var results = [[], []];
        for (var i = 0; i < 4; i++) {
            results[0][i] = calc.calculate(gen, p1, p2, p1.moves[i], p1field, pP3);
            warnMessage += this.checkRetribution(gen, p2, p1, p2.moves[i], p1field, null);
            results[1][i] = calc.calculate(gen, p2, p1, p2.moves[i], p2field);
            warnMessage += this.checkRetribution(gen, p1, p2, p1.moves[i], p2field, pP3)
        }
        warning.innerText = warnMessage
        return results;
    }
    loadSavedMon(data) {
        var dataField = document.getElementsByClassName("info-group i-f-o-stats")[0];
        var typeField = dataField.previousElementSibling.children;
        var statsField = dataField.children[0].children[1].children;
        var propsField = dataField.nextElementSibling.children;
        typeField[0].children[1].value = data.tp1;
        typeField[0].children[2].value = data.tp2;
        typeField[2].children[1].value = data.frm;
        typeField[3].children[1].value = data.gdr;
        typeField[4].children[1].value = data.lvl;
        statsField[1].children[6].children[0].value = data.att;
        statsField[2].children[6].children[0].value = data.def;
        statsField[3].children[6].children[0].value = data.spa;
        statsField[4].children[6].children[0].value = data.spd;
        statsField[6].children[6].children[0].value = data.spe;
        propsField[0].children[1].value = data.ntr;
        propsField[1].children[1].value = data.abi;
        propsField[2].children[1].value = data.itm;
        propsField[3].children[1].value = data.sts;
    }
    saveCurrentMon() {
        var data = document.getElementsByClassName("info-group i-f-o-stats")[0];
        var type = data.previousElementSibling.children;
        var stats = data.children[0].children[1].children;
        var props = data.nextElementSibling.children;
        return {
            tp1: type[0].children[1].value,
            tp2: type[0].children[2].value,
            frm: type[2].children[1].value,
            gdr: type[3].children[1].value,
            lvl: type[4].children[1].value,
            att: stats[1].children[6].children[0].value,
            def: stats[2].children[6].children[0].value,
            spa: stats[3].children[6].children[0].value,
            spd: stats[4].children[6].children[0].value,
            spe: stats[6].children[6].children[0].value,
            ntr: props[0].children[1].value,
            abi: props[1].children[1].value,
            itm: props[2].children[1].value,
            sts: props[3].children[1].value,
        };
    }
    activeAbilityStatsBoost(source){
        //TODO, adapt it
        // Stat boosting ability
        
        var stat2boost
        if (source.hasActiveAbility('Let\'s Roll')) {
            stat2boost = "df"
        }
        var wonderRoomActive = $('#wonderroom').prop('checked')
        if (source.hasActiveAbility('Majestic Moth')) {
            stat2boost = this.getHighestStat(source, wonderRoomActive)
        }
        if (source.hasActiveAbility('Sea Guardian') && $('#rain').prop('checked')) {
            stat2boost = this.getHighestStat(source, wonderRoomActive)
        }
        if (source.hasActiveAbility('Sun Worship') && $('#sun').prop('checked')) {
            stat2boost = this.getHighestStat(source, wonderRoomActive)
        }
        console.log(source)
    }
    getHighestStat(source, wonderRoomActive) {
        let def = source.stats.def;
        let spd = source.stats.spd;
        // We do like abilities ignores Wonder Room
        if (wonderRoomActive) [def, spd] = [spd, def];
        let highestStats = 'atk';
        let highest = source.stats.atk;
        for (const stat of LEGACY_STATS[gen]) {
        if (stat === 'hp') continue;
        if (source.stats[stat] > highest) {
            highestStats = stat;
            highest = source.stats[stat];
        }
        }
        switch (highestStats){
            case "atk": return 'at'
            case "def": return 'df'
            case "spa": return 'sp'
            case "spd": return 'sd'
            case "spe": return 'sp'
        }
    }
}