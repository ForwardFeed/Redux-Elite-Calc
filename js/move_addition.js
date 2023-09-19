/*function calcMedian(arr) {
    if (!arr.length) return arr
    var half = Math.floor(arr.length / 2);
    arr.sort(function(a, b) { return a - b;});

    if (arr.length % 2) {
        return arr[half];
    } else {
        return (arr[half] + arr[half]) / 2.0;
    }
}*/

class MoveAddition{
    constructor(){
        this.low = 0
        this.high = 0
        this.textDiv = document.getElementById("calcadd-text");
        this.rsltDiv = document.getElementById("calcadd-result");
        this.setup()
    }
    setup(){
        $('#calcadd, #close-calcadd-box').click(()=>{this.toggle()});
        $('#calcadd-reset').click(()=>{this.reset()});
        $('#calcadd-add').click(()=>{this.add()});
    }
    reset(){
        this.low = 0
        this.high = 0
        this.textDiv.innerText = "";
        this.rsltDiv.innerText = "0 - 0 - 0%";
    }
    toggle(){
        var frame = document.getElementById("calcadd-box-frame");
        frame.toggleAttribute("hidden")
        /*var state = frame.getAttribute("hidden") === "" ? false : true;
        if (state){
    
        } else {
            
        }*/
    }
    add(){
        const selected = calcGateway.display.selected
        this.low += selected.lowDamPercent
        this.high += selected.highDamPercent
        this.textDiv.innerHTML += (this.textDiv.innerText ? " <em>Into</em> <b>" : "<b>") + ( selected.props.attacker.name + "</b>: " + 
            selected.props.move.name );
        this.rsltDiv.innerText = this.low + " - " + this.high + " %";
    }
}