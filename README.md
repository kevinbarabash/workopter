# workopter #
Optimization experiments for Web Workers

## Experiments ##

### Loading Dependencies ###
- importScripts
- eval(string) with the main thread send the string to the worker

### Code -> AST ###
There are lots of live-editor features that require an AST.  
Parsing the code once and then sharing the AST should reduce 
- loading deps via importScripts with each worker generating an AST
- loading deps via strings send to the worker from the parent with a single worker 
