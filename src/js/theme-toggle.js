
function themeSelection(theme){
	if (typeof theme === "string") {
		theme = theme;
		document.getElementById(theme).checked = true;
	} else {
		var theme = document.querySelector("input[name=\"theme\"]:checked").id
	}
	document.getElementById('dark-theme-styles').disabled = true;
	document.getElementById('light-theme-styles').disabled = true;
	document.getElementById('forest-theme-styles').disabled = true;
	document.getElementById('blahaj-theme-styles').disabled = true;
	document.getElementById(theme + '-styles').disabled = false;
	localStorage.setItem("theme", theme)
	
}
var theme = localStorage.getItem("theme")
themeSelection(theme)