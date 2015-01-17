var old_require = require;
require = function(name) {
    console.log("c requires: " + name);
    return old_require(name);
};

var constants = require("./b");
var Point = require("./a");

exports.special_point = new Point(constants.pi, constants.e);
