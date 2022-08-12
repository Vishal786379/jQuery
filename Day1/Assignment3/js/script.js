// Create an HTML5 page which contains a hyperlink. Using jQuery, write code to open Google’s home page in another window when the mouse is hovered over the link.

$(document).ready(function(){
    $("#hyperlink").mouseenter(function(){
        window.open("https://google.com","_blank");
    });
});