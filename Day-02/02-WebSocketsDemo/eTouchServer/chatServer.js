var nodeJsWebSocket = require("nodejs-websocket");

var server = nodeJsWebSocket.createServer(function(con){
    con.on("text", function(msg){
        server.connections.forEach(function(connection){
            connection.sendText(msg);
        });
    });
});
server.listen("9090");
console.log("socket server listening on port 9090!");