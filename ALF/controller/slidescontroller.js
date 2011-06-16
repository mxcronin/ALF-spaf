var SlidesController = (function(){
     
   this.markActive = function (scrollertype, scrollerId) {
       
	   if(!model.currentSection){
	       model.currentSection = model.sections[1];
	       model.currentSlide = model.slides[1];
	   };
	   
	   if(model.menuItems.length<0){ return};
	
	   for(var i=0; i<model.menuItems.length; i++){
	       
	          removeClass(model.menuItems[i], 'active');
	   }	   
	   //Swipe handler for main scroller
	   for(var i=0; i<model.sections.length; i++){
	        
	        if(-model.sections[i].offsetLeft == model.slidescroller.x) {
	        
	              model.currentSection = model.sections[i];
	              model.currentMenuItem = model.menuItems[i];
	              addClass(model.currentMenuItem, 'active');
	              
	             //DIFFERENT CHILD OF MAIN SCROLLER IF IN AN INTERNAL SCROLLER
	              if(model.sections[i].childNodes[1].className == 'internalwrapper') {
	                      model.currentSlide = model.sections[i].childNodes[1].childNodes[1].childNodes[1];
	              } else {
	                      model.currentSlide = model.sections[i].childNodes[1];
	              }
	              //addClass(model.currentSlide, 'active');
	              //console.log('CURRENT SLIDE ' + model.currentSlide.id + 'CURRENT menu ' + model.currentMenuItem.innerHTML)
	           }
	     }
	     //Swipe handler for internal scrollers
	    if (scrollertype == 'internal') {
	    
	          var scroller = document.getElementById(scrollerId);
	          var internalslides = scroller.getElementsByTagName("article");
	          
	          for(var i=0; i<internalslides.length; i++){
	    	            var slideId = internalslides[i].id;
	         
		         if(-internalslides[i].offsetTop == model.currentScroller.y) {
		               model.currentSlide = internalslides[i];
		               //console.log('CURRENT INTERNAL SLIDE ' + model.currentSlide.id)
		         }
	      }
	     } 
	     
	     	     
    }
	function addClass(element,className) {
	  if (element==undefined) {return; };
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