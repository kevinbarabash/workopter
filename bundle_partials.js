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


q.async(function *() {
    try {
        var filenames = yield readdir(srcDir);

        yield q.all(filenames.map(function(filename) {
            return q.async(function *() {
                var code = yield readFile(srcDir + "/" + filename, { encoding: "utf8" });

                var obj = {};
                if (filename !== "source-map.js") {
                    obj.deps = getExternalDeps(code);
                }
                obj.code = code;

                var name = filename.split(".")[0];
                libs[name] = obj;

                return obj; // return values is equivalent to resolving
            })();
        }));

        yield writeFile("./bundles/partial_bundle.json", JSON.stringify(libs, null, "  "), { encoding: "utf8" });
        console.log("success!");
    } catch (e) {
        console.log("error");
        console.log(e);
    }
})();
