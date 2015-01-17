var fs = require("fs");
var q = require("q");

var readdir = q.denodeify(fs.readdir);
var readFile = q.denodeify(fs.readFile);
var writeFile = q.denodeify(fs.writeFile);
var libs = {};

function getExternalDeps(code) {
    var regex = /require\([^\)]+\)/g;
    var matches = code.match(regex) || [];
    return matches.map(function (match) {
        return match.replace(/require\(["']/, "").replace(/["']\)/, "");
    }).filter(function (match) {
        return match.indexOf("./") === -1;
    });
}

var srcDir = "./partial_deps";

readdir(srcDir).then(function (filenames) {
    return q.all(filenames.map(function (filename) {
        var name = filename.split(".")[0];
        var path = srcDir + "/" + filename;

        return readFile(path, { encoding: "utf8" }).then(function (code) {
            var obj = {};
            if (filename !== "source-map.js") {
                obj.deps = getExternalDeps(code);
            }
            obj.code = code;
            libs[name] = obj;
        });
    }));
}).then(function () {
    writeFile("./bundles/partial_bundle.json", JSON.stringify(libs, null, "  "), { encoding: "utf8" });
}).then(function () {
    console.log("success!");
}).catch(function (err) {
    console.log(err);
});
