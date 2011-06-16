//Implementing listeners for touch events. Higher level gestureEvents are also available if prefered
var Gestures = (function(){

     var timer;
     var num = 0;
     
     var startX;
     var dx;
     var direction;
     
     this.addSwipeListener = function(element) {
     
          element = element;
          document.getElementById(element).addEventListener("touchstart", gestureStart, false);
          console.log('SWIPE ' + element)
     }
     this.addLongTouchListener = function(element) {
          //console.log("ELEMENT " + element.id)
          element = element;
          document.getElementById(element.id).addEventListener("touchstart", longTouchStart, false);
     }
     this.removeSwipeListener = function(element) {
          element = element;
          document.getElementById(element).removeEventListener("touchstart", gestureStart, false);
     }
     this.removeLongTouchListener = function(element) {
          element = element;
          document.getElementById(element.id).removeEventListener("touchstart", longTouchStart, false);
     }
     
	 function gestureChange(event) {
	     //console.log('change ' + event.targetTouches.length); 
	     if (event.targetTouches.length > 1) {
	          startX = null;
	          startY = null;
	          direction = null;
	          return
	     }
	    	     
	     var angle = event.rotation;
	     event.preventDefault();
	     
	     if (event.targetTouches.length == 1) {
	             dx = event.touches[0].pageX - startX;
	             var dy = event.touches[0].pageY - startY;
	             if (direction == null){
	                 direction = dx;
	                 event.preventDefault();
	                }
	     }  
	 }
	 
    function gestureStart(event) {
	   //model.slidescroller.unbind();
	   console.log('start ' + event.target.id); 
	   if (event.touches.length == 1)
	     {
	      startX = event.touches[0].pageX;
	      startY = event.touches[0].pageY;
	      event.preventDefault();
	     
	   document.getElementById(event.target.id).addEventListener('touchmove', gestureChange, true);
	   document.getElementById(event.target.id).addEventListener('touchend', gestureEnd, true);
	   }
	 }
 
	function gestureEnd(event) {
	      console.log('end ' +  Math.abs(dx));
	      if (Math.abs(dx) > 40)
	        {
	         console.log('end ' +  model.swipe);
	         model.swipe = true;
	          
	        }
		// stop listening to touch events as we're done with our interaction
		document.getElementById(event.target.id).removeEventListener('touchmove', gestureChange, true);
		document.getElementById(event.target.id).removeEventListener('touchend', gestureEnd, true);
		//model.slidescroller.rebind();
	} 
	function gestureChange(event) {
		    
		     console.log('change ' + event.targetTouches.length); 
		     if (event.targetTouches.length > 1) {
		          startX = null;
		          startY = null;
		          direction = null;
		          return
		     }
		    	     
		     var angle = event.rotation;
		     event.preventDefault();
		     
		     if (event.targetTouches.length == 1) {
		          dx = event.touches[0].pageX - startX;
		          var dy = event.touches[0].pageY - startY;
		          if (direction == null){
		                 direction = dx;
		                 event.preventDefault();
		                
		          }
		     }  
		     
		     
		 }
	   function longTouchStart(event) {
		   //model.slidescroller.unbind();
		    //console.log('lomgtouch ' + event.target.id)
		    /*model.longtouchtarget = event.target;
		    model.longtouchevent = 'true';
		    document.getElementById(event.target.id).addEventListener('touchend', longTouchEnd, true);*/
		  if (event.touches.length == 1)
		     {
		      event.preventDefault();
		      timer = setInterval(function checktouch() {
		                                   num++;
		                                  //console.log(num);
		                                  if (num>5) {
		                                         clearInterval(timer);
		                                         model.longtouchtarget = event.target;
		                                         model.longtouchevent = 'true';
		                                         
		                                  } 
		                           }
		                           , 200);
		    
		     //document.getElementById(element).addEventListener('touchmove', longTouchChange, true);
		     document.getElementById(event.target.id).addEventListener('touchend', longTouchEnd, true);
		   }
		}
	    function longTouchChange(event) {
	    	     event.preventDefault();
	    	     
	    	 }
	    
		function longTouchEnd(event) {
		    
			// stop listening to touch events as we're done with our interaction
			//document.getElementById(event.target.id).removeEventListener('touchmove', longTouchChange, true);
			document.getElementById(event.target.id).removeEventListener('touchend', longTouchEnd, true);
			//model.slidescroller.rebind();
		  } 
			
});