# workopter #

Optimization experiments for Web Workers

## Experiments ##

### Loading Dependencies ###

In order to reduce bandwidth usage and speed up page load we can request
a bundle of dependencies packaged as a JSON object where each entry in
the object contains the name (key) and string of code (value).  The code
string can be passed to web workers via postMessage and then eval-ed to 
load that dependency.

- importScripts
- eval(string) with the main thread send the string to the worker

### Code -> AST ###

There are lots of live-editor features that require an AST.  
Parsing the code once and then sharing the AST will reduce 
CPU usage.  There's some overhead from converting to/from a
JSON string as well as sending these strings via postMessage.
It may be possible to reduce that overhead by using SharedWorkers
and or Transferable Objects.

- always parse (base case)
- parse once in a web worker and transport using JSON strings
- parse once in a web worker and transport using an ArrayBuffer (containing a JSON string)
- parse once in a shared worker and transport using the faster method

## Future Work ##

Right now order of depdencies loaded in this fashion are the responsibility
of the developer.  It would be nice to be able to a module and all of it's
dependencies and package them into a single bundle from which multiple 
modules (and their dependencies) could be extracted and loaded in the correct
order.
