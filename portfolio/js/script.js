$(function(){
    $("#bt").click(function(){
        $("#i").hide();
        chege();
    });
    $("#bt1").click(function(){
        $("#i").show();
        chege();
    });
    $("#mr").mouseenter(function(){
        $("#mr").css("color", "yellow"); 
    });

    $("#mr").mouseleave(function(){
        $("#mr").css("color", "red"); 
    });
});

