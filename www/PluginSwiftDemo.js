// var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'PluginSwiftDemo', 'coolMethod', [arg0]);
// };

var exec = require('cordova/exec');
var PluginSwiftDemo = function () { }; // This just makes it easier for us to export all of the functions at once.
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
PluginSwiftDemo.coolMethod = function (arg0, onSuccess, onError) {
    exec(onSuccess, onError, "PluginSwiftDemo", "coolMethod", [arg0]);
};
module.exports = PluginSwiftDemo;