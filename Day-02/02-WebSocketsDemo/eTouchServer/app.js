var nodeJsWebSocket = require("nodejs-websocket");

var server = nodeJsWebSocket.createServer(function(con){
    console.log("a new connection is established");
    var count = 0
    var interval = setInterval(function(){
        ++count;
        if (count < 10){
            con.sendText(new Date().toString());
        } else {
            clearInterval(interval);
        }
    },5000);
});
server.listen("9090");
console.log("socket server listening on port 9090!");
