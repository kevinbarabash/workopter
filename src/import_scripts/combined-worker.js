importScripts("../../deps/escodegen.browser.js");
importScripts("../../deps/esprima.js");

self.onmessage = function (e) {
    var data = e.data;
    var start = performance.now();
    var ast = esprima.parse(data);
    var code = escodegen.generate(ast);
    var elapsed = performance.now() - start;
    console.log("elapsed = " + elapsed);
    self.postMessage(code);
};
