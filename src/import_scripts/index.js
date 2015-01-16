var combinedWorker1 = new Worker('combined-worker.js');
var combinedWorker2 = new Worker('combined-worker.js');
var start, elapsed;

combinedWorker1.onmessage = function (e) {
    elapsed = performance.now() - start;
    //console.log("first tidy = " + elapsed);
    start = performance.now();
    combinedWorker2.postMessage(code);
};

combinedWorker2.onmessage = function (e) {
    elapsed = performance.now() - start;
    //console.log("second tidy = " + elapsed);
};

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
    combinedWorker1.postMessage(code);
});
