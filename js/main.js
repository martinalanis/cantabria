$(window).on('load', function(){
	$("#preloader").fadeOut('slow');
	$('#logo').addClass('animatelogo');
	$('#btn-home').addClass('fadeInUp');
	// alert('load');

	var i = 0;
	var txt = 'ANTABRIA'; /* The text */

	function typeWriter() {
	  if (i < txt.length) {
	    document.getElementById("logo-text").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, 150);
	  }
	}

	setTimeout(typeWriter, 800);
	
});

$("#btn-home").click(function(e){
	e.preventDefault();
	goTo($(this).attr('href'));
});
