// JavaScript Document

function VoyageScriptingButtonClick() {
	
	if (document.getElementById("scripting-button").className == 'default-btn'){
		
		document.getElementById("voyage-scripting").style.display = 'block';
		document.getElementById("voyage-leveldesign").style.display = 'none';
	
		document.getElementById("scripting-button").className = 'default-btn-active';
		document.getElementById("ld-button").className = 'default-btn';
	}
}

function VoyageLevelButtonClick() {
	
	if (document.getElementById("ld-button").className == 'default-btn'){
	
		document.getElementById("voyage-scripting").style.display = 'none';
		document.getElementById("voyage-leveldesign").style.display = 'block';

		document.getElementById("scripting-button").className = 'default-btn';
		document.getElementById("ld-button").className = 'default-btn-active';
	}
	
}