var express = require("express");
var taskService =require("../services/tasks");
var routes = express.Router();



//index - list the tasks
routes.get('/', function(req,res){
    var viewData = {
        tasks : taskService.getAll()
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

routes.get('/toggle/:id', function(req,res){
    var id = parseInt(req.params.id,10);
    var toggledTask = taskService.toggle(id);
    console.log(toggledTask);
    res.json(toggledTask);
});
module.exports = routes;