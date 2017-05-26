// Include the http module.
var http = require("http");
// Include the FS module. fs = file system. Part of core! Yay!
var fs = require("fs");

var server = http.createServer((req, res)=>{
    console.log("Someone conntected to the server!");
    console.log(req.url);

    res.writeHead(200,{'content-type': 'text/html'});
    if (req.url == '/'){
        var theHomePageHTML = fs.readFileSync('./homePage.html');
        res.end(theHomePageHTML);
    }else if(req.url == '/movie-app'){
        var theHomePageHTML = fs.readFileSync('./movie-app.html');
        res.end(theHomePageHTML);
    }else if(req.url == '/memory-game'){
        var theHomePageHTML = fs.readFileSync('./memory-game.html');
        res.end(theHomePageHTML);
    }else{
        res.end("<h1>404 ERROR</h1>");
    }
});

// Tell the server we created above to listen to port 8000
// Whenever someone makes a HTTP request to port 8000, our callback (with req and res) will fire.
var port = 8000;
server.listen(port);
console.log("Server is listening for http traffic on port "+port+"...");