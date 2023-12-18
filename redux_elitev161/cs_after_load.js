
$(document).ready(function(){
    let abilityThatModifiesStats = function (){
        if (this.hasAbilityActive('Violent Rush') && !this.pokemon.violentRush) {
            this.stats.rawAT = this.stats.at;
            this.stats.at = Math.floor(this.stats.at * 1.2);
            this.stats.rawSP = this.stats.sp;
            this.stats.sp = Math.floor(this.stats.sp * 1.5);
            this.pokemon.violentRush = true
        } else if (this.pokemon.violentRush){
            this.stats.AT = this.stats.rawAT;
            this.stats.sp = this.stats.rawSP;
            this.pokemon.violentRush = false;
        }

        if (this.hasAbility('Feline Prowess') && !this.pokemon.felineProwess) {
            this.stats.rawSA = this.stats.sa;
            this.stats.sa = Math.floor(this.stats.sa * 2);
            this.pokemon.felineProwess = true;
        } else if (this.pokemon.felineProwess){
            this.pokemon.felineProwess = false;
            this.stats.sa = this.stats.rawSA;
        }
        if (this.hasAbility('Lead Coat') && !this.pokemon.leadCoat) {
            this.stats.rawDF = this.stats.df;
            this.stats.df = Math.floor(this.stats.df * 1.3);
            this.stats.rawSP = this.stats.sp;
            this.stats.sp = Math.floor(this.stats.sp * 0.9);
            this.pokemon.leadCoat = true;
        } else if (this.pokemon.leadCoat){
            this.stats.df = this.stats.rawDF;
            this.stats.sp = this.stats.rawSP;
            this.pokemon.leadCoat = false;
        }
    }
    Panel.prototype.abilityThatModifiesStats = abilityThatModifiesStats;
});