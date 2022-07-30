// Modal

$(document).ready(function() {
    $('[data-modal=modal]').on('click', function() {
        $('.overlay, #modal').fadeIn('slow');
    });
    $('.modal_close, .overlay').on('click', function() {
        $('.overlay, #modal').fadeOut('slow');
    });

});