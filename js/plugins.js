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
    var swiperG = new Swiper('#swiper-gallery', {
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

    var swiperS = new Swiper('#swiper-services', {
        direction: 'horizontal',
        slidesPerView: 6,
        spaceBetween: 60,
        loop: true,
        autoplay: {
            delay: 5000,
          },
        //Navigation arrows
        navigation: {
          nextEl: '#services-next',
          prevEl: '#services-prev',
        }
    });

    var swiperE = new Swiper('#swiper-events', {
        direction: 'horizontal',
        // effect: 'fade',
        loop: true,
        autoplay: {
            delay: 5000,
          },
        // If we need pagination
        pagination: {
          el: '#pagination-events',
        },
        //Navigation arrows
        navigation: {
          nextEl: '#events-next',
          prevEl: '#events-prev',
        }
    });
});
// Place any jQuery/helper plugins in here.
