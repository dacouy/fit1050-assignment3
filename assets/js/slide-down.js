$('#excerpt-container').hide()
$(document).ready(function () {
    $('#hide-show-btn').click(function() {

        
        if($(this).text() === "Show all") {
            $(this).text("Hide events");
            $("html, body").animate({scrollTop: 3600}, '200');
            $('#excerpt-container').slideDown()
        }
        else {
            $(this).text("Show all");
            $('#excerpt-container').slideUp()
        }
    })


})

$(document).ready(function () {
    $('#hide-text').click(function() {
        $('#excerpt-container').slideUp()
        $("html, body").animate({scrollTop: 2900}, '200');
        $('#hide-show-btn').text("Show all");


    })


})