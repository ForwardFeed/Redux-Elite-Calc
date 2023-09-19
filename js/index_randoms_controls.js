

function displayDamageHits(damage) {
	// Fixed Damage
	if (typeof damage === 'number') return damage;
	// Standard Damage
	if (damage.length > 2) return damage.join(', ');
	// Fixed Parental Bond Damage
	if (typeof damage[0] === 'number' && typeof damage[1] === 'number') {
		return '1st Hit: ' + damage[0] + '; 2nd Hit: ' + damage[1];
	}
	// Parental Bond Damage
	return '1st Hit: ' + damage[0].join(', ') + '; 2nd Hit: ' + damage[1].join(', ');
}




function saveTrigger(ev) {
	var isUser = ev.originalEvent ? ev.originalEvent.isTrusted : false;
	if (isUser || ev.added) { //ev.added is for the moves buttons
		$('#save-change').attr("hidden", false);
	}
}


$(document).ready(function () {
	$(".save-trigger").bind("change keyup", saveTrigger);
	$(".ic").click(saveTrigger);
	
});