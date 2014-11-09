var express = require("express");
var routes = express.Router();

var taskList = [
    'Learn JavaScript',
    'Explore Angular.js',
    'Master Node.js'
];

//index - list the tasks
routes.get('/', function(req,res){
    var viewData = {
        tasks : taskList
    };
    res.render('tasks/index',   viewData);
});



//add[get] - screen to add a new task
routes.get('/new',function(req,res){
    res.render('tasks/new');
});

//add[post] - save the new task
//            - redirect to index
routes.post('/new',function(req,res){
    console.log(req.body);
    res.redirect('/tasks');
});

//remove[get] - show a confirm for removal

//remove[post] - remove the completed tasks
//            - redirect to index

//toggle/id[get] - toggle task status
//            - redirect to index

module.exports = routes;