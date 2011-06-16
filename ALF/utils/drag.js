var trackint;
 var i = 0;
 var del;
 
 function draghandler(event){
       del = event;
       document.captureEvents(Event.MOUSEMOVE)
       document.onmousemove = tracker;
      //event.target.style.top =  event.clientX+'px';
 }
 function tracker(){
         console.log(event.pageY);
         del.target.style.top =  event.pageY+'px';
 }
 function draghandlerstop(event){

      clearInterval(trackint)
      //event.target.style.top =  event.clientX+'px';
 }