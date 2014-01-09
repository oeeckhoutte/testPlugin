/**
 * Phonegap Torch plugin
  *
 */

/**
 *
 * @return Object literal singleton instance of Torch
 */
;(function() {

var Torch = function() {};

/**
 * Toggles the torch and sends the new state
 * @param success The callback for success
 * @param error The callback for error
 */
Torch.prototype.toggle = function(success, error) {
    return cordova.exec(function(response) {
        if(response) {
            success.call(this, true);
        } else {
            success.call(this, false);
        }
    }, error, "Torch", "toggle", []);
};

//FIX:MANTIS:2976
/**
 * @param success The callback for success
 * @param error The callback for error
 */
Torch.prototype.turnOff = function(success, error ) {
    return cordova.exec(success, error, "Torch", "turnOff", []);
};

//FIX:MANTIS:3012
/**
  * @param success The callback for success
  * @param error The callback for error
  */
Torch.prototype.isCapable = function(success, error) {
    return cordova.exec( function(response) {
        if(response){
            success.call(this, true);
        } else {
            success.call(this, false);
        }
    }, error, "Torch", "isCapable", []);
};

/**
  * @param success The callback for success
  * @param error The callback for error
  */
Torch.prototype.isOn = function(success, error) {
    return cordova.exec(function(response) {
        if(response){
            success.call(this, true);
        } else {
            success.call(this, false);
        }
    }, error, "Torch", "isOn", []);
};

/**
 * Load Analytics
 */

if(!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.Torch) {
    window.plugins.Torch = new Torch();
}

})();