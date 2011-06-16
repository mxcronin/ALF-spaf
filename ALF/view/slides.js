//INIT CODE
var SlideShow = (function() {

var slidescontroller = new SlidesController();

var init = false;
var innerscrollnumber = 0;
var internalslidesarray;

this.__defineGetter__("init",function() { return init});
this.__defineSetter__("init",function(val) {
                     init=val; 
                  
                     if(init==false) { 
                        unbindscroller();
                        }
                     if(init==true) {
                        initslides();
                        }
                        });
                        
model.addEventListener('innerscroller', initInnerscroller, false);	
                        

function unbindscroller() {
           console.log("Slides scroller : removed");
           if (	model.slidescroller) {
                	model.slidescroller.unbind();
           }
}
function rebindscroller() {
           console.log("Slides scroller : removed");
           if (	model.slidescroller) {
                	model.slidescroller.rebind();
           }
}

function initslides() {

        console.log("Slides view: init");
        
        if (model.dynamic == true) {
           console.log("Slides view: This is dynamic!!");
           initslideloader();
        }
        if (model.dynamic == false) {
           console.log("Slides view: This is static!!");
           initscroller();
        }

       	               

    }
function initslideloader() {
    
    for (var i = 0; i<slidesarray.length; i++) {
			           
          var req = new XMLHttpRequest();
			   req.open('GET',path + slidesarray[i] + '.html', false); 
			    
			   //req.setRequestHeader("Content-type", "text/html");
			   req.send(null);
			 
               console.log('request ' + req.getAllResponseHeaders()); 
           
			  if(req.readyState == 4 && req.status == 0){
			  
	              console.log('Content received');
	              parser=new DOMParser(); 
	              xmlobject = parser.parseFromString(req.responseText,"text/xml");
              
	             if (xmlobject.firstChild.getAttribute('id') != 'internalcontent') {
		  			   var newslide = document.createElement('article');
		  			   newslide.setAttribute('class', 'slide');
		  			   newslide.setAttribute('id', slidesarray[i]);
		  			   newslide.setAttribute('monitor_id', slidesarray[i]);
		  			   newslide.innerHTML = req.responseText;
		               document.getElementById('scroller').appendChild(newslide);
		          
		               console.log('Slide found and added : ' + newslide.getAttribute('monitor_id')); 
	              }
	              
	             if (i == slidesarray.length-1) {
	  
	                   initscroller();
	             }
	              if (xmlobject.firstChild.getAttribute('id') == 'internalcontent') {
	              
	                   console.log('Found an internal scroller: '); 
	                   innerscrollnumber++;
	                   
	                   var tempdiv = document.createElement('div');
	                   tempdiv.setAttribute('class', 'slide');
	                   document.getElementById('scroller').appendChild(tempdiv);
	                   
	                   var newWrapper = document.createElement('div');
	                   newWrapper.setAttribute('id','internalwrapper'+innerscrollnumber);
	                   newWrapper.setAttribute('class','internalwrapper');
	                   tempdiv.appendChild(newWrapper);
	                   
	                  
	                   
	                   var innerScroller = document.createElement('div');
	                   innerScroller.setAttribute('id','internalscroller'+ innerscrollnumber);
	                   innerScroller.setAttribute('class','internalscroller');
	                   newWrapper.appendChild(innerScroller);
	                   
	                 
	                    
	                   var newslide = document.createElement('article');
	                   newslide.setAttribute('class', 'innerslide');
	                   newslide.setAttribute('monitor_id', slidesarray[i]);
	                   newslide.innerHTML = req.responseText;
	                   innerScroller.appendChild(newslide);
	                   
	                                          
	                   //console.log('Child slides: ' + xmlobject.firstChild.getAttribute('numchildren'));
	                   var numchildren = xmlobject.firstChild.getAttribute('numchildren');
	                 
	                   for(var j=0; j<1; j++){
	                   
	                     var req = new XMLHttpRequest();
	                     req.open('GET',path + newslide.getAttribute('monitor_id') + j + '.html', false); 
	                     req.send(null);
	                     console.log('Added an internal slide: ' + path + newslide.getAttribute('monitor_id') + j + '.html'); 
	                    
	                     if(req.status == 0){
	                        var innerslide = document.createElement('article');
	                        innerslide.setAttribute('class', 'innerslide');
	                        innerslide.setAttribute('monitor_id', newslide.getAttribute('monitor_id') + j);
	                        innerslide.innerHTML = req.responseText;
	                        innerScroller.appendChild(innerslide);
	                        }
	                   }
	                  
	                  //model.innerscroller = newWrapper;
	                  internalslidesarray.push(newWrapper);
	                  console.log('newWrapper ' +internalslidesarray[0])
              }
              
             
          }//End request
			 
       }//End for loop


}

var efficacyInnerScroll;
var rocketInnerScroll;

function initscroller() {
             		  
        var scroller = document.getElementById("scroller");
        var sections = scroller.getElementsByTagName("section");
        var slides = scroller.getElementsByTagName("article");
        model.sections = sections;
        model.slides = slides;
        //console.log("slides " + model.slides.length + " sections " + model.sections.length)
        var wrapper = document.getElementById("wrapper");
        
		slideScroll = new iScroll(wrapper, {
		        snap: 'section',
				momentum: false,
				hScrollbar: false,
				vScrollbar: false,
				
				onScrollEnd: function () {
				       //Tell controller
				       model.currentScroller = slideScroll;
				       slidescontroller.markActive('mainscroller',slideScroll);
					   resetInternalScrollers();
					
					}
				});
		 	 
       model.slidescroller = slideScroll;
      
       	//initInnerscroller();	
       	
       efficacyInnerScroll = new iScroll('internalwrapper', {
        	    snap: 'article',
        		momentum: false,
        		hScrollbar: false,
        		vScrollbar: false,
        	
        		onScrollEnd: function () {
        		       //Tell controller
        		       model.currentScroller = efficacyInnerScroll;
        		       model.currentScroller.id = 'efficacyscroller';
        		       slidescontroller.markActive('internal', model.currentScroller.id);
        		       
        			}
        	 }); 
        	 
       rocketInnerScroll = new iScroll('rocketwrapper', {
       	    snap: 'article',
       		momentum: false,
       		hScrollbar: false,
       		vScrollbar: false,
       		
       		onScrollEnd: function () {
       		       //Tell controller
       		       model.currentScroller = rocketInnerScroll;
       		       model.currentScroller.id = 'rocketscroller';
       		       slidescontroller.markActive('internal', model.currentScroller.id);
       		       
       			}
       	 }); 
        
       xareltoInnerScroll = new iScroll('xareltowrapper', {
       	    snap: 'article',
       		momentum: false,
       		hScrollbar: false,
       		vScrollbar: false,
       		
       		onScrollEnd: function () {
       		       //Tell controller
       		       model.currentScroller = xareltoInnerScroll ;
       		       model.currentScroller.id = 'xareltoscroller';
       		       slidescontroller.markActive('internal', model.currentScroller.id);
       		       
       			}
       	 }); 
       	 
       safetyInnerScroll = new iScroll('safetywrapper', {
       	 	    snap: 'article',
       	 		momentum: false,
       	 		hScrollbar: false,
       	 		vScrollbar: false,
       	 		
       	 		onScrollEnd: function () {
       	 		       //Tell controller
       	 		       model.currentScroller = safetyInnerScroll;
       	 		       model.currentScroller.id = 'safetyscroller';
       	 		       slidescontroller.markActive('internal', model.currentScroller.id);
       	 		       
       	 			}
       	 	 }); 
       
       	 	  
      model.internalScrollerArray = [xareltoInnerScroll,efficacyInnerScroll,rocketInnerScroll,safetyInnerScroll];
}

var reset = false;  

function resetInternalScrollers() {
         //console.log(model.currentSlide.id)
         if(model.currentSlide.id != "efficacy_section" && efficacyInnerScroll.y != 0) {
                //efficacyInnerScroll.unbind();
                console.log('reset' + model.currentScroller)
                efficacyInnerScroll.scrollTo(0,0,0);
         }
         if(model.currentSlide.id != "rocketAF_section" && rocketInnerScroll.y != 0) {
                //efficacyInnerScroll.unbind();
                console.log('reset' + model.currentSlide)
                rocketInnerScroll.scrollTo(0,0,0);
         }
         if(model.currentSlide.id != "xarelto_section" && xareltoInnerScroll.y != 0) {
                //efficacyInnerScroll.unbind();
                console.log('reset' + model.currentSlide)
                xareltoInnerScroll.scrollTo(0,0,0);
         }
         if(model.currentSlide.id != "safety_section" && safetyInnerScroll.y != 0) {
                //efficacyInnerScroll.unbind();
                console.log('reset' + model.currentSlide)
                safetyInnerScroll.scrollTo(0,0,0);
         }
   
     }
function initInnerscroller() {
       
       for (var i=0; i<internalslidesarray.length; i++) {
       
       var innerwrapper = document.getElementById(internalslidesarray[i].id);
       innerwrapper.addEventListener('touchstart', unbindscroller, false);
       innerwrapper.addEventListener('touchend', rebindscroller, false);
       
       var  innerScrollID = 'innerscroll'+i;
       
       console.log("NEW innerscroller set by model " + internalslidesarray[i].id + ' internalwrapper '+   innerScrollID);
       
       innerScrollID = new iScroll(innerwrapper, {
        	    snap: 'article',
        		momentum: false,
        		hScrollbar: false,
        		vScrollbar: false
        	 }); 
        	 
       
       
       } 
   } 
    
});