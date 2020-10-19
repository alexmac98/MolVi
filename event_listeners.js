var water = MOLECULES["WATER"];
var ethanol = MOLECULES["ETHANOL"];
var caffeine = MOLECULES["CAFFEINE"];
var iso_alc = MOLECULES["ISOPROPYL_ALCOHOL"];
var trinit = MOLECULES["TRINITROTOLUENE"];

var scroll_timer = -1;

function scroll_finished(){
	wheeling = false;
}

function scrolling(){
	if(scroll_timer != -1){
		clearTimeout(scroll_timer);
	}
	wheeling = true;
	scroll_timer = window.setTimeout("scroll_finished()", 500);
}

function setEventListeners(){
	var canvas = document.getElementById("my-canvas");
	
	function getMousePos(canvas, event){
		var rect = canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		}
	}


	canvas.addEventListener("wheel", function(event){
		scrolling();
		var mouse = getMousePos(canvas, event);
		// convert canvas mouse coords in webgl canvas coords (x,y = [-1..1]);
		var x = (mouse.x - canvas.width*0.5) / (canvas.width*0.5);
		var y = (mouse.y - canvas.height*0.5)/ (canvas.height*0.5);
		if(event.deltaY < 0){
			if (globalTz < 2){
				globalTz += 0.1;
				globalTx -= x*0.05;
				globalTy += y*0.05;
			}
		}else{
			if(globalTz > -10){
				globalTz -= 0.1;
				globalTx += x*0.05;
				globalTy -= y*0.05;
			}
		}
	});

	canvas.addEventListener("mouseenter", function(event){
		disableScrolling();
	});
	canvas.addEventListener("mouseout", function(){
		enableScrolling();
	});

	function disableScrolling(){
	    var x = window.scrollX;
	    var y = window.scrollY;
	    window.onscroll=function()
	    { 
	    	window.scrollTo(x, y);
	    };
	}

	function enableScrolling(){
	    window.onscroll=function(){};
	}

	
	var mx, my;
	canvas.addEventListener('mousedown', function(event) {
		mx = event.clientX; 
		my = event.clientY; 
		mouse_down = true; 
		globalRotationXX_ON = 1;
		globalRotationYY_ON = 1;
		
	});
	canvas.addEventListener('mouseup', function() { 
		mouse_down = false;
		globalRotationXX_ON = 0;
		globalRotationYY_ON = 0;
	});

	canvas.addEventListener('mousemove', function(event) { 
	  	if (!mouse_down) {
	    	return;
	  	}
	  	var cur = convert_coords(event.clientX, event.clientY);
	  	var prev = convert_coords(mx, my);

	  	var delta_x = cur.x - prev.x;
	  	var delta_y = cur.y - prev.y;

	  	if(delta_y > 0){
	  		globalRotationXX_DIR = 1;
	  	}else{
	  		globalRotationXX_DIR = -1;
	  	}

	  	if(delta_x > 0){
	  		globalRotationYY_DIR = 1;
	  	}else{
	  		globalRotationYY_DIR = -1;
	  	}

	  	globalRotationXX_SPEED = Math.abs(200*delta_y);
	  	globalRotationYY_SPEED = Math.abs(200*delta_x); 

	  	globalAngleXX += delta_x; 
		globalAngleYY += delta_y;

		mx = event.clientX;
		my = event.clientY;

	});

	function convert_coords(wx, wy){
		return {
			x: (wx - canvas.width*0.5) / (canvas.width*0.5),
			y: (wy - canvas.height*0.5) / (canvas.height*0.5)
		}
	}


	function reset_zooming(){
		globalTz = -2,5;
		globalTx = 0.0;
		globalTy = 0.0;
	}


	var btn_water = document.getElementById("btn-water");
	var btn_ethanol = document.getElementById("btn-ethanol");
	var btn_caffeine = document.getElementById("btn-caffeine");
	var btn_iso_alc = document.getElementById("btn-iso_alc");
	var btn_trinit = document.getElementById("btn-trinit");

	btn_water.onclick = function(){
		document.getElementById("name").innerHTML = water["name"];
		document.getElementById("formule").innerHTML = water["makeup"];
		document.getElementById("description").innerHTML = water["description"];
		document.getElementById("link").innerHTML = "<a href='"+ water["link"]+"' target='_blank'>More Info</a>";
		molecule = water;
		molecule_chosen = true;
		reset_zooming();
	}

	btn_ethanol.onclick = function(){
		document.getElementById("name").innerHTML = ethanol["name"];
		document.getElementById("formule").innerHTML = ethanol["makeup"];
		document.getElementById("description").innerHTML = ethanol["description"];
		document.getElementById("link").innerHTML = "<a href='"+ ethanol["link"]+"' target='_blank'>More Info</a>";
		molecule = ethanol;
		molecule_chosen = true;
		reset_zooming();


	}

	btn_caffeine.onclick = function(){
		document.getElementById("name").innerHTML = caffeine["name"];
		document.getElementById("formule").innerHTML = caffeine["makeup"];
		document.getElementById("description").innerHTML = caffeine["description"];
		document.getElementById("link").innerHTML = "<a href='"+ caffeine["link"]+"' target='_blank'>More Info</a>";
		molecule = caffeine;
		molecule_chosen = true;
		reset_zooming();



	}

	btn_iso_alc.onclick = function(){
		document.getElementById("name").innerHTML = iso_alc["name"];
		document.getElementById("formule").innerHTML = iso_alc["makeup"];
		document.getElementById("description").innerHTML = iso_alc["description"];
		document.getElementById("link").innerHTML = "<a href='"+ iso_alc["link"]+"' target='_blank'>More Info</a>";
		molecule = iso_alc;
		molecule_chosen = true;
		reset_zooming();


	}

	btn_trinit.onclick = function(){
		document.getElementById("name").innerHTML = trinit["name"];
		document.getElementById("formule").innerHTML = trinit["makeup"];
		document.getElementById("description").innerHTML = trinit["description"];
		document.getElementById("link").innerHTML = "<a href='"+ trinit["link"]+"' target='_blank'>More Info</a>";
		molecule = trinit;
		molecule_chosen = true;
		reset_zooming();
	}



	/*
	ATOMS
	*/


	var btn_hydrogen = document.getElementById("btn-hydrogen");
	var btn_carbon = document.getElementById("btn-carbon");
	var btn_nitrogen = document.getElementById("btn-nitrogen");
	var btn_oxygen = document.getElementById("btn-oxygen");
	var btn_sodium = document.getElementById("btn-sodium");
	var btn_potassium = document.getElementById("btn-potassium");
	var btn_calcium = document.getElementById("btn-calcium");


	var hydrogen = ATOMS["HYDROGEN"];
	var carbon = ATOMS["CARBON"];
	var nitrogen = ATOMS["NITROGEN"];
	var oxygen = ATOMS["OXYGEN"];
	var sodium = ATOMS["SODIUM"];
	var potassium = ATOMS["POTASSIUM"];
    var calcium = ATOMS["CALCIUM"];

	btn_hydrogen.onclick = function(){
		document.getElementById("name").innerHTML = hydrogen["fullName"];
		document.getElementById("formule").innerHTML = hydrogen["shortName"];
		document.getElementById("description").innerHTML = hydrogen["description"];
		document.getElementById("link").innerHTML = "<a href='"+ hydrogen["link"]+"' target='_blank'>More Info</a>";
		molecule = hydrogen;
		molecule_chosen = true;
		reset_zooming();

	}

	btn_carbon.onclick = function(){
		document.getElementById("name").innerHTML = carbon["fullName"];
		document.getElementById("formule").innerHTML = carbon["shortName"];
		document.getElementById("description").innerHTML = carbon["description"];
		document.getElementById("link").innerHTML = "<a href='"+ carbon["link"]+"' target='_blank'>More Info</a>";
		molecule = carbon;
		molecule_chosen = true;
		reset_zooming();

	}

	btn_nitrogen.onclick = function(){
		document.getElementById("name").innerHTML = nitrogen["fullName"];
		document.getElementById("formule").innerHTML = nitrogen["shortName"];
		document.getElementById("description").innerHTML = nitrogen["description"];
		document.getElementById("link").innerHTML = "<a href='"+ nitrogen["link"]+"' target='_blank'>More Info</a>";
		molecule = nitrogen;
		molecule_chosen = true;
		reset_zooming();

	}

	btn_oxygen.onclick = function(){
		document.getElementById("name").innerHTML = oxygen["fullName"];
		document.getElementById("formule").innerHTML = oxygen["shortName"];
		document.getElementById("description").innerHTML = oxygen["description"];
		document.getElementById("link").innerHTML = "<a href='"+ oxygen["link"]+"' target='_blank'>More Info</a>";
		molecule = oxygen;
		molecule_chosen = true;
		reset_zooming();
	}

	btn_sodium.onclick = function(){
		document.getElementById("name").innerHTML = sodium["fullName"];
		document.getElementById("formule").innerHTML = sodium["shortName"];
		document.getElementById("description").innerHTML = sodium["description"];
		document.getElementById("link").innerHTML = "<a href='"+ sodium["link"]+"' target='_blank'>More Info</a>";
		molecule = sodium;
		molecule_chosen = true;
		reset_zooming();
	}

	btn_potassium.onclick = function(){
		document.getElementById("name").innerHTML = potassium["fullName"];
		document.getElementById("formule").innerHTML = potassium["shortName"];
		document.getElementById("description").innerHTML = potassium["description"];
		document.getElementById("link").innerHTML = "<a href='"+ potassium["link"]+"' target='_blank'>More Info</a>";
		molecule = potassium;
		molecule_chosen = true;
		reset_zooming();
	}

	btn_calcium.onclick = function(){
		document.getElementById("name").innerHTML = calcium["fullName"];
		document.getElementById("formule").innerHTML = calcium["shortName"];
		document.getElementById("description").innerHTML = calcium["description"];
		document.getElementById("link").innerHTML = "<a href='"+ calcium["link"]+"' target='_blank'>More Info</a>";
		molecule = calcium;
		molecule_chosen = true;
		reset_zooming();
	}





}
