$(document).ready(() => {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        success: (data) => {
            $.each(data, (key, value) => {
                if (value.completed) {
                    $('select').append("<option>" + value.title + "</option>")
                } else {
                    $('ol').append("<li>" + value.title + "</li>")
                }
            })
        }
    })
})