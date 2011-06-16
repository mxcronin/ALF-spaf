var Model = (function() {
    
    console.log("Model :" + currentMenuItem + " set");
        
    this.extendAsEventDispatcher();
    
    
    var message;
    
    this.__defineGetter__("message",function() { return message});
    
    this.__defineSetter__("message",function(val) {message=val});
    
   
    var dynamic;
    
    this.__defineGetter__("dynamic",function() { return dynamic});
    
    this.__defineSetter__("dynamic",function(val) {dynamic=val;});
    
    
    var currentSection;
    
    this.__defineGetter__("currentSection",function() { return currentSection});
    
    this.__defineSetter__("currentSection",function(val) {currentSection=val});
    
    
    var currentSlide;
    
    this.__defineGetter__("currentSlide",function() { return currentSlide});
    
    this.__defineSetter__("currentSlide",function(val) {currentSlide=val
                    this.dispatchEvent("currentslide");
    });
    
    
    var currentMenuItem;
    
    this.__defineGetter__("currentMenuItem",function() { return currentMenuItem});
    
    this.__defineSetter__("currentMenuItem",function(val) {currentMenuItem=val; 
        //console.log("Model : currentMenuItem " + event.target.id + " set");
    });
    
    var currentScroller;
    
    this.__defineGetter__("currentScroller",function() { return currentScroller});
    
    this.__defineSetter__("currentScroller",function(val) {currentScroller=val; 
        //console.log("Model : currentMenuItem " + event.target.id + " set");
    });
    
    var internalScrollerArray;
    
    this.__defineGetter__("internalScrollerArray",function() { return internalScrollerArray});
    
    this.__defineSetter__("internalScrollerArray",function(val) {internalScrollerArray=val; 
    });
    
    
    var slides;
    
    this.__defineGetter__("slides",function() { return slides});
    
    this.__defineSetter__("slides",function(val) {slides=val;});
    
    var sections;
    
    this.__defineGetter__("sections",function() { return sections});
    
    this.__defineSetter__("sections",function(val) {sections=val;});
    
    
    var menuItems;
    
    this.__defineGetter__("menuItems",function() { return menuItems});
    
    this.__defineSetter__("menuItems",function(val) {menuItems=val});
  
    
    var slidescroller;
    
    this.__defineGetter__("slidescroller",function() { return slidescroller});
    
    this.__defineSetter__("slidescroller",function(val) {slidescroller=val;
                          this.dispatchEvent("slidesready");
                          });
        
    var openthumbs;
    
    this.__defineGetter__("openthumbs",function() { return openthumbs});
    
    this.__defineSetter__("openthumbs",function(val) {openthumbs=val; 
         this.dispatchEvent("openthumbs");   
    });
    
    var innerscroller = null;
    
    this.__defineGetter__("innerscroller",function() { return innerscroller});
    
    this.__defineSetter__("innerscroller",function(val) {innerscroller=val; 
         this.dispatchEvent("innerscroller");
         //console.log('Dynamic innerscroller event sent ' + innerscroller)   
    });
    
    var opennavigation;
    
    this.__defineGetter__("opennavigation",function() { return opennavigation});
    
    this.__defineSetter__("opennavigation",function(val) {opennavigation=val; 
         //console.log("opennavigation");
         this.dispatchEvent("opennavigation");   
    });
    
    var startpresentation;
    
    this.__defineGetter__("startpresentation",function() { return startpresentation});
    
    this.__defineSetter__("startpresentation",function(val) {startpresentation=val; 
         //console.log("startpresentation");
         this.dispatchEvent("startpresentation");   
    });
    
    var swipe;
    
    this.__defineGetter__("swipe",function() { return swipe});
    
    this.__defineSetter__("swipe",function(val) {swipe=val; 
         this.dispatchEvent("swipe");   
    });
    
    var longtouchevent;
    
    this.__defineGetter__("longtouchevent",function() { return longtouchevent});
    
    this.__defineSetter__("longtouchevent",function(val) {longtouchevent=val; 
         this.dispatchEvent("longtouchevent");  
    });
    
    var longtouchtarget;
    
    this.__defineGetter__("longtouchtarget",function() { return longtouchtarget});
    
    this.__defineSetter__("longtouchtarget",function(val) {longtouchtarget=val; 
         this.dispatchEvent("longtouchtarget"); 
    });
    
    
    var dd = null;
    
    this.__defineGetter__("dd",function() { return dd});
    
    this.__defineSetter__("dd",function(val) {dd=val;   
    });
    
    

});