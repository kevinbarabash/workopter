var fs = require("fs");
var q = require("q");

var readdir = q.denodeify(fs.readdir);
var readFile = q.denodeify(fs.readFile);
var writeFile = q.denodeify(fs.writeFile);
var libs = {};

var srcDir = "./full_deps";

q.async(function *() {
    try {
        var filenames = yield readdir(srcDir);

        yield q.all(filenames.map(function (filename) {
            return q.async(function *() {
                var name = filename.split(".")[0];
                var path = srcDir + "/" + filename;

                libs[name] = yield readFile(path, { encoding: "utf8" });
            })();
        }));

        yield writeFile("./bundles/full_bundle.json", JSON.stringify(libs, null, "  "), { encoding: "utf8" });

        console.log("success!");
    } catch (e) {
        console.log(e);
    } finally {
        // do some cleanup
    }

    return "hiya!";
})().done(function (res) {
    console.log(res);
    console.log("done");
});

// can't yield a the result of q.spawn()
