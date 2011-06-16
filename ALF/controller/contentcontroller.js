window.addEventListener( 'webkitTransitionEnd', function( event ) { transitionEndHandler(event.target.className); 
                          console.log( "Finished transition! " + event.target.className); }, false );

model.addEventListener('currentslide', slidechangehandler, false);

function transitionEndHandler(transitionId) {
    if(transitionId == "frontLeg") {
          model.startpresentation = true;
       }
    
}
function slidechangehandler(event) {
  
     console.log('Content controller ' + model.currentSlide.id);
   
   }