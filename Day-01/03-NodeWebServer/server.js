/*
psuedocode
==========
parse the url
if the request is for a static resource [html, js, img, jpg, png, css, txt]
    if resource exists
        server the resource
        exit
    else
        serve 404
        exit
else if the request is for "/calculate"
    use the calculator to calculate the result
    serve the result
    exit
else
    serve 404
    exit

    
*/
var http = require("http"),
    path = require("path"),
    fs = require("fs");
var server = http.createServer(function(req,res){
    var resourcePath = path.join(__dirname, req.url);
    if (fs.existsSync(resourcePath)){
        var readStream = fs.createReadStream(resourcePath, {encoding : "utf8"});
        /*readStream.on("data", function(chunk){
            res.write(chunk);
        });
        readStream.on("end", function(){
            res.end();
        });*/
        readStream.pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(9090);
console.log("server listening on port 9090..!");