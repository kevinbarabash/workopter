// does all of the parsing
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
    
    if (data.esprima) {
        (new Function(data.esprima))();
        //eval(data.esprima);
    } else if (data.code) {
        var ast, json;

        profile("esprima.parse", function () {
            ast = esprima.parse(data.code);
        });
        
        profile("JSON.stringify", function () {
            json = JSON.stringify(ast);
        });
        
        self.postMessage(json);
    }
};
