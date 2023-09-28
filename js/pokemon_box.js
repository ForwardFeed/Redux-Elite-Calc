class BasicBox{
    constructor(panel, props){
        this.panel = panel
        this.props = props
        this.field_row1 = panel.find(".row1")
        this.field_row2= panel.find(".row2")
        this.mainBox = panel.find(".main")
        this.idToNode = []
    }
    get monRow1(){return this.field_row1.children().eq(0).attr("data-id")}
    get monRow2(){return this.field_row2.children().eq(0).attr("data-id")}
    get rowActiveMon(){
        return this.panel.find('[data-id="'+ this.props.select +'"]').parent().hasClass("row1") ? 1 : 2 
    }
    fullRebox(){
        this.idToNode = []
        const pokeList = this.props.trainer.mons
        this.field_row1.text("")
        this.field_row2.text("")

        if (pokeList.constructor.name !== "Array") {
            this.addBoxed(pokeList)
            return
        }
        
        for (const index in pokeList){
            var poke = pokeList[index]
            this.addBoxed(poke, index)
        }
    }
    addBoxed(poke2box, id) {
        if (!poke2box) return
        var newPoke = document.createElement("img");
        newPoke.src = getSrcImgPokemon(poke2box.species);
        newPoke.dataset.title = poke2box.species + " : " + this.props.trainerName;
        newPoke.dataset.id = poke2box.species + ";" + this.props.trainerName + ";" + id;
        newPoke.addEventListener("dragstart", dragstart_handler);
        newPoke.addEventListener("click", ()=>{this.iconMonClicked(id, newPoke.dataset.id)});
        this.mainBox.append(newPoke);
        this.idToNode.push(newPoke)
        return newPoke
    }
    iconMonClicked(pokeID, selection){
        if (this.props.pokeID != pokeID){
            this.props.select = selection
        }
    }
    changeTrainer() {
        this.fullRebox()
    }
    reboxToMain() {
        for (const img of this.idToNode){
            this.mainBox.append(img)
        }
    }
}
/* Box for P1*/
class PlayerBox extends BasicBox{
    constructor(panel, props){
        super(panel, props)
        this.field_trash = panel.find('.trashzone')
        this.btn_remove = panel.find('#trash-pok')
        this.btn_clearAll = panel.find('#clearSets')
        this.btn_show_cc = panel.find('.show-cc')
        this.btn_hide_cc = panel.find('.hide-cc')
        this.btn_explanation = panel.find('.info-cc')
        this.field_explanation = panel.find('.info-cc-field')
        this.isColorCodingOn = false;
        this.setup()
        
    }
    setup(){
        $('#rebox').click(()=>{this.reboxToMain()});
        $('#trash-pok').click(()=>{this.trashPokemon()});
        $('#clearSets').click(()=>{this.clearAll()});
        $('#save-change').click(()=>{this.saveTrainerPokemon()});
        this.btn_show_cc.click(()=>{
            this.btn_hide_cc.show()
            this.btn_explanation.show()
            this.btn_show_cc.hide()
            this.isColorCodingOn = true
            this.props.colorCoding()
        })
        this.btn_hide_cc.click(()=>{
            this.btn_show_cc.show()
            this.btn_hide_cc.hide()
            this.btn_explanation.hide()
            this.field_explanation.hide()
            this.isColorCodingOn = false
            for (const pokeImg of this.idToNode){
                pokeImg.className = "";
            }
        })
        this.btn_explanation.click(()=>{
            this.field_explanation.toggle("hidden")
        })
    }
    trashPokemon() {
        const maybeMultiple = this.field_trash.children();
        if (maybeMultiple.length == 0) {
            return; //nothing to delete
        }
        const numberPKM = maybeMultiple.length > 1 ? maybeMultiple.length + " Pokemon(s)" : "this Pokemon";
        if (!confirm("do you really want to remove " + numberPKM + "?")) {
            return;
        }
        const length = maybeMultiple.length;
        for (var i = 0; i < length; i++) {
            const pokeTrashed = maybeMultiple[i];
            const pokeID = +(pokeTrashed.getAttribute("data-id").split(";")[2]);
            this.idToNode[pokeID].parentNode.removeChild(this.idToNode[pokeID])
            this.idToNode.splice(pokeID, 1)
            this.props.trainer.mons.splice(pokeID, 1)
        }
        this.field_trash.text("");
        localStorage.setItem(GameName + "playerdex", JSON.stringify(this.props.trainer.mons));
        // and then click to another pokemon, else its gonna make things crash
        if (this.idToNode.length < 1) {
            var select = $(this).closest(".panel").find("input.selector")
            selectFirstPlayerAvailable(select)
        } else {
            this.idToNode[0].click()
        }
    }
    clearAll(){
        if (!confirm("This cannot be undone, are you sure?")) {
            return;
        }
        for (const img of this.idToNode){
            img.remove()
        }

        this.props.trainer.mons = [];
        this.idToNode = []
        localStorage.setItem(GameName + "playerdex", JSON.stringify(this.props.trainer.mons));
        $('#pl-any-selection').checked = true; // first check any pokemon
        this.props.select = getPlayerOptions()[~~(Math.random() * 1000) ].id //just to add a pseudo random thing x)
    }
    saveTrainerPokemon() {
        var pokeName = this.props.pokemonName;
        var trainerName = this.props.trainerName|| null
        var pokeID = this.props.pokeID || 0;
        var poke = addSets(ExportPokemon(this.props));
        var innates = [];
        for(var i = 0; i < 3; i++){
            innates.push(this.props.innates[i]);
        }
        poke[0].innates = innates;
        if (!trainerName) dispatchPlayerMon(poke);
        this.props.trainer.mons[pokeID] = poke[0];
        setHighestLevelMon();
        localStorage.setItem(GameName + "playerdex", JSON.stringify(window.setdex[0].mons));
    
        $("#save-change").prop("hidden", true);
        if (!trainerName) return;
        var boxedImg = this.idToNode[pokeID];
        boxedImg.src = getSrcImgPokemon(pokeName);
        boxedImg.dataset.id = pokeName + ";" + trainerName + ";" + pokeID;
    }
}

