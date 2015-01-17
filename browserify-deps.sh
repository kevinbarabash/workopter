#!/bin/bash

browserify node_modules/escodegen/escodegen.js -o ./deps/escodegen.js -x esutils -x estraverse -x source-map -s escodegen &&
browserify node_modules/esutils/lib/utils.js -o ./deps/esutils.js -s esutils &&
browserify node_modules/source-map/lib/source-map.js -o ./deps/source-map.js -s sourceMap &&
cp node_modules/esprima/esprima.js ./deps/esprima.js &&
cp node_modules/estraverse/estraverse.js ./deps/estraverse.js
