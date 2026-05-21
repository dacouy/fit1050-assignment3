function scrollDown() {
    $("html, body").animate({scrollTop: 2900}, '200');
}

$(".event-section").on("click", function(e) {
    e.preventDefault();
    scrollDown();
});


