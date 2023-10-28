class PanelStats{
    constructor(panel, props){
        this.panel = panel
        this.props = props // parent propriety
        // HP
        this.hpDiv = panel.find('.hp')
        this.field_hpBase = this.hpDiv.find('.base')
        this.field_hpIV = this.hpDiv.find('.ivs')
        this.field_hpEV = this.hpDiv.find('.evs')
        this.field_hpDV = this.hpDiv.find('.dvs')
        this.field_hp = this.hpDiv.find('.total')
        // Attack
        this.atDiv = panel.find('.at')
        this.field_atBase = this.atDiv.find('.base')
        this.field_atIV = this.atDiv.find('.ivs')
        this.field_atEV = this.atDiv.find('.evs')
        this.field_atDV = this.hpDiv.find('.dvs')
        this.field_at= this.atDiv.find('.total')
        this.field_atBoost = this.atDiv.find('.boost')
        // defense
        this.dfDiv = panel.find('.df')
        this.field_dfBase = this.dfDiv.find('.base')
        this.field_dfIV = this.dfDiv.find('.ivs')
        this.field_dfEV = this.dfDiv.find('.evs')
        this.field_dfDV = this.hpDiv.find('.dvs')
        this.field_df = this.dfDiv.find('.total')
        this.field_dfBoost = this.dfDiv.find('.boost')
        // Special Attack
        this.saDiv = panel.find('.sa')
        this.field_saBase = this.saDiv.find('.base')
        this.field_saIV = this.saDiv.find('.ivs')
        this.field_saEV = this.saDiv.find('.evs')
        this.field_saDV = this.hpDiv.find('.dvs')
        this.field_sa = this.saDiv.find('.total')
        this.field_saBoost = this.saDiv.find('.boost')
        // Special Defense
        this.sdDiv = panel.find('.sd')
        this.field_sdBase = this.sdDiv.find('.base')
        this.field_sdIV = this.sdDiv.find('.ivs')
        this.field_sdEV = this.sdDiv.find('.evs')
        this.field_sdDV = this.hpDiv.find('.dvs')
        this.field_sd = this.sdDiv.find('.total')
        this.field_sdBoost = this.sdDiv.find('.boost')
        // Speed
        this.spDiv = panel.find('.sp')
        this.field_spBase = this.spDiv.find('.base')
        this.field_spIV = this.spDiv.find('.ivs')
        this.field_spEV = this.spDiv.find('.evs')
        this.field_spDV = this.hpDiv.find('.dvs')
        this.field_sp = this.spDiv.find('.total')
        this.field_spBoost = this.spDiv.find('.boost')
        this.field_spFinal = this.spDiv.find('.totalMod')
        // GEN 1 Special
        //doesn't i miss things?
        this.field_slDV = this.hpDiv.find('.dvs')
        // Health
        this.field_dynamax = this.panel.find('.max')
        this.field_saltcure = this.panel.find(".saltcure")
        this.field_currentHP = this.panel.find('.current-hp')
        this.field_maxHP = this.panel.find('.max-hp')
        this.field_percentHP = this.panel.find('.percent-hp')
        this.field_hpBar = this.panel.find('.hpbar')
        // Misc
        this.field_berryHP = this.panel.find(".berry-hp")
        // Events listeners
        this.setup()
    }
    // #region getters & setters
    get hp(){return +this.field_hp.text()}
    set hp(val){this.field_hp.text(val)}
    get hpBase(){return +this.field_hpBase.val().replace(/\D/g, "")}
    set hpBase(val){this.field_hpBase.val(val)}
    get hpIV(){return +this.field_hpIV.val().replace(/\D/g, "")}
    set hpIV(val){this.field_hpIV.val(val)}
    get hpEV(){return +this.field_hpEV.val().replace(/\D/g, "")}
    set hpEV(val){this.field_hpEV.val(val)}
    get hpDV(){return +this.field_hpDV.val().replace(/\D/g, "")}
    set hpDV(val){this.field_hpDV.val(val)}
    get hpBoost(){return 0}
    get at(){return +this.field_at.text()}
    set at(val){this.field_at.text(val)}
    get atBase(){return +this.field_atBase.val().replace(/\D/g, "")}
    set atBase(val){this.field_atBase.val(val)}
    get atIV(){return +this.field_atIV.val().replace(/\D/g, "")}
    set atIV(val){this.field_atIV.val(val)}
    get atEV(){return +this.field_atEV.val().replace(/\D/g, "")}
    set atEV(val){this.field_atEV.val(val)}
    get atDV(){return +this.field_atDV.val().replace(/\D/g, "")}
    set atDV(val){this.field_atDV.val(val)}
    get atBoost(){return +this.field_atBoost.val()}
    set atBoost(val){this.field_atBoost.val(val)}
    get df(){return +this.field_df.text()}
    set df(val){this.field_df.text(val)}
    get dfBase(){return +this.field_dfBase.val().replace(/\D/g, "")}
    set dfBase(val){this.field_dfBase.val(val)}
    get dfIV(){return +this.field_dfIV.val().replace(/\D/g, "")}
    set dfIV(val){this.field_dfIV.val(val)}
    get dfEV(){return +this.field_dfEV.val().replace(/\D/g, "")}
    set dfEV(val){this.field_dfEV.val(val)}
    get dfDV(){return +this.field_dfDV.val().replace(/\D/g, "")}
    set dfDV(val){this.field_dfDV.val(val)}
    get dfBoost(){return +this.field_dfBoost.val()}
    set dfBoost(val){this.field_dfBoost.val(val)}
    get sa(){return +this.field_sa.text()}
    set sa(val){this.field_sa.text(val)}
    get saBase(){return +this.field_saBase.val().replace(/\D/g, "")}
    set saBase(val){this.field_saBase.val(val)}
    get saIV(){return +this.field_saIV.val().replace(/\D/g, "")}
    set saIV(val){this.field_saIV.val(val)}
    get saEV(){return +this.field_saEV.val().replace(/\D/g, "")}
    set saEV(val){this.field_saEV.val(val)}
    get saDV(){return +this.field_saDV.val().replace(/\D/g, "")}
    set saDV(val){this.field_saDV.val(val)}
    get saBoost(){return +this.field_saBoost.val()}
    set saBoost(val){this.field_saBoost.val(val)}
    get slDV(){return +this.field_slDV.val().replace(/\D/g, "")}
    set slDV(val){this.field_slDV.val(val)}
    get sd(){return +this.field_sd.text()}
    set sd(val){this.field_sd.text(val)}
    get sdBase(){return +this.field_sdBase.val().replace(/\D/g, "")}
    set sdBase(val){this.field_sdBase.val(val)}
    get sdIV(){return +this.field_sdIV.val().replace(/\D/g, "")}
    set sdIV(val){this.field_sdIV.val(val)}
    get sdEV(){return +this.field_sdEV.val().replace(/\D/g, "")}
    set sdEV(val){this.field_sdEV.val(val)}
    get sdDV(){return +this.field_sdDV.val().replace(/\D/g, "")}
    set sdDV(val){this.field_sdDV.val(val)}
    get sdBoost(){return +this.field_sdBoost.val()}
    set sdBoost(val){this.field_sdBoost.val(val)}
    get sp(){return +this.field_sp.text()}
    set sp(val){this.field_sp.text(val)}
    get spBase(){return +this.field_spBase.val().replace(/\D/g, "")}
    set spBase(val){this.field_spBase.val(val)}
    get spIV(){return +this.field_spIV.val().replace(/\D/g, "")}
    set spIV(val){this.field_spIV.val(val)}
    get spEV(){return +this.field_spEV.val().replace(/\D/g, "")}
    set spEV(val){this.field_spEV.val(val)}
    get spDV(){return +this.field_spDV.val().replace(/\D/g, "")}
    set spDV(val){this.field_spDV.val(val)}
    get spBoost(){return +this.field_spBoost.val()}
    set spBoost(val){this.field_spBoost.val(val)}
    get spFinal(){return +this.field_spFinal.text()}
    set spFinal(val){this.field_spFinal.text(val)}
    get dynamax(){return this.field_dynamax.prop("checked")}
    get saltcure(){return this.field_saltcure.prop("checked")}
    get currentHP(){return +this.field_currentHP.val().replace(/\D/g, "")}
    set currentHP(val){this.field_currentHP.val(val)}
    get maxHP(){return +this.field_maxHP.text()}
    set maxHP(val){this.field_maxHP.text(val)}
    get prevMaxHP(){return +this.field_maxHP.attr('data-prev')}
    set prevMaxHP(val){this.field_maxHP.attr('data-prev', val)}
    get percentHP(){return +this.field_percentHP.val()}
    set percentHP(val){this.field_percentHP.val(val)}
    // #endregion
    fieldSanit(stat, field){
        const bounds = {
            "Base": [1, 255],
            "EV": [0, 252],
            "IV": [0, 31],
            "DV": [0, 15],
            "Boost": [-6, 6],
        }
        this[stat + field] = Math.max(bounds[field][0], Math.min(bounds[field][1], this[stat + field]))
    }
    setup(){
        // Stats events
        for (const stat of LEGACY_STATS[gen]) {
            const statsFields = ["Base", "IV", "EV", "Boost"]
            for (const field of statsFields){
                const calcStatsFn = ()=>{
                    this.fieldSanit(stat, field)
                    this.calcStat(stat)
                }
                if (stat === "hp" && field === "Boost") continue
                this["field_" + stat + field].bind("keyup change", calcStatsFn);
            }
            this["field_" + stat + "DV"].bind("keyup change",
                stat === "sl" ? ()=>{this.fieldSanit(stat, field);this.calcStat(stat)} : ()=>{
                    this.fieldSanit(stat, "DV")
                    this.calcStat(stat)
                    this.getHPDVs()
                    this.calcHP()
                }
            );
        }
        //HP events
        this.field_currentHP.keyup(()=>{
            this.currentHP = Math.max(0, Math.min(this.maxHP, this.currentHP));
            this.calcPercentHP()
        })
        this.field_percentHP.keyup(()=>{
            this.percentHP = Math.max(0, Math.min(100, this.percentHP));
            this.calcCurrentHP()
        })
        this.field_hpBar.click((ev)=>{
            const x = ev.offsetX
            const width = this.field_hpBar.width()
            this.percentHP = ~~(x / width * 100)
            this.calcCurrentHP()
            calcGateway.calcTrigger()
        })
    }
    setStats(stats){
        //Pre Boosted Stats
        this.PBSat = stats.at
        this.PBSdf = stats.df
        this.PBSsa = stats.sa
        this.PBSsd = stats.sd
        this.PBSsp = stats.sp

        this.PBSat = stats.at
        this.PBSdf = stats.df
        this.PBSsa = stats.sa
        this.PBSsd = stats.sd
        this.PBSsp = stats.sp
    }
    calcStats(){
        for (const stat of LEGACY_STATS[gen]) {
            this.calcStat(stat)
        }
    }
    calcStat(stat){
        var base = this[stat + "Base"];
        var level = this.props.level;
        var nature, ivs, evs;
        if (gen < 3) {
            ivs = this[stat + "DV"] * 2;
            evs = 252;
        } else {
            ivs = this[stat + "IV"];
            evs = this[stat + "EV"];
            if (stat !== "hp") nature = this.props.nature;
        }
        // Shedinja still has 1 max HP during the effect even if its Dynamax Level is maxed (DaWoblefet)
        var total = calc.calcStat(gen, legacyStatToStat(stat), base, ivs, evs, level, nature);
        if (gen > 7 && stat === "hp" && this.dynamax && total !== 1) {
            total *= 2;
        }
        this[stat] = total
        return total;
    }
    getHPDVs() {
        return (this.atDV % 2) * 8 +
            (this.dfDV % 2) * 4 +
            (this.spDV % 2) * 2 +
            (gen === 1 ? this.slDV : this.saDV) % 2;
    }    
    calcHP(){
        var total = this.calcStat("hp");
        var prevMaxHP = Number(this.prevMaxHP) || total;
        var prevCurrentHP = this.field_currentHP.attr('data-set') ? Math.min(this.currentHP, prevMaxHP) : prevMaxHP;
        this.percentHP =  ~~(100 * (prevCurrentHP / prevMaxHP));
        this.maxHP = total
        this.prevMaxHP = total
        this.calcCurrentHP(true);
        //this.calcPercentHP(true);
        this.field_currentHP.attr('data-set', true);
    }
    calcCurrentHP(skipDraw) {
        this.currentHP = Math.round(Number(this.percentHP) * Number(this.maxHP) / 100);   
        if (!skipDraw) this.drawHealthBar();
    }
    calcPercentHP(skipDraw) {
        var percent = Math.round(100 * Number(this.currentHP) / Number(this.maxHP));
        if (percent === 0 && this.currentHP > 0) {
            percent = 1;
        } else if (percent === 100 & this.currentHP < this.maxHP) {
            percent = 99;
        }
        this.percentHP = percent
        if (!skipDraw) this.drawHealthBar();
        return percent;
    }
    drawHealthBar() {
        var fillPercent = 100 * this.currentHP / this.maxHP;
        var fillColor = fillPercent > 50 ? "green" : fillPercent > 20 ? "yellow" : "red";

        this.field_hpBar.addClass("hp-" + fillColor);
        var unwantedColors = ["green", "yellow", "red"];
        unwantedColors.splice(unwantedColors.indexOf(fillColor), 1);
        for (var i = 0; i < unwantedColors.length; i++) {
            this.field_hpBar.removeClass("hp-" + unwantedColors[i]);
        }
        this.field_hpBar.css("background", "linear-gradient(to right, " + fillColor + " " + fillPercent + "%, white 0%");
    }
    showBerryHP() {
        var BHP, PHP; //Brute HP or Percentage HP
        switch (this.props.item) {
            case "Oran Berry":
                BHP = 10;
                break;
            case "Berry Juice":
                BHP = 20;
                break;
            case "Sitrus Berry":
                if (gen == 3) {
                    BHP = 30;
                } else {
                    PHP = 25;
                }
                break;
            case "Wiki Berry":
            case "Mago Berry":
            case "Aguav Berry":
            case "Iapapa Berry":
                if (gen <= 6) {
                    PHP = 12.5;
                } else if (gen == 7) {
                    PHP = 50;
                } else {
                    PHP = 30;
                }
                break;
        }
        if (BHP) {
            this.field_berryHP.text(`+ ${((BHP / this.maxHP) * 100).toFixed(2)}% (berry)`)
        } else if (PHP) {
            this.field_berryHP.text(`+ ${Math.floor(PHP * (this.maxHP / 100))}HP (berry)`)
        } else {
            this.field_berryHP.text("");
        }
        return
    }
}