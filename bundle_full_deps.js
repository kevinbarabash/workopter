var fs = require("fs");
var q = require("q");

var readdir = q.denodeify(fs.readdir);
var readFile = q.denodeify(fs.readFile);
var writeFile = q.denodeify(fs.writeFile);
var libs = {};

var srcDir = "./full_deps";
readdir(srcDir).then(function (filenames) {
    return q.all(filenames.map(function (filename) {
        var name = filename.split(".")[0];
        var path = srcDir + "/" + filename;

        return readFile(path, { encoding: "utf8" }).then(function (content) {
            libs[name] = content;
        });
    }));
}).then(function () {
    writeFile("./bundles/full_bundle.json", JSON.stringify(libs, null, "  "), { encoding: "utf8" });
}).then(function () {
    console.log("success!");
});
