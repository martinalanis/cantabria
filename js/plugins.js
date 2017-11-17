// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


$(document).ready(function () {
    var swiper = new Swiper('#swiper-gallery', {
        direction: 'horizontal',
        // effect: 'fade',
        loop: true,
        autoplay: {
            delay: 5000,
          },
        //Navigation arrows
        navigation: {
          nextEl: '#gallery-next',
          prevEl: '#gallery-prev',
        }
    });

    var swiper = new Swiper('#swiper-servicios', {
        direction: 'horizontal',
        slidesPerView: 5,
        spaceBetween: 80,
        loop: true,
        autoplay: {
            delay: 5000,
          },
        //Navigation arrows
        // navigation: {
        //   nextEl: '#gallery-next',
        //   prevEl: '#gallery-prev',
        // }
    });
});
// Place any jQuery/helper plugins in here.
