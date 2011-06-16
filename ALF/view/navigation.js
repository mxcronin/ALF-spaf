var Navigation = (function(){


	var controller = new NavigationController();
	var topmenu;
	
	var init = false;
	
	this.__defineGetter__("init",function() { return init});
	this.__defineSetter__("init",function(val) {init=val; initnav();});
	
	
	function addEvent(navitem, slidenum) {
	   //console.log("Navigation:"  +  model.slides);
	   navitem.element = model.sections[slidenum];
	   navitem.addEventListener('click', controller.gotoslide,false);
       navitem.addEventListener('touchstart', react,false);
       navitem.addEventListener('touchend', dereact,false);
	}
	function react(e) {
	    if (e.target.tagName == 'LI') {
	       addClass(e.target, 'react');
	    }
	    if (e.target.tagName != 'LI') {
	       addClass(e.target.parentNode, 'react');
	    }
	}
	function dereact(e) {
	    if (e.target.tagName == 'LI') {
	       removeClass(e.target, 'react');
	    }
	    if (e.target.tagName != 'LI') {
	       removeClass(e.target.parentNode, 'react');
	    }
	}
	function toggleopen() {
	    addClass(topmenu, 'open');
	    if(topmenu.className != 'open') {
	        addClass(topmenu, 'topmenu open');
	    }
	}
	
	function initnav() { 
	    console.log("Navigation: init");
	    /*navScroll = new iScroll('topnav', {
	    		snap: 'li',
	    		momentum: true,
	    		hScrollbar: false,
	    		vScrollbar: false
	    	 });*/
	    
	    topmenu = document.getElementById("topnav");
	    var items = topmenu.getElementsByTagName("li");
	    var navitem;
	    model.menuItems = items;
	    
	    for(var i = 0; i<items.length; i++) {
	         navitem = items[i];
	         addEvent(navitem, i);
	    }
	    //console.log('Nav view ' + model.slides[]);
	    controller.autogotoslide(model.slides[1]);
	    model.addEventListener('opennavigation', toggleopen, false);
	 }
	 
	 function addClass(element,className) {
		  if (element==undefined) {return; };
			/* Do not add the className if element.className already contains it */
			if (element.className.indexOf(className) <= -1) {
				element.className += " " + className;
			}
		}
		
	 function removeClass(element,className) {
		if (element.className.indexOf(" " + className) > -1) {
			element.className = element.className.replace(new RegExp(" "+className+"\\b"), "");
		}
		else if (element.className.indexOf(className) > -1) {
			element.className = element.className.replace(new RegExp(className+"\\b"), "");
		}
	}

 
});