$(function(){
    $("#olTaskList").on("click", "li span", function(){
        var $this = $(this);
        var id = $this.parent('li').attr('taskid');
        $.ajax({
            url : '/tasks/toggle/' + id,
            method : 'get',
            dataType : 'json',
            contentType : 'application/json',
            success : function(res){
                $this.toggleClass("completed");
            }
        });
    });
});