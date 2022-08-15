$(document).ready(() => {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        success: (data) => {
            $.each(data, (key, value) => {
                $('select').append("<option>" + value.title + "</option>")
            })
        }
    })
})