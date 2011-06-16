var administration = {   

	initFoldouts: function() {

		var foldouts = document.getElementsByClassName("clickAndAnimate");
		var i;
		var x;
      
		function clearAnimation(element) {
			$(element).removeClass("animating");
		}
		
        var clickActions = [];
        
        function addClickAction(element) {
        	clickActions.push(element);
        	/*console.log("add");
        	console.log(element);
        	console.log("clickActions.length: " + clickActions.length);*/
        }
        
        function removeClickAction(element) {
        	var i;
        	for (i = clickActions.length - 1; i > -1; i--) {
        		if (clickActions[i] === element) {
        			clickActions.splice(i, 1);
        			/*console.log("remove");
        			console.log(element);
        			console.log("clickActions.length: " + clickActions.length);*/
        		}
        	}
        }
        
        function testClickAction(element) {
        	var i;
        
        	for (i = 0; i < clickActions.length; i++) {
        		if (clickActions[i] === element) {
        			/*console.log("element found");*/
        			return true;
        		}
        	}
        	addClickAction(element);
        	return false;
        }
		var togglerClick = function() {

			var article = $(this).closest("article")[0];
			if (article.className.indexOf("endState") < 0) {
				var me = this;
				var z;

				if (testClickAction(me) === true) {
					return false;
				}

				//The current element is not in an active clickAction
				if (me.parentNode.className.indexOf("active") < 0) {
					this.parentNode.addEventListener('webkitTransitionEnd', function( event ) { removeClickAction(me); this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false);
					$(me).parent().addClass("active");
				}
				else {
					this.parentNode.addEventListener('webkitTransitionEnd', function( event ) { removeClickAction(me); this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false);
					$(me).parent().removeClass("active");
				}
			}
			return false;
		}

		for (i = 0; i < foldouts.length; i++) {
			var togglers = foldouts[i].getElementsByClassName("toggler");

			for (x = 0; x < togglers.length; x++) {
				togglers[x].onclick = togglerClick;
			}
		}
	} 
};	
administration.initFoldouts();
