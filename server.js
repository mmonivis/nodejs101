// require is a built-in nodejs method that includes a module
// that module can be:
// 1. part of core, where we do nothing (http is an example)
// 2. from the npm store, written by someone else. require will look inside of node modules
// 3. a module we wrote, which requires a path
var http = require("http");
// console.log(http);

var server = http.createServer(function(request, response){
    // console.log(request);
    response.writeHead(200,{
        'content-type': 'text/html'
    });
    response.write('<h1>Hello, visitor. This is YOUR node server.</h1>');
    response.end();
});

// Server is created above. It came from HTTP object, the createServer method.
// It includes a response in the callback, but also have a listen method.
server.listen(8000);
console.log("NodeJS is listening for connections on port 8000...");