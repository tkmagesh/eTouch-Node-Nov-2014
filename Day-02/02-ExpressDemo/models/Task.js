function Task(id, taskName, isCompleted){
    this.id = id;
    this.name = taskName;
    this.isCompleted = isCompleted;
    
    //default
    //return this;
}
Task.prototype.toggle = function(){
    this.isCompleted = !this.isCompleted;
}
module.exports = Task;