$(window).on('load', function(){
	$("#preloader").fadeOut('slow');
	$('#logo').addClass('animatelogo');
	$('#btn-home').addClass('fadeInUp');
	// alert('load');
});

$(window).scroll( function(){
	$('.animated').each( function(i){
	  var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
	  var bottom_of_window = $(window).scrollTop() + $(window).height();

	  if( bottom_of_window > bottom_of_object ){

	  	switch($(this).attr('id')) {
	  		case 'comida-plato': 
	  		case 'servicios-wrap': $(this).addClass(" animated fadeInUp");break;
	  		case 'comida-text': $(this).addClass(" animated fadeInDown");break;
	  		case 'flores': $(this).addClass(" animated fadeInLeft");break;
	  		case 'iphone': setTimeout( function(){$('#iphone').addClass(" animated fadeIn");}, 500);break;
	  		default: $(this).addClass(" animated fadeIn");break;
	  	}

	  }
	});
});

$(".menu-icon").click(function(e){
	e.preventDefault();
	$("nav.menu").addClass('visible');
});

$('.menu a, #btn-home').on('click', function(event) {
    
    event.preventDefault();
    // alert(window.innerWidth);
    var $href = $(this).attr('href');

    if(window.innerWidth < 767) {
    	$href = "#galeria";
    }

    $('html, body').stop().animate({
      scrollTop: $($href).offset().top
    }, 1000);
    $("nav.menu").removeClass('visible');
  });

