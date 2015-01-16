// does code generation to "tidy" up the code
// performance could be improved by using a SharedWorker
// right now we postMesage the results back to the parent
// stringify the data before sending improves performance

var profile = function(title, callback) {
    var start = performance.now();
    callback();
    var elapsed = performance.now() - start;
    console.log(title + " took " + elapsed + "ms");
};

self.onmessage = function (e) {

    var data = e.data;

    if (data.escodegen) {
        eval(data.escodegen);
    } else {
        var ast, code;
        // assume someone sent as an AST
        var start = performance.now();
        
        profile("JSON.parse", function () {
            ast = JSON.parse(data);    
        });
        
        profile("escodegen.generate", function () {
            code = escodegen.generate(ast);    
        });
        
        var elapsed = performance.now() - start;
        console.log("elapsed = " + elapsed);
        self.postMessage(code);
    }
};
