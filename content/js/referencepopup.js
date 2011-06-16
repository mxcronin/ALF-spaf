var references = {
//console.log(num);
    init: function() {
    
        var refbuttons = document.getElementsByClassName('referencesbutton');
        var popupWindow =  document.getElementById('popupWindow');
        var currentref;
        
		for(var i=0; i< refbuttons.length; i++ ){
		     //console.log('REFBUTS' + refbuttons[0])
		     gestures.addLongTouchListener(refbuttons[i]);
		    
		}
		 
		
		 model.addEventListener('longtouchevent', openwindow, false);
		 
		function openwindow () {
		       //console.log('open')
		       addClass(document.getElementById('popupWindow'), 'active');
		       showcontent();
		       //document.getElementById('popupWindow').addEventListener('touchstart', hidepopup, false);
		       document.getElementById('popupclosebutton').addEventListener('click', closewindow, false);
		       
		       for(var i=0; i< refbuttons.length; i++ ){
		            gestures.removeLongTouchListener(refbuttons[i]);
		            
		       }
		      
		} 
		function closewindow () {
		       removeClass(document.getElementById('popupWindow'), 'active');
		       for(var i=0; i< refbuttons.length; i++ ){
		            //console.log(model.sections[i].id)
		            gestures.addLongTouchListener(refbuttons[i]);
		            
		       }
		      document.getElementById('popupclosebutton').removeEventListener('click', closewindow, false);
		 } 
		
		function showcontent () {
		
		     var refcontent = popupWindow.getElementsByTagName("ul");
		    
		     for(var i = 0; i<refcontent.length; i++) {
		           
		          refcontent[i].style.display = 'none';
		          
		          if (refcontent[i].getAttribute('slide-id') == model.longtouchtarget.getAttribute('slide-id')) {
		                console.log('content slide name ' + refcontent[i].getAttribute('slide-id') + ' model target  ' + model.longtouchtarget)
		              refcontent[i].style.display = 'block';
		              
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
	   
}

};
references.init();