var old_require = require;
require = function(name) {
    console.log("a requires: " + name);
    return old_require(name);
};

var constants = require("./b");

function Point(x,y) {
    this.x = x;
    this.y = y;
}

Point.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

module.exports = Point;
