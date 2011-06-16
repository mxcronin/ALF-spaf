/**
 * Object that during their initialization can call this function
 * This will extend the calling object with basic
 * Event Dispatching functionality
 *
 */
Object.prototype.extendAsEventDispatcher = function() {

    if (this._listeners == null)
    {
       this._listeners = [];
    }
    this.isEventDispatcher = true;
    
    if (typeof(this.dispatchEvent) == "undefined")
    {
        this.dispatchEvent = function(eventObject)
        {   
            console.log("Model dispatchEvent added : " + eventObject);
            for ( var i = 0; i < this._listeners.length; i++)
            {   
                var test = this._listeners[i];
                   
                if (test.type === eventObject)
                {  
                  
                   test.callback(eventObject);
                   
                   break;
                }
            }
        };
    }
    if (typeof(this.addEventListener) == "undefined")
    {
        this.addEventListener = function (type, callback, capture) 
        {
            console.log("Model Listener added: " + type);
            var declared = false;
            for ( var i = 0; i < this._listeners.length; i++)
            {
                var test = this._listeners[i];
                if (test.type === type && test.callback === callback)
                {
                    declared = true;
                    break;
                }
            }
            if (!declared)
            {
                this._listeners.push({'type':type,'callback':callback,'capture':capture});
            }
        };
    }    
}