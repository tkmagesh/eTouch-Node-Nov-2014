var http = require("http"),
    path = require("path");
var server = http.createServer(function(req,res){
    var resourcePath = path.join(__dirname, req.url);
    console.log(resourcePath);
  
    //res.write("<h1>Welcome to node</h1>");
    res.statusCode = 404;
    res.end();
});
server.listen(9090);
console.log("server listening on port 9090..!");