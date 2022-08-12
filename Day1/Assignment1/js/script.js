// // Create an HTML5 page which contains a textbox. User enters an email id in the textbox. 
// Create a <div> element below the textbox. Create a button titled Show Email. 
// When the button is clicked, the entered email must be displayed inside the <div> element.
// a. Using jQuery, attach a click event handler to the button.
// b. Using jQuery, get the value of the textbox.
// c. Using jQuery, display the email inside the <div> element.

$(document).ready(function(){
    $("#button").on("click", function(){
        var value = $("#textbox").val();
        var email = `<div id = "mydiv">` +value+`</div>`;
        $("#mydiv").after(email);
    })
});