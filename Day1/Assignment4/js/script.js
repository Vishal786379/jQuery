// Create a style class and name it error, give its border color as red and background color as yellow. Apply this class to a text box when the focus is moved out of it and if the entered data is more than 10.

$(document).ready(function(){
    $('input').change(function(){
        if ($('input').val().length > 10){
            $('input').addClass("error")
        }
    })
})