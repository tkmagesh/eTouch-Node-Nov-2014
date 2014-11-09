var Task = require('../models/Task.js');

var taskList = [
    new Task(1, "Learn JavaScript", false),
    new Task(2, "Read JavaScript Patterns", true),
    new Task(3, "Master Node.js", false)
];

function getAll(){
    return taskList.slice(0);
}

function add(taskName){
    var nextId = taskList.reduce(function(seed,task){ 
        return seed > task.id ? seed : task.id }, 0) + 1;
    
    var newTask = new Task(nextId, taskName, false);
    taskList.push(newTask);
    return newTask;
}

function toggle(id){
    var taskToToggle = taskList.filter(function(task){
        return task.id === id;
    })[0];
    console.log(taskToToggle);
    /*if (taskToToggle)
        taskToToggle.isCompleted = !taskToToggle.isCompleted;*/
    
    taskToToggle.toggle();
    return taskToToggle;
}

module.exports = {
    add : add,
    toggle : toggle,
    getAll : getAll
};
