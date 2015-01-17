var profile = function(title, callback) {
    var start = performance.now();
    callback();
    var elapsed = performance.now() - start;
    console.log(title + " took " + elapsed + "ms");
};

var astWorker = new Worker("ast-worker.js");
var codegenWorker1 = new Worker("codegen-worker.js");
var codegenWorker2 = new Worker("codegen-worker.js");
var start, elapsed;

var ast;
astWorker.onmessage = function (e) {
    ast = e.data;
    codegenWorker1.postMessage(ast);
};

codegenWorker1.onmessage = function (e) {
    elapsed = performance.now() - start;
    //console.log("first tidy = " + elapsed + "ms");
    start = performance.now();
    codegenWorker2.postMessage(ast);
};

codegenWorker2.onmessage = function (e) {
    var total = elapsed;
    elapsed = performance.now() - start;
    total += elapsed;
    //console.log("second tidy = " + elapsed + "ms");
    //console.log("total tidy = " + total + "ms");
};

// TODO: move this into index.html and use Promises so that we can create the workers after loading the deps reliably
var deps;
var xhr1 = new XMLHttpRequest();
xhr1.open("GET", "../../bundles/full_bundle.json", true);

var useEval = false;

xhr1.onload = function () {
    deps = JSON.parse(xhr1.responseText);
    if (useEval) {
        console.log("using eval");
    } else {
        console.log("using new Function() exression");
    }
    profile("eval esprima", function () {
        if (useEval) {
            eval(deps.esprima);
        } else {
            (new Function(deps.esprima))();
        }
    });
    profile("eval escodegen", function () {
        if (useEval) {
            eval(deps.escodegen);
        } else {
            (new Function(deps.escodegen))();
        }
    });
    astWorker.postMessage({
        esprima: deps.esprima
    });

    codegenWorker1.postMessage({
        escodegen: deps.escodegen
    });

    codegenWorker2.postMessage({
        escodegen: deps.escodegen
    });
    
    delete deps.esprima;
    delete deps.escodegen;
};
xhr1.send();


var code;
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "../code.js", true);
xhr2.onload = function () {
    code = xhr2.responseText;
    console.log("finished loading code.js");
};
xhr2.send();


var tidyButton = document.getElementById('tidyButton');
tidyButton.addEventListener("click", function () {
    start = performance.now();
    astWorker.postMessage({ code: code });
});

console.log("end of load_deps.js: " + performance.now());