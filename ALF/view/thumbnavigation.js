var ThumbNavigation = (function(){ 
    
    var controller = new NavigationController();
    var thumbitems;
    var thumbsections;
    var sectionid;
    var thumbScroll;
	var init = false;
	
	this.__defineGetter__("init",function() { return init});
	this.__defineSetter__("init",function(val) {init=val; initthumbnav();});
	
	
	function toggleopen(){
	    
	    for(var i = 0; i<thumbsections.length; i++) {
	          
	         thumbsections[i].style.display = 'none';
	         
	         if (thumbsections[i].getAttribute('section-id') == model.currentSection.id) {
	            console.log('thumbs for section')
	            thumbsections[i].style.display = 'block';
	             
	             if (model.openthumbs == false) {
	                 addClass(document.getElementById('thumbnav'), 'open');
	             }
	         }
	    }
		if (model.openthumbs == true) {
		       removeClass(document.getElementById('thumbnav'), 'open');
		}
		
	}
	 
	function addEvent(navitem, section, slidenum, scrollerid) {
	   navitem.element = model.sections[section].getElementsByTagName('article')[slidenum];
	   navitem.scroller = scrollerid;
	    //console.log('navelement' + navitem.element.id)
	   navitem.addEventListener('click', controller.gotoslide,false);
	}

	function initthumbnav() { 
	    console.log('Thumbs: init');
	    	 
	    thumbScroll = new iScroll('thumbnav', {
	     		snap: 'li',
	     		momentum: true,
	     		hScrollbar: false,
	     		vScrollbar: false
	     	 }); 
	     	 
	    var thumbmenu = document.getElementById("thumbnav");
	    thumbsections = thumbmenu.getElementsByTagName("ul");
	    
	    for(var i=0; i<thumbsections.length; i++) {
	          sectionid = thumbsections[i].getAttribute('section-id');
	          createthumbs(thumbsections[i], i);
	        }
	    
	   model.addEventListener('openthumbs', toggleopen, false);
	 }
	 function createthumbs(section, scrollernumber) {
	            
	            var scrollerid = model.internalScrollerArray[scrollernumber];
	          
	            section.thumbs = section.getElementsByTagName("li");
	            //console.log('Thumbs ' + sectionid);
	       	    for(var i = 0; i<section.thumbs.length; i++) {
	              navitem = section.thumbs[i];
	              addEvent(navitem, sectionid, i, scrollerid);       
	            }
	 
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