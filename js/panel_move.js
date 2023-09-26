
class panelMove{
    constructor(props, div){
        this.props = props
        this.panel = props.panel
        this.div = div
        this.field_select = div.find('select.move-selector')
        this.field_select_text = div.find('.select2-chosen')
        this.field_basePower = div.find('.move-bp')
        this.field_acc = div.find('.move-acc')
        this.field_type = div.find('.move-type')
        this.field_category = div.find('.move-cat')
        this.field_isZ = div.find('input.move-z')
        this.field_prio = div.find('.move-prio')
        this.field_isCrit = div.find('.move-crit')
        this.field_hits = div.find('.move-hits')
        this.field_timesUsed = div.find('.stat-drops')
        this.field_metronome = div.find(".metronome")
        this.setup()
    }
    // #region getters & setters
    get name(){return this.field_select.val()}
    set name(val){
        this.field_select.val(val)
        this.field_select_text.text(val ? val : "(No Move)")
    }
    get basePower(){return +this.field_basePower.val().replace(/\D/g, "")}
    set basePower(val){this.field_basePower.val(val)}
    get acc(){return +this.field_acc.val().replace(/[^0-9-]/g, "")}
    set acc(val){this.field_acc.val(val)}
    get type(){return this.field_type.val()}
    set type(val){this.field_type.val(val)}
    get category(){return this.field_category.val()}
    set category(val){this.field_category.val(val)}
    get isZ(){return this.field_isZ.prop("checked")}
    set isZ(val){this.field_isZ.prop("checked", val)}
    get isCrit(){return this.field_isCrit.prop("checked")}
    set isCrit(val){this.field_isCrit.prop("checked", val)}
    get prio(){return +this.field_prio.text().replace(/[^0-9-]/g, "")}
    set prio(val){this.field_prio.text(val)}
    get hits(){return +this.field_hits.val()}
    set hits(val){this.field_hits.val(val)}
    get timesUsed(){return +this.field_timesUsed.val()}
    set timesUsed(val){this.field_timesUsed.val(val)}
    get metronome(){
        if (this.field_metronome.is(':visible')) return +this.field_metronome.val()
        return 1
    }
    set metronome(val){this.field_metronome.val(val)}
    // #endregion
    setup(){
        this.field_basePower.keyup(()=>{
            this.basePower = Math.max(0, Math.min(65535,this.basePower)) //sanitize
        })
        this.field_select.change(()=>{
            this.setMove(this.name)
            calcGateway.calcTrigger()
        })
    }
    setMove(moveName) {
        const move = window.moves[moveName]
        this.name = moveName
        this.autoCorrectHiddenPower()
        this.basePower = move.bp
        this.acc = move.acc ? move.acc : '--'
        this.type = move.type
        this.category = move.category
        this.isZ = false
        this.prio = move.priority || 0
        if (+this.prio > 0){
            this.prio = '+' + this.prio
        }
        if (+localStorage.getItem("rcrits")){
            this.isCrit = move.willCrit || false
        }
        var stat = move.category === 'Special' ? 'spa' : 'atk';
        var dropsStats = move.self && move.boosts && move.self.boosts[stat] && move.self.boosts[stat] < 0;
        if (Array.isArray(move.multihit)) {
            this.field_timesUsed.hide();
            this.field_hits.show();
            this.hits = (this.props.ability === 'Skill Link') ? 5 : 3;
        } else if (dropsStats) {
            this.field_hits.hide();
            this.field_timesUsed.show();
        } else if (move.powUp) {
            this.field_hits.hide();
            this.field_timesUsed.show();
        } else {
            this.field_hits.hide();
            this.field_timesUsed.hide();
        }
    }

    getDetails(species){
        if (this.timesUsed && this.name === "Echoed Voice") {
            this.basePower = 40 * this.timesUsed
        }
        var overrides = {
            basePower: this.basePower,
            type: this.type,
        };
        if (gen >= 4) overrides.category = this.category
        return new calc.Move(gen, this.name, {
            ability: this.props.ability, innates: this.props.innates['all'], item: this.props.item, useZ: this.isZ, species: species, isCrit: this.isCrit,
            hits: this.hits, timesUsed: this.timesUsed, timesUsedWithMetronome: this.metronome, overrides: overrides,
            useMax: this.props.stats.dynamax
        });
    }


    autoCorrectHiddenPower(){
		const m = this.name.match(/^Hidden Power$/);
		if (!m) return move;
        const pokemon = this.props.pokemon
		const monIVs = {hpIV:pokemon.ivs.hp,attackIV:pokemon.ivs.at,
			defenseIV:pokemon.ivs.df,spAttackIV:pokemon.ivs.sa,
			spDefenseIV:pokemon.ivs.sd,speedIV:pokemon.ivs.sp}
        const type = getGEN3HP(monIVs);
		this.name =  this.name + " " + type
        this.type = type
    }
}