/*Box for P2*/
class TrainerBox extends BasicBox{
    constructor(panel, props){
        super(panel, props)
        this.field_prev = panel.find('#previous-trainer')
        this.field_next = panel.find('#next-trainer')
        this.field_reset = panel.find('#reset-trainer')
        this.field_rematch = panel.find('#rematches')
        this.field_alternative = panel.find('#alternatives')
        this.field_doubles = panel.find('#opt-doubles')
        this.field_selected;
        //this.field_notes = 

        this.setup()
    }
    setup() {
        this.field_prev.click(()=>{
            this.selectTrainer(Math.max(+this.props.trainerID - 1,1))
        })
        this.field_next.click(()=>{
            this.selectTrainer(Math.min(+this.props.trainerID + 1,setdex.length))
        })  
        this.field_reset.click(()=>{
            if (confirm("This will delete all your pokemons and make you going back to the first trainer, this cannot be undone")) {
                setdex[0].mons = [];
                localStorage.removeItem(GameName + "playerdex")
                const boxes = this.panel.find(".box-poke")
                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].innerText = "";
                }
                P2.trainerID = -1; //anything but 1 will trigger a changed trainer
                this.selectTrainer(1);
            }
        })
    }
    // #region Set & Get
    get selected(){return this.field_selected}
    set selected(node){
        if(this.field_selected) this.field_selected.removeClass("selectedButton")
        this.field_selected = node
        this.field_selected.addClass("selectedButton")
    }
    // #endregion
    changeTrainer() {
        this.fullRebox()
        this.rematchAlternativeShow()
        this.doubleShow()
    }
    selectTrainer(id) {
        this.props.select = id
    }
    iconMonClicked(pokeID, selection){
        if (this.props.pokeID != pokeID){
            this.props.select = selection
            if (+localStorage.getItem("p-notes") && this.props.trainerID != 0) restorePNotes(this.props.select);
        }
    }
    //flag => "mons", "rem", "insane, "alt"
    trainerTeamChange(flag, id){
        if (!flag) return
        const trn = this.props.trainer
        switch(flag){
            case "alt":
                // if we're in a rematch, put it down
                if (trn.swp){
                    trn.mons = trn.swp;
                    delete trn.swp;
                    delete trn.flagid
                }
                // if we change from the base one, we need to save it in the trainer swap
                if (!trn.trnswp){
                    trn.trnswp = {
                        trn : trn.trn,
                        mons : trn.mons,
                        rem : trn.rem,
                    }
                }
                // then we can change all the trainer settings to the currentrainer
                // like taking the fork from the little kitchen inside the kitchen to replace the fork of the kitchen
                // Jeez i plain my future self to have to understand my current code, it's very wonderlandish // Actually the comments help
                // -1 is if the trainer want to use the 'base' one
                if (id == -1){
                    trn.trn = trn.trnswp.trn
                    trn.mons = trn.trnswp.mons
                    trn.rem = trn.trnswp.rem
                    delete trn.trnswp
                    delete trn.flagid
                } else {
                    var alt = trn.alt[id];
                    trn.trn = alt.trn;
                    trn.mons = alt.mons;
                    trn.rem = alt.rem;
                    trn.flagid = flag + ";" + id;
                    this.props.trainerName = alt.trn
                }
                break;
            case "rem":
                if (!trn.swp){
                    trn.swp = trn.mons;
                }
                trn.mons = trn[flag][id];
                trn.flagid = flag + ";" + id
                break;
            case "insane":
                if (!trn.swp){
                    trn.swp = trn.mons;
                }
                trn.mons = trn[flag];
                trn.flagid = flag + ";" + id
                break;
            case "mons":
                if (trn.swp){
                    trn.mons = trn.swp;
                    delete trn.swp;
                    delete trn.flagid;
                }
                break;
            case "doubles":
                if (id == -1){
                    trn.mons = trn.swp;
                    delete trn.swp;
                    $('#singles-format').prop('checked', true)
                    $('#singles-format').click()
                } else {
                    if (!trn.swp){
                        trn.swp = structuredClone(trn.mons);
                    }
                    const next_trn = setdex[this.props.trainerID + (id?1:-1)]
                    if (trn.mons.length > 3){
                        trn.mons.splice(3)
                    }
                    if (next_trn.mons.length > 3){
                        next_trn.mons.splice(3)
                    }
                    trn.mons = trn.mons.concat(next_trn.mons)
                    $('#doubles-format').prop('checked', true)
                    $('#doubles-format').click()
                }
                break;
                
            default:
                return
        }
	    this.fullRebox()
    }
    generateButton(text, flag, id){
        const newBtn = document.createElement("button");
        newBtn.innerText = text;
        if (!isNaN(id)) newBtn.dataset.id = id
        newBtn.onclick = (ev)=>{
            this.selected = $(ev.target)
            this.trainerTeamChange(flag, ev.target.dataset.id)
            this.props.select = this.monRow1
        };
        return newBtn
    }
    rematchAlternativeShow(){
        const trainer = this.props.trainer
        if (!trainer) return
        //rematch
        if (trainer.rem){
            this.field_rematch.show()
            this.field_rematch.text("Rematches :")
            const baseBtn = this.generateButton("Base", "mons")
            this.field_rematch.append(baseBtn)
            this.selected = $(baseBtn); 
            var rems = trainer.rem
            for(var i = 0; i < rems.length; i++){
                this.field_rematch.append(this.generateButton(i + 1, "rem", i))
            }
        } else{
            this.field_rematch.hide()
        }
        // alternative or insane
        if (!trainer.insane && !trainer.alt){
            this.field_alternative.hide()
            return
        }
        this.field_alternative.show()
        this.field_alternative.text("Alternatives :")
        if(trainer.insane){
            const baseBtn = this.generateButton("Base", "mons")
            this.field_alternative.append(baseBtn)
            this.selected = $(baseBtn); 
            this.field_alternative.append(this.generateButton("Elite", "insane"))
        }
        
        if (trainer.alt){
            const base = this.generateButton(this.props.trainerName, "alt", -1)
            this.selected = $(base)
            this.field_alternative.append(base)
            for(var i = 0; i < trainer.alt.length; i++){
                this.field_alternative.append(this.generateButton(this.props.trainer.alt[i].trn, "alt", i))
            }
            
        }
    }
    doubleShow(){
        const trainer = this.props.trainer
        if (!trainer) return
        //double trainer
        if (trainer.double || trainer.forc_double){
            $('#doubles-format').prop('checked', true)
            $('#doubles-format').click()
        }
        //as far i know, you can't be in doublemode and having optionnal double
        //optionnal double
        if (trainer.opt_double) {
            this.field_doubles.show()
            // double with previous
            this.field_doubles.text("Opt. Doubles :")
            const baseBtn = this.generateButton("None", "doubles", -1)
            this.field_doubles.append(baseBtn)
            this.selected = $(baseBtn);
            if (trainer.opt_double[0]){
                const opt_double = this.generateButton("With " + setdex[this.props.trainerID - 1].trn, "doubles", 0)
                this.field_doubles.append(opt_double)
            }
            // double with next
            if(trainer.opt_double[1]){
                const opt_double = this.generateButton("With " + setdex[this.props.trainerID - 1].trn, "doubles", 1)
                this.field_doubles.append(opt_double)
            }
        } else {
            this.field_doubles.hide()
        }
    }
}