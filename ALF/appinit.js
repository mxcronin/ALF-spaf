var App = (function(){
     
     
    var navigation = new Navigation();
    var footer = new Footer();
    var thumbnavigation = new ThumbNavigation();
     
    this.__defineGetter__("dynamic",function() { return dynamic});
    this.__defineSetter__("dynamic",function(val) {dynamic=val;});
    
    this.init = function() {
    
          model.addEventListener("slidesready", setviews, false);
          //CALLED BY START ANIMATION WHEN FINISHED
          model.addEventListener("startpresentation", initpresentation, false);
          model.addEventListener("swipe", initwithoutanimation, false);
      }
      
     var introplayed = false; 
     var viewset = false; 
     
     function initwithoutanimation() {
                 //introplayed = true;
                 gestures.removeSwipeListener('swipebutton');
                 initpresentation();
                 model.slidescroller.scrollToPage(2,0,0); 
     }	
     	   
     function setviews() {
                 
                     model.slidescroller.scrollToElement(model.slides[1]);
                     
                     include('content/js/home.js');	
	                 include('ALF/controller/contentcontroller.js');
	                 include('content/js/dragdealer.js');
	                 
	                 include('content/js/currenttreatment.js');
	                 include('content/js/efficacy.js');
	                 include('content/js/strokein_af.js');
	                 include('content/js/xeralto.js');
	                 include('content/js/administration.js');
	                 include('content/js/referencepopup.js');
                   
                     if (introplayed == false) {
                           slideShow.init = false;
                     //DISABLE SCROLLING FROM START

         	   		 }		 		 	 
         	   	  };
    function hidepopup(event) {
               event.target.style.display = 'none';
    }
	function initpresentation() {
	         if (introplayed == false) {
	            
	            introplayed = true; 
	            navigation.init = true; 
	            thumbnavigation.init = true;
	            footer.init = true;
	            model.opennavigation = true;
	            	            
	            document.getElementById('referencecontent').style.opacity = '1';
	            slideShow.init = true;
	            
	          }  
	} 

});