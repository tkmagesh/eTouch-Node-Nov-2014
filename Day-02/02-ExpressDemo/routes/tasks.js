var express = require("express");
var routes = express.Router();

routes.get('/', function(req,res){
    res.write("<h1>Task Manager</h1>");
    res.end();
});

module.exports = routes;