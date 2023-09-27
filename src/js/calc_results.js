class MoveRow{
    constructor(panel, props){
        this.panel = panel
        this.props = props
        this.field_select = panel.find('input')
        this.field_name = panel.find('label')
        this.field_damage = panel.find('span')
        this.priority = 0
        this.highestDamage = 0
        this.highDamPercent = 0
        this.lowDamPercent = 0
        this.desc = ""
        this.attacker = {}
        this.defender = {}
        this.setup()
    }
    //#region 
    get name(){return this.field_name.text()}
    set name(val){this.field_name.text(val.replace("Hidden Power", "HP"))}
    get select(){return this.field_select.prop("checked")}
    set select(val){
        this.field_select.prop("checked", val)
        this.field_select.click()
    }
    get damage(){return this.field_damage.text()}
    set damage(val){this.field_damage.text(val)}
    //#endregion
    setup(){
        this.panel.click(()=>{
            this.props.props.desc = this.desc
            this.props.props.rolls = this.rolls
            this.props.props.selected = this
        })
    }
    setColors(){
        this.panel.removeClass().addClass("move-dmg-" + this.borderColorsID())
    }
    borderColorsID() {
        if (this.highDamPercent == 0) return "0"
        if (this.highDamPercent < 25) return "1"
        if (this.highDamPercent < 50) return "2"
        if (this.highDamPercent < 75) return "3"
        if (this.highDamPercent < 100) return "4"
        return "5"
    }
}


class HalfCalcResult{
    constructor(panel, props){
        this.panel = panel
        this.props = props
        this.field_header = panel.find('.result-move-header')
        this.moves = [
            new MoveRow(this.panel.find('div').eq(1), this),
            new MoveRow(this.panel.find('div').eq(2), this),
            new MoveRow(this.panel.find('div').eq(3), this),
            new MoveRow(this.panel.find('div').eq(4), this),
        ]
    }
    get header(){return this.field_header.text()}
    set header(val){this.field_header.text(val)}
    display(results, rolls, prio){
        this.attacker = results[0].attacker
        this.defender = results[0].defender
        this.move = results[0].move
        this.header = results[0].attacker.name + "'s Moves"
        for (const index in results) {
            const result = results[index]
            const move = this.moves[index]

            move.name = result.move.name
            move.damage = result.moveDesc(notation)
            if (result.move.typeEffectiveness) {
                move.damage += ' ( x' + result.move.typeEffectiveness + ' )'
            }
            move.priority = result.move.priority
            if (result.damage) {
                move.desc = result.fullDesc() 
            } else {
                move.desc = "No damage"
            }
            move.rolls = this.rollToText(result.damage)
            move.highestDamage = rolls[2]
            move.highDamPercent = ((move.highestDamage * (1000/1) / result.defender.curHP())) / 10
            move.lowDamPercent = ((result.damage[0] * (1000/1) / result.defender.curHP())) / 10
        }
        
        var highestOrPrio = prio[1] > 0 ? prio[0] : rolls[0]
        return highestOrPrio
    }
    rollToText(rolls){
        if (!rolls.length) return "" + rolls
        var textRolls = "Possible damage amounts: ("
        for (const index in rolls){
            textRolls += rolls[index]
            if (+index == rolls.length -1) continue
            textRolls += ",\u00A0"
            if (!((+index + 1) % 4)) textRolls += "\u00A0\u00A0"
            if (!((+index + 1) % 8)) textRolls += "\u00A0\u00A0"
        }
        return textRolls + ")"
    }
}

class CalcResults{
    constructor(moveGroup, mainGroup){
        this.moveGroup = moveGroup
        this.mainGroup = mainGroup
        this.panelL = new HalfCalcResult(moveGroup.find('.move-result-subgroup').eq(0), this)
        this.panelR = new HalfCalcResult(moveGroup.find('.move-result-subgroup').eq(1), this)
        this.field_big_desc = mainGroup.children().eq(0)
        this.field_small_desc = mainGroup.children().eq(1)
        this.field_warning = mainGroup.children().eq(2)
        this.selected = ""
        this.setup()
    }
    get desc(){return this.field_big_desc.text()}
    set desc(val){this.field_big_desc.text(val)}
    get rolls(){return this.field_small_desc.text()}
    set rolls(val){this.field_small_desc.text(val)}
    setup(){
        /* Click-to-copy function */
        this.mainGroup.click(()=>{
            navigator.clipboard.writeText(this.mainGroup.text()).then(function () {
                document.getElementById('tooltipText').style.visibility = 'visible';
                setTimeout(function () {
                    document.getElementById('tooltipText').style.visibility = 'hidden';
                }, 2000);
            });
        })
    }
    display(results){
        /*{
            fastestSide: fastestSide,
            result: damageResults
        }*/
        const toSelect1 = this.panelL.display(results.result[0],
             results.highLowRoll[0], results.highestPrio[0])
        const toSelect2 = this.panelR.display(results.result[1],
             results.highLowRoll[1], results.highestPrio[1])
        
        /*  
            If the opposite is faster (or tied) and the player side doesn't have higher priority move
            then the opposite highest prio or highest damage is selected
            results.fastestSide => 0 | tie | 1 <= following panels  
        */
        if (results.fastestSide && results.result[0][toSelect1].move.priority <= results.result[1][toSelect2].move.priority){
            this.panelR.moves[toSelect2].select = true
        } else {
            this.panelL.moves[toSelect1].select = true
        }

    }
}   