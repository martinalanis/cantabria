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

function goTo(section){
    $('html, body').stop().animate({
        scrollTop: $(section).offset().top -80
    }, 1000);
}


$(document).ready(function () {
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 300,
        'tolerance': 70
    });

    // Toggle button
    document.querySelector('.menu-icon').addEventListener('click', function() {
        slideout.toggle();
    });

    /***Close side menu clicking on panel****/

    function close(eve) {
        eve.preventDefault();
        slideout.close();
    }

    slideout
    .on('open', function() {
        $(".links p").addClass('fadeInLeft');
        this.panel.addEventListener('click', close);
    })
    .on('beforeclose', function() {
        $(".links p").removeClass('fadeInLeft');
        $(".links p").addClass('animated');
        this.panel.removeEventListener('click', close);
    });

    $(".links a").click(function(e){
        e.preventDefault();
        slideout.close();
        setTimeout(() => {

            goTo($(this).attr('href'));

        }, 300);
        
    });

    /***Repositioning fixed menu*****/

    var fixed = document.querySelector('.menu-icon');

    slideout.on('translate', function(translated) {
        fixed.style.transform = 'translateX(' + translated + 'px)';
    });

    slideout.on('beforeopen', function () {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(300px)';
    });

    slideout.on('beforeclose', function () {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(0px)';
    });

    slideout.on('open', function () {
        fixed.style.transition = '';
    });

    slideout.on('close', function () {
        fixed.style.transition = '';
    });


    new WOW().init();

    $("#menu-plato").lightGallery({
        mode: 'lg-fade'
    });

    $("#galeria").lightGallery({
        mode: 'lg-fade',
        selector: 'a'
    });

    $('#gallery-photos, #gallery-photos3').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 600,
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
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
            }
        }
        ]
    });

    $('#gallery-photos2').slick({
        lazyLoad: 'ondemand',
        rtl: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 600,
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
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 5,
            }
        }
        ]
    });


    $('#swiper-services').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        prevArrow: $('#services-prev'),
        nextArrow: $('#services-next'),
        dots: false,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 4,
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

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

});
// Place any jQuery/helper plugins in here.
