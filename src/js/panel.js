class Panel{
    constructor(panel){
        this.panel = panel
        // Title selection
        this.field_select = this.panel.find('input.selector.select2-offscreen')
        this.field_selectTitle = this.panel.find('.selector .select2-chosen')
        this.field_pokeImg = this.panel.find('legend img')
        // Head props
        this.trainerID = -1
        this.lastTrainerID = -1;
        this.pokemon = {}
        this.field_forme = this.panel.find('.forme')
        this.field_type1 = this.panel.find('.type1')
        this.field_type2 = this.panel.find('.type2')
        this.field_tera = this.panel.find('.teraType')
        this.field_tera_on = this.panel.find('.teraToggle')
        this.field_gender = this.panel.find('.gender')
        this.field_level = this.panel.find('.level')
        // Stats
        this.stats = new PanelStats(this.panel, this)
        // Propreties
        this.field_nature = this.panel.find('.nature')
        this.field_innates = this.panel.find('.innates')
        this.field_innates = [this.field_innates.eq(0),this.field_innates.eq(1),this.field_innates.eq(2)]
        this.innates = new Proxy(this.field_innates, {
            get: function(target, index){
                if (index === "all") {
                    return [target[0].val(), target[1].val(), target[2].val()]
                } else if (index === 'length'){
                    return target.length
                }
                return target[index].val()
            },
            set: (target, index, val) => {
                var shouldUpdate = val != target[index].val()
                target[index].val(val)
                if (ABI_DESC) {
                    target[index].attr('title', ABI_DESC[val]) 
                }
                if (shouldUpdate) this.changeAbilityInnates(index)
                return true
            }
        })
        this.field_innatesOn = this.panel.find('.innatesToggle')
        this.field_innatesOn = [this.field_innatesOn.eq(0),this.field_innatesOn.eq(1),this.field_innatesOn.eq(2)]
        this.innatesOn = new Proxy(this.field_innatesOn, {
            get: function(target, index){
                if (index === "all") {
                    return [target[0].prop("checked"), target[1].prop("checked"), target[2].prop("checked")]
                } else if (index === 'length'){
                    return target.length
                }
                return target[index].prop("checked")  
            },
            set: function(target, index, val){
                if (index === "all") {
                    for (const tar in target){
                        target[tar].val(val)
                    }
                    return true
                }
                target[index].val(val)
                return true
            }
        })
        this.field_ability = this.panel.find('.ability')
        this.field_abilityOn = this.panel.find('.abilityToggle')
        this.field_allies_fainted = this.panel.find('.alliesFainted')
        this.field_item = this.panel.find('.item')
        this.field_status = this.panel.find('.status')
        this.field_toxicCounter = this.panel.find('.toxic-counter')
        // Health => panel_stats.js
        // Moves => panel_move.js
        this.moves = [  
            new panelMove(this, this.panel.find('.move1')),
            new panelMove(this, this.panel.find('.move2')),
            new panelMove(this, this.panel.find('.move3')),
            new panelMove(this, this.panel.find('.move4')) 
        ]
        // Misc
        this.abiForme = [];
        this.box = this.fetchBox()
        this.switchSet = false;
        // Setups the event listeners
        this.setup()
    }
    // note with the setters and getters, they aren't activated when interacting throught mousesclicks on the UI
    // #region salades de getter & setters
    // Type
    get select(){return this.field_select.val()}
    set select(val){
        if (this.select === val) return
        this.field_select.val(val);
        this.setPanel()
    }
    get selectTitle(){return this.field_selectTitle.text()}
    set selectTitle(val){this.field_selectTitle.text(val)}
    get pokeImg(){return this.field_pokeImg.src}
    set pokeImg(val){
        this.field_pokeImg.prop("src", getSrcImgPokemon(val))
    }
    get forme(){return this.field_forme.val()}
    set forme(val){this.field_forme.val(val)}
    get type1(){return this.field_type1.val()}
    set type1(val){this.field_type1.val(val)}
    get type2(){return this.field_type2.val()}
    set type2(val){this.field_type2.val(val)}
    get types(){return [this.type1, this.type2]}
    get tera(){return this.field_tera_on.prop("checked") ? this.field_tera.val() : undefined}
    set tera(val){this.field_tera.val(val)}
    get gender(){ const val = this.field_gender.val()
        if ( val === "Male") return "M"
        return val === "Female" ? "F" : "N"
    }
    set gender(val){this.field_gender.val(val || "N")}
    get level(){return +this.field_level.val().replace(/\D/g, "")}
    set level(val){this.field_level.val(val)}
    // Props
    get nature(){return this.field_nature.val()}
    set nature(val){this.field_nature.val(val)}
    get ability(){return this.field_ability.val()}
    set ability(val){
        var shouldUpdate = val !=  this.field_ability.val()
        this.field_ability.val(val)
        if (ABI_DESC) {
            this.field_ability.attr('title', ABI_DESC[val]) 
        }
        if (shouldUpdate) this.changeAbilityInnates(-1)
    }
    get abilityOn(){return this.field_abilityOn.prop("checked")}
    set abilityOn(val){this.field_abilityOn.prop("checked", val)}
    get alliesFainted(){return +this.field_allies_fainted.val()}
    set alliesFainted(val){this.field_allies_fainted.val(val)}
    get item(){return this.field_item.val()}
    set item(val){
        this.field_item.val(val)
        this.itemChange()
    }
    get status(){return this.field_status.val()}
    set status(val){this.field_status.val(val)}
    get toxicCounter(){return +this.field_toxicCounter.val()}
    set toxicCounter(val){this.field_toxicCounter.val(val)}
    // Health
    // Moves
    // Misc
    get weightkg(){return this.pokemon.weightkg}
    get heads(){return this.pokemon.heads}
    // #endregion
    setup(){
        this.field_select.change(()=>{
            this.setPanel()
            this.selectTitle = this.trainerName + " : " + this.pokemonName

        })
        this.field_forme.change(()=>{
            if (this.trainer.mons[this.pokeID]) this.trainer.mons[this.pokeID]["abi_"+this.pokemon.species] = this.ability
            // overwrites from pokedex data
            var pokedexMon =  structuredClone(pokedex[this.forme])
            Object.keys(pokedexMon).forEach(k => {var x = (k) =>{this.pokemon[k] = pokedexMon[k]};x(k)});
            this.pokemon.species = this.forme
            if (this.trainer.mons[this.pokeID]){
                this.trainer.mons[this.pokeID] = this.pokemon
                this.select = this.forme + ";" + this.trainerName + ";" + this.pokeID
                this.box.idToNode[this.pokeID].src = getSrcImgPokemon(this.forme)
            } else {
                this.select = this.forme
            }
            this.setPanel()
        })
        this.field_level.bind('keyup, change', ()=>{
            this.level = Math.max(1, Math.min(100, this.level))// apply sanit
            this.stats.calcHP();
            this.stats.calcStats()
            calcGateway.calcTrigger()
        })
        this.field_nature.change(()=>{
            this.stats.calcStats()
        })
        for (let i in this.field_innates){
            this.field_innates[i].change(()=>{
                this.changeAbilityInnates(i)
            });
        }
        this.field_ability.change(()=>{
            // -1 to differentiates ability to innates
            this.changeAbilityInnates(-1)
        })
        for (let i in this.field_innatesOn){
            this.field_innatesOn[i].change(() =>{
                this.onAbilityActivation(i)
                calcGateway.calcTrigger()
            })
        }
        this.field_abilityOn.change(()=>{
            this.onAbilityActivation(-1)
            calcGateway.calcTrigger()
        })
        this.field_item.change(()=>{
            this.itemChange()
        })
        this.lastManualStatus = "Healthy"
        this.field_status.change(()=>{
            this.lastManualStatus = this.status
        })

    }
    fetchBox(){
        const box = this.panel.closest(".panel").find('[aria-label="trainer-poks"]')
        if (box.hasClass("player-type-box")) return new PlayerBox(box, this)
        return new TrainerBox(box, this)
    }
    showFormes() {
        var otherFormes = this.pokemon.otherFormes
        if (otherFormes){
            // first save the ability of the forme
            this.pokemon.formeAbi
            var formes = [this.pokemon.species]
            for (const forme of otherFormes){
                formes.push(forme)
            }
            var formeOptions = getSelectOptions(formes, false, this.pokemon.species);
            this.field_forme.find("option").remove().end().append(formeOptions);
            this.field_forme.parent().show();
        } else {
            this.field_forme.parent().hide();
        }
    }
    showAbilities(){
        if (this.pokemon.abilities) {
            var abilityOptions = getSelectOptions(this.pokemon.abilities, false,);
            this.field_ability.find("option").remove().end().append(abilityOptions);
        }
    }
    hasTrainerChanged(){
        const hasChanged = this.lastTrainerID == this.trainerID
        this.lastTrainerID = this.trainerID
        return !hasChanged
    }
    getAbility(){
        const poke = this.pokemon
        if (!poke.ability){
            return poke.abilities[0] //default
        }
        if (typeof poke.ability === "string") {
            return poke.ability
        }
        if (poke["abi_"+poke.species]) {
            return poke["abi_"+poke.species]
        }
        if (!isNaN(+poke.ability)){
            if (poke.ability > poke.abilities.length) {
                console.warn("the ability +" + poke.ability + " doesn't correpond to any ability")
                return poke.abilities[0]
            }
            return  poke.abilities[poke.ability]
        } else {
            return poke.ability
        }
    }
    hasAbilityActive(abilities){
        var ability = this.hasAbility(abilities)
        switch(ability){
            case 0: return false;
            case 1: return this.abilityOn;
            case ability > 1:
                return this.innatesOn[ability - 2];
        }
    }
    hasAbility(abilities){
        if ((abilities.includes(this.ability))) return 1;
        for (let i = 0; i < this.innates['length']; i++) {
        const innate = this.innates[i];
        if (innate === "") continue
        if (abilities.includes(innate)) {
            return i + 2;
        }
        }
        return 0;
    }
    onAbilityActivation(id){
        var ability, isOn
        if (id < 0) { // ability
            ability = this.ability
            isOn = this.abilityOn
        } else {
            // innates
            ability = this.innates[id]
            isOn = this.innatesOn[id]
        }
        if (ability === "Ambush"){
            for (const move of this.moves){
                move.isCrit = isOn
            }
        }
        
    }

    changeAbilityInnates(id){
        var ability, ActiveDiv
        if (id < 0) { // ability
            ability = this.ability
            ActiveDiv = this.field_abilityOn
        } else {
            // innates
            ability = this.innates[id]
            ActiveDiv = this.field_innatesOn[id]
        }
        var TOGGLE_ABILITIES = ['Flash Fire', 'Intimidate', 'Minus', 'Plus', 'Slow Start', 'Scare', 'Violent Rush',
        'Unburden', 'Stakeout', 'Coil Up', 'Let\'s Roll', 'Grip Pincer', 'Violent Rush', 'Dreamcatcher', 'Ambush'];
        if (TOGGLE_ABILITIES.indexOf(ability) >= 0) {
            ActiveDiv.show();
        } else {
            ActiveDiv.hide();
        }

        if (ability === "Supreme Overlord") {
            this.field_allies_fainted.show();
        } else {
            this.alliesFainted = 0;
            this.field_allies_fainted.hide();

        }
    }
    checkAbilityOnEntry(){
        if (this.hasAbility('Drought', 'Orichalcum Pulse')){
            $("#sun").prop("checked", true);
        } else if (this.hasAbility('Drizzle')){
            $("#rain").prop("checked", true);
        } else if (this.hasAbility('Sand Stream')){
            $("#sand").prop("checked", true);
        } else if (this.hasAbility('Snow Warning')){
            if (gen >= 9) {
                $("#snow").prop("checked", true);
            } else {
                $("#hail").prop("checked", true);
            }
        } else if (this.hasAbility('Desolate Land')){
            $("#harsh-sunshine").prop("checked", true);
        } else if (this.hasAbility('Primordial Sea')){
            $("#heavy-rain").prop("checked", true);
        } else if (this.hasAbility('Delta Stream')){
            $("#strong-winds").prop("checked", true);
        }
    }
    resetTrainerToDefault(){
        if (!this.trainer) return
        // safely restore base team if there was previously a changement (rematch / alternative sets)
        if (this.trainer.swp) {
            var trn = this.trainer
            trn.mons = trn.swp;
            delete trn.swp;
            delete trn.flagid;
        }
        if (this.trainer.trnswp){
            var trn = this.trainer
            trn.trn = trn.trnswp.trn
            trn.mons = trn.trnswp.mons
            trn.rem = trn.trnswp.rem
            delete trn.trnswp
            delete trn.flagid
        }
    }
    parseSelector(){
        const parsed = this.select.split(";")
        this.pokemonName = parsed[0]
        if (parsed.length == 1){
            if (isNaN(+this.pokemonName)){
                //pokemon name
                this.pokemon = structuredClone(pokedex[this.pokemonName])
                this.pokemon.species = this.pokemonName
                // i won't change the trainer however i'll add this pokemon to the current trainer
                // also don't append to the player
                this.pokeID = this.trainer.mons.length - 1 || 0
                if (!this.trainer || this.trainerID == 0) return
                this.trainer.mons.push(this.pokemon)
                this.box.addBoxed(this.pokemon, this.pokeID)
                return
            } else {
                //trainer id
                this.trainerID = +this.pokemonName
                this.trainer = setdex[this.trainerID]
                this.trainerName = this.trainer.trn
                this.pokeID = 0
                if (!this.trainer.mons.length) return
                this.pokemonName = this.trainer.mons[this.pokeID].species
                this.pokemon = Object.assign(structuredClone(pokedex[this.pokemonName]), this.trainer.mons[this.pokeID])
                this.select = this.pokemonName + ";" + this.trainerName + ";" + this.pokeID
                return
            }
        }
        this.trainerName = parsed[1]
        // clone this if you don't want bad surprises
        this.pokemon = structuredClone(pokedex[this.pokemonName])
        this.trainerID = +dexset[this.trainerName]
        if (isNaN(this.trainerID)){
            this.trainerID = dexset[this.trainerName].split(":")[0]
        }
        this.trainer = setdex[this.trainerID]
        this.pokeID  = +parsed[2]
        this.pokemon = Object.assign(this.pokemon, this.trainer.mons[this.pokeID])
        if (parsed.length == 5){
            // rematch or alt set
            var setID = +parsed[4]
            this.switchSet = {[parsed[3]] : setID}
        }
        
    }
    setPanel(){
        this.parseSelector()
        this.selectTitle = this.trainerName + " : " + this.pokemonName
        if (!this.pokemon || !this.pokemon.species) return
        if(this.hasTrainerChanged()) {
            this.resetTrainerToDefault()
            if ($('#field-reset-on').prop("checked")) clearField();
            if (+localStorage.getItem("p-notes") && this.trainerID != 0) restorePNotes(this.select);
            critsResets(this.panel);
            localStorage.setItem(GameName + "trainer", this.trainerID);
            this.box.changeTrainer()
        }
        if (this.switchSet){
            if (this.switchSet.rem){
                var setID = this.switchSet.rem //ev.target.dataset.id
                this.box.selected = this.box.field_rematch.children().eq(setID + 1)
                this.box.trainerTeamChange('rem', setID)
            } else if(this.switchSet.alt){
                var setID = this.switchSet.alt
                this.box.selected = this.box.field_alternative.children().eq(setID +1)
                this.box.trainerTeamChange('alt', setID)
            } else {
                this.box.selected = this.box.field_alternative.children().eq(1)
                this.box.trainerTeamChange('insane', 1)
            }
            this.switchSet = false
            this.box.fullRebox()
        }
        const poke = correctCompactedIVEV(this.pokemon)
        this.pokeImg = poke.species
        this.showFormes();
        if (!+$('#all-abis-on').prop("checked")) this.showAbilities()
        this.type1 = poke.types[0]
        this.type2 = poke.types[1]
        this.level = poke.level || highestMonLevel
        
        for (const stat of LEGACY_STATS[gen]) {
            this.stats[stat + "Base"] = poke.bs[stat]
            
            if (stat === 'sp' && poke.zeroSpe) {
                this.stats[stat + "IV"] = 0
            }  else if (this.constructor.name === 'PlayerPanel') {
                this.stats[stat + "IV"] = 31
            } else {
                this.stats[stat + "IV"] = poke.ivs && poke.ivs[stat] > -1 && poke.ivs[stat] || 31
            }
            if (+$('#no-ev-on').prop("checked")) {
                this.stats[stat + "EV"] = 0
            } else {
                this.stats[stat + "EV"] = poke.evs && poke.evs[stat] || 0
            }
            
            if (stat === "hp") continue
            this.stats[stat + "Boost"] = 0
        }

        this.nature = poke.nature
        this.innates[0] = poke.innates[0]
        this.innates[1] = poke.innates[1]
        this.innates[2] = poke.innates[2]
        
        this.innatesOn['all'] = false
        this.ability = this.getAbility()
        this.abilityOn = false
        this.item = poke.heldItem || poke.item || ""
        this.status = "Healthy"
        this.stats.percentHP = 100
        if (poke.moves && poke.moves.length > 4) {
            console.error("Move Duplication found: " + poke.moves + " at " + this.trainerName + " !")
            for (var i = 0; i < poke.moves.length; i++){
                const check = poke.moves[i]
                for (var j = 0 ; j < poke.moves.length; j++){
                    const counterCheck = poke.moves[j]
                    if (j == i) continue
                    if (counterCheck === check) {
                        poke.moves.splice(j, 1)
                        setdex[this.trainerID].mons[this.pokeID].moves = poke.moves
                    }
                    
                }
            }
        }
        for (var index = 0; index < 4; index++) {
            const move = poke.moves && poke.moves[index] || "(No Move)"
            this.moves[index].setMove(move)
        }
        this.stats.calcHP()
        this.stats.drawHealthBar()
        this.stats.calcStats()
        this.getTerrainEffects()
        this.checkAbilityOnEntry()
        calcGateway.calcTrigger()
    }
    createPokemon(){
		var baseStats = {};
		var ivs = {};
		var evs = {};
		var boosts = {};
		
		for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
            var legacyStat = LEGACY_STATS[gen][i];
            var stat = legacyStatToStat(legacyStat);
            baseStats[stat === 'spc' ? 'spa' : stat] = this.stats[legacyStat + "Base"];
            ivs[stat] = gen > 2 ? this.stats[legacyStat + "IV"] : this.stats[legacyStat + "DVS"] * 2 + 1;
            evs[stat] = this.stats[legacyStat + "EV"];
            boosts[stat] =  this.stats[legacyStat + "Boost"];
		}
		if (gen === 1) baseStats.spd = baseStats.spa; 
		this.stats.calcHP()
		// FIXME the Pokemon constructor expects non-dynamaxed HP
		if (this.stats.dynamax) this.stats.currentHP = Math.floor(this.stats.currentHP / 2);

		return new calc.Pokemon(gen, this.pokemonName, {
            heads: this.heads, //this should be working already within the calc but it doesn't?
            weightkg: this.weightkg, //same goes here
			level: this.level,
			ability: this.ability,
			innates: this.innates['all'],
			abilityOn: this.abilityOn,
			innatesOn: this.innatesOn['all'],
			item: this.item,
			gender: this.gender,
			nature: this.nature,
			ivs: ivs,
			evs: evs,
			isDynamaxed: this.stats.dynamax,
			isSaltCure: this.saltcure,
			alliesFainted: this.alliesFainted,
			boostedStat: undefined, // ???
			teraType: this.tera,
			boosts: boosts,
			curHP: this.stats.currentHP,
			status: CALC_STATUS[this.status],
			toxicCounter: this.status === 'Badly Poisoned' ? this.toxicCounter : 0,
			moves: [
				this.moves[0].getDetails(),
				this.moves[1].getDetails(),
				this.moves[2].getDetails(),
				this.moves[3].getDetails(),
			],
			overrides: {
				baseStats: baseStats,
				types: this.types,
			}
		});
    }
    isPokeGrounded() {
        const teraType = this.tera
        return $("#gravity").prop("checked") || (
            teraType ? teraType !== "Flying" : this.type1 !== "Flying" &&
                teraType ? teraType !== "Flying" : this.type2 !== "Flying" &&
                this.ability !== "Levitate" && this.item !== "Air Balloon"
        );
    }
    getTerrainEffects() {
        const terrain = $("input:checkbox[name='terrain']:checked").val()
        const isGrounded = this.isPokeGrounded()
        switch (terrain){
            case "Electric":
                if (!this.status === "Asleep" && isGrounded){
                    this.field_status.prop("disabled", true)
                } else {
                    this.field_status.prop("disabled", false)
                }
                break;
            case "Misty":
                if (this.status === "Healthy" && isGrounded){
                    this.field_status.prop("disabled", true)
                } else {
                    this.field_status.prop("disabled", false)
                }
                break;
            default:
                this.field_status.prop("disabled", false)
        }
    }
    itemChange() {
        switch(this.item){
            case "Flame Orb":
                this.status = "Burned"
                break;
            case "Toxic Orb":
                this.status = "Badly Poisoned"
                break;
            default:
                this.stats.showBerryHP()
            case "":
                if (this.status === this.lastManualStatus){
                    return
                }   
                this.status = this.lastManualStatus          
        }
        calcGateway.calcTrigger()
    }
    colorCoding() {
        if (!this.box.isColorCodingOn) return
        var speCheck = document.getElementById("cc-spe-border").checked;
        var damageCheck = document.getElementById("cc-damage-color").checked;
        if (!speCheck && !damageCheck) {
            return
        }
        const foe = P2.createPokemon()
        for (var index in this.box.idToNode) {
            const mon = this.createPokemonFromSavedData(this.trainer.mons[index])
            const res = calcGateway.performCalculations(mon, foe)[0]

            if (speCheck) {
                var fastestSide = res.fastestSide ? res.fastestSide == 1 ? "S" : "T" : "F";
                this.box.idToNode[index].className = ""
                this.box.idToNode[index].classList.add("mon-speed-"+fastestSide)
            }
            if (!damageCheck) continue
            var p1LD = (res.highLowRoll[0][1] / foe.curHP()) * 100
            var p1HD = (res.highLowRoll[0][2] / foe.curHP()) * 100
            var p2LD = (res.highLowRoll[1][1] / mon.curHP()) * 100
            var p2HD = (res.highLowRoll[1][2] / mon.curHP()) * 100
            // check walling
            if (p2HD < 25 && p1HD > p2HD){
                if (p1HD > 50){
                    this.box.idToNode[index].classList.add("mon-dmg-HC")
                } else {
                    this.box.idToNode[index].classList.add("mon-dmg-W")
                }
                continue
            }

            var total = ""
            if (p1LD > 100) {
                total = "1"
            } else if (p1HD > 100) {
                total = "2"
            }
            if (p2LD > 100) {
                total += "4"
            } else if (p2HD > 100) {
                total += "3"
            }
            this.box.idToNode[index].classList.add("mon-dmg-" + total)
        }
    }
    createPokemonFromSavedData(poke){
		var set = Object.assign(structuredClone(pokedex[poke.species]), structuredClone(poke))
		var ivs = {};
		var evs = {};
		for (var i = 0; i < LEGACY_STATS[gen].length; i++) {
			var legacyStat = LEGACY_STATS[gen][i];
			var stat = legacyStatToStat(legacyStat);
            set.bs[stat] = set.bs[legacyStat]
			ivs[stat] = (gen >= 3 && set.ivs && typeof set.ivs[legacyStat] !== "undefined") ? set.ivs[legacyStat] : 31;
			evs[stat] = (set.evs && typeof set.evs[legacyStat] !== "undefined") ? set.evs[legacyStat] : 0;
		}
		var moveNames = set.moves;
		var pokemonMoves = [];
        set.item = (items.includes(set.item) && typeof set.item !== "undefined" && (set.item === "Eviolite" ||
         set.item.indexOf("ite") < 0) ? set.item : "")
		for (var i = 0; i < 4; i++) {
			var moveName = moveNames[i];
			pokemonMoves.push(new calc.Move(gen, moves[moveName] ? moveName : "(No Move)", 
				{ ability: set.ability, innates: set.innates , item: set.item }));
		}
		var abiOn = false;
		var status = "Healthy"
		if ($('#cd-intimidate').prop("checked") && set.ability === "Intimidate") abiOn = true;
		if ($('#cd-guts').prop("checked") && set.ability === "Guts") status = "Burned";
		return new calc.Pokemon(gen, set.species, {
			level: set.level,
			ability: set.ability,
			innates: set.innates,
			abilityOn: abiOn,
			innatesOn: [false,false,false],
			status: CALC_STATUS[status],
			item: set.item,
			nature: set.nature,
			ivs: ivs,
			evs: evs,
			moves: pokemonMoves,
            overrides: {
				baseStats: set.bs,
				types: set.types,
			}
		});
    }
}

class PlayerPanel extends Panel{
    constructor(panel){
        super(panel)
        this.trainerID = 0;
        this.trainerName = "Player"
        this.trainer = setdex[this.trainerID]
        this.lastTrainerID = 0
    }
}

class TrainerPanel extends Panel{
    constructor(panel){
        super(panel)
    }
}