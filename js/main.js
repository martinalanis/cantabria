$(window).on('load', function(){
	$('#logo').addClass('animatelogo');
	$('#btn-home').addClass('fadeInUp');
	// alert('load');
});

$(window).scroll( function(){
	$('.animated').each( function(i){
	  var bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
	  var bottom_of_window = $(window).scrollTop() + $(window).height();

	  if( bottom_of_window > bottom_of_object ){
	    $(this).addClass(" animated fadeIn");
	  }
	});
});

