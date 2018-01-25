
function didHitGetStarted() {
    $('body').removeClass('fh5co-offcanvas');
    $('.js-gtco-nav-toggle').removeClass('active');
    $('html, body').animate({
        scrollTop: $('#fh5co-contact').offset().top
    }, 1000);
}