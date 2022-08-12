$(function () {
    $('#button1').click(function () {
        $('#myp1').fadeIn(2000)
    })

    $('#button2').click(function () {
        $('#myp2').slideDown()
    })

    $('#button3').click(function () {
        $('#myp3').fadeIn(2000,function(){
            $('#myp3').fadeOut(2000)
            })
        })
})