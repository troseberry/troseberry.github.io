// JavaScript Document

function GGKTechDesignButtonClick() {
	if (document.getElementById("tech-button").className == 'default-btn'){
		
		document.getElementById("ggk-techdesign").style.display = 'block';
		document.getElementById("ggk-leadership").style.display = 'none';
	
		document.getElementById("tech-button").className = 'default-btn-active';
		document.getElementById("lead-button").className = 'default-btn';
	}
}

function GGkLeadershipButtonClick() {
	if (document.getElementById("lead-button").className == 'default-btn'){
	
		document.getElementById("ggk-techdesign").style.display = 'none';
		document.getElementById("ggk-leadership").style.display = 'block';

		document.getElementById("tech-button").className = 'default-btn';
		document.getElementById("lead-button").className = 'default-btn-active';
	}
}