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

$('.slide-toggle-modal-service').click(function(){

	var $title = $(this).data('title');
    var $info = $(this).data('info');
    var $icon = $(this).data('icon');

    if( $icon.startsWith('fa') ){
        $('#icon-modal').addClass($icon);                  
    }else{
        $('#img-modal-service').attr('src', $icon);
        $('#icon-modal-container').addClass('plr-7');
    }

    $('#title-modal-service').html($title);
    $('#info-modal-service').html($info);

    $('#modal-services').modal();
 

});

$('#modal-services').on('hidden.bs.modal', function (e) {
    $('#title-modal-service').html('');
    $('#info-modal-service').html('');
    $('#icon-modal').attr('class', '');
    $('#img-modal-service').attr('src', '');
    $('#icon-modal-container').removeClass('plr-7');
});
