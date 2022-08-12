// Create an HTML5 page as follows:
// a. Two empty <div> elements. The id of each must be div1 and div2 respectively.
// b. Two textboxes without ids.
// c. Two textareas without ids.
// d. A button titled Apply Style to TextBoxes. When this button is clicked, draw a red border around each textarea.
// e. A button titled Apply Style to first div . When this button is clicked, write some text only inside the first <div> element.
// f. A button titled Say Hello. When this button is clicked, each textbox and textarea must contain the text HELLO.


// button1 function
$(document).ready(function(){
    $("#button1").on('click',function(){
        $("textarea").css("border","red 5px solid");
    })
});

// button2 function
$(document).ready(function(){
    $("#button2").on('click',function(){
        var value = "This is div 1."
        var text = `<div id = "div1">` +value+`</div>`;
        $("#div1").after(text);
    })
});

// button3 function
$(document).ready(function(){
    $("#button3").on('click',function(){
        $("input").val("HELLO");
        $("textarea").val("HELLO");
    })
});