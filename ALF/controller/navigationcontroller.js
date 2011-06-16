var NavigationController = (function (){

    this.gotoslide =function(e) {
   
	    if(e.target.parentNode.id == 'nav') {
	        console.log('Navigation seek ' + e.target.element)
	        model.slidescroller.scrollToElement(e.target.element, 300);
	        model.currentSlide = e.target.element;
	        model.currentMenuItem = e.target;
	    }
	    if(e.target.parentNode.parentNode.parentNode.id == 'thumbnav') {
	        console.log("Nav " +  e.target + e.target.parentNode.element.id)
	        e.target.parentNode.scroller.scrollToElement(e.target.parentNode.element, 300);
	        //model.currentSlide = e.target.parentNode.element;
	    }
        model.openthumbs = true;
     }
     
     this.autogotoslide = function (element) {
        var element = element;
        console.log('Navigation seek ' + element)
        model.slidescroller.scrollToElement(element, 300);
        model.currentSlide = element;
        model.currentMenuItem = element.target;
   
       }
       
});