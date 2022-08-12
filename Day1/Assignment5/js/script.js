// Create an HTML5 page. The page contains a textbox and a button titled Login. Disable the button initially using jQuery. The moment something is typed in the textbox, enable the button. Disable it again if the textbox is empty.


$(document).ready(function(){
    $("#button").attr("disabled",true);
    // var text=$("#textbox").val();
    $("#textbox").keyup(function(){
        if($("#textbox").val().length > 0){
            $("#button").attr("disabled",false);
        }else{
            $("#button").attr("disabled",true);
        }
    })

});