var module = require("module");
var c = require("./c");

console.log(c);
console.log(Object.keys(module._cache));
//console.log(Object.keys(module._realpathCache));

console.log(module._findPath("c", ['./']).replace(process.cwd(), ''));

//console.log(module._cache['/Users/kevin/workopter/src/node_test/test.js'].children);