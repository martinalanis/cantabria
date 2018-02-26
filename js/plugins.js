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
    var swiperG = new Swiper('#gallery-photos', {
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

    $('#swiper-services').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('#services-prev'),
        nextArrow: $('#services-next'),
        dots: false,
        responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 5,
            }
        }
        ]
        // direction: 'horizontal',
        // slidesPerView: 6,
        // spaceBetween: 60,
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        //   },
        // //Navigation arrows
        // navigation: {
        //   nextEl: '#services-next',
        //   prevEl: '#services-prev',
        // }
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
          clickable: true,
        },
        //Navigation arrows
        navigation: {
          nextEl: '#events-next',
          prevEl: '#events-prev',
        }
    });
});
// Place any jQuery/helper plugins in here.
