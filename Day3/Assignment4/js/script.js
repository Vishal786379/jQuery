$(document).ready(() => {
    $(':button').click(() => {
        let uID = $('#uID').val()
        let title = $('#title').val()
        let checkbox = $('#completed').is(":checked")
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            type: "POST",

            data: {
                uID: uID,
                title: title,
                checkbox: checkbox
            },
            success: function (response) {
                document.write("Your data is successfully loaded")
            }
        })
    })
})
