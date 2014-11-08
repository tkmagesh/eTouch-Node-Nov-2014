/*
psuedocode
==========
parse the url
extract the data
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
    qs = require("querystring"),
    url = require("url"),
    calculator = require("./calculator"),
    fs = require("fs");



function serveStatic(req,res,next){
    var staticResourceExtns =  [".html", ".js", ".img", ".jpg", ".png", ".css", ".txt",".ico"];

    function isStaticResource(resourceName){
        return staticResourceExtns.indexOf(path.extname(resourceName)) != -1;
    }
    
    var resourcePath = path.join(__dirname, req.url.pathname);
    if (isStaticResource(resourcePath)){
        if (fs.existsSync(resourcePath)){
            var readStream = fs.createReadStream(resourcePath, {encoding : "utf8"});
            readStream.pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        next();
    }
}

function extractData(req,res,next){
    var qsObj = qs.parse(req.url.query);
    req.queryData = qsObj;
    if (req.method === "POST"){
            var data = '';
            req.on("data",function(chunk){
                data += chunk;
            });
            req.on("end", function(){
                var qsObj = qs.parse(data);
                req.bodyData = qsObj;
                next();
            });
        }
    else {
        next();
    }
}

function handleCalculatorRequest(req,res,next){
    if (req.url.pathname === "/calculator"){
        var reqData;
        if (req.method === "GET"){
            reqData = req.queryData;
        } else {
            reqData = req.bodyData;
        }
        var operator = reqData.operator,
        number1 = parseInt(reqData.number1, 10),
        number2 = parseInt(reqData.number2, 10);
        var result = calculator[operator](number1, number2);
        res.write(result.toString());
        res.end();  
    } else {
        next();    
    }
}
var server = http.createServer(function(req,res){
    console.log("a new request is made..");
    serveStatic(req,res, function(){});         
    
});
server.listen(9090);
console.log("server listening on port 9090..!");