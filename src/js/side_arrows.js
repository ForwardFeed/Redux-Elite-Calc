function sideArrowToggle() {
	for (panel of document.getElementsByClassName("side-panel")) {
		if (+localStorage.getItem("sidearrow")) {
			panel.removeAttribute("hidden")
			setupSideCollapsers()
		} else {
			panel.setAttribute("hidden", true)
		}
		
	}

}

function sideCollapsersCorrection(ev) {
	if (ev) {
		var arrow = ev.target.children[0] || ev.target.parentNode.children[0];
		collapseArrow(arrow);
	}
	var node = this;
	if (node.tagName != "BUTTON") {
		node = this.target.parentNode;
	}
	var prev = node.prevEl;
	var offset = node.sisterEl.offsetTop;
	var relativeHeight = node.parentNode.offsetTop;
	if (prev) {
		//since the position is absolute, this will prevent from eating fellows.
		var prevLowPos = prev.offsetTop + prev.offsetHeight; - relativeHeight;
		if (offset == 0) {// collapsed
			offset = prevLowPos;
		} else {// standing
			offset = offset - relativeHeight;
			if (offset < prevLowPos) {
				offset = prevLowPos;
			}
		}
	} else {
		if (offset == 0) {// collapsed
			offset = node.offsetTop;
		} else {// standing
			offset = offset - relativeHeight;
		}
	}
	node.style.top = offset + "px"
	//propagate to next buttons
	if (node.nextEl) {
		node.nextEl.onclick()
	}
}
function collapseArrow(arrow) {
	var arrBtn = arrow.parentNode;
	var target = arrBtn.getAttribute("data-set");
	var divs = document.getElementsByClassName(target)
	for (var index = 0; index < divs.length; index++) {
		divs[index].toggleAttribute("hidden");

	}
	if (arrBtn.classList.contains("l-side-button")) {
		if (arrow.classList.contains("arrowdown")) {
			arrow.classList.remove("arrowdown");
			arrow.classList.add("arrowright");
		} else {
			arrow.classList.remove("arrowright");
			arrow.classList.add("arrowdown");
		}
	}
	else if (arrBtn.classList.contains("r-side-button")) {
		if (arrow.classList.contains("arrowdown")) {
			arrow.classList.remove("arrowdown");
			arrow.classList.add("arrowleft");
		} else {
			arrow.classList.remove("arrowleft");
			arrow.classList.add("arrowdown");
		}
	}
}

function setupSideCollapsers() {
	var applyF = function (btns) {
		for (var i = 0; i < btns.length; i++) {
			var btn = btns[i];
			btn.cum = btn.offsetHeight;
			btn.sisterEl = document.getElementsByClassName(btn.getAttribute("data-set"))[0];
			btn.prevEl = btns[i - 1] || null;
			if (btn.prevEl) {
				btn.cum += btn.prevEl.cum
			} else {
				btn.cum = 0;
			}
			btn.nextEl = btns[i + 1] || null;
			btn.onclick = sideCollapsersCorrection
		}
	}
	var leftBtns = document.getElementsByClassName("l-side-button");
	var rigtBtns = document.getElementsByClassName("r-side-button");
	applyF(leftBtns);
	applyF(rigtBtns);
	/*
		readjust the left buttons
		Because i couldn't find a proper way to do it with css
	*/
	for (var i = 0; i < leftBtns.length; i++) {
		leftBtns[i].style.left = "-" + leftBtns[i].offsetWidth + "px";

	}
	leftBtns[0].onclick();
	rigtBtns[0].onclick();
}



$(document).ready(function(){
    if (+localStorage.getItem("sidearrow")) {
        document.getElementById("show-arrows").checked = true;
		setupSideCollapsers();
		sideArrowToggle();
	}
});