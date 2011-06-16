var Footer = (function(){

var controller = new FooterController();

var init = false;

this.__defineGetter__("init",function() { return init});
this.__defineSetter__("init",function(val) {init=val; initnav();});


function thumbstoggle() {
    controller.openthumbs();  
}

function initnav() { 
    console.log("Footer: init");
    document.getElementById('footer').addEventListener('click', thumbstoggle,false); 
   
 }
 
});