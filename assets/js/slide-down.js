$(document).ready(function () {
    var $extraEvents = $('#excerpt-container');
    var $toggleButton = $('#hide-show-btn');

    $extraEvents.hide();

    $toggleButton.on('click', function (event) {
        event.preventDefault();

        var isOpen = $toggleButton.attr('aria-expanded') === 'true';

        if (isOpen) {
            $extraEvents.stop(true, true).slideUp();
            $toggleButton.text('Show all').attr('aria-expanded', 'false');
        } else {
            $extraEvents.stop(true, true).slideDown();
            $toggleButton.text('Hide events').attr('aria-expanded', 'true');
            $('html, body').animate({ scrollTop: $('#event').offset().top }, 200);
        }
    });

    $('#hide-text').on('click', function () {
        $extraEvents.stop(true, true).slideUp();
        $toggleButton.text('Show all').attr('aria-expanded', 'false');
        $('html, body').animate({ scrollTop: $('#event').offset().top }, 200);
    });
});
