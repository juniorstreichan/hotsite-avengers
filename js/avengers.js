
var $w = $(window);
var rotacao = 0;
var sentido = 0;
$w.on("scroll", function(){

	if (sentido > $w.scrollTop() ) {
		rotacao = rotacao + 2 ;
	} else {
		rotacao = rotacao - 2 ;
	}

	sentido = $w.scrollTop();
	
	$('.img-rotate').css("transform","rotate("+rotacao+"deg)");
	

	if( $w.scrollTop() > 100 ) {

		$("#nav-topo").css("transition-duration", "0.5s");
		$("#nav-topo").css("opacity", "1"); 
		$("#nav-topo").css("visibility", "visible"); 
		$("#nav-topo").css("height", "70px"); 

		if ($(document).width() < 520) {
			$(".img-bottom").css("opacity", "1"); 
			$(".img-bottom").css("visibility", "visible"); 
			$(".img-bottom").css("display", "block"); 
		}else {
			$(".img-bottom").css("opacity", "0"); 
			$(".img-bottom").css("visibility", "hidden"); 	
			$(".img-bottom").css("display", "none"); 
		}
		$("#btn-up").css("transition-duration", "0.5s");
		$("#btn-up").css("opacity", "1"); 
		$("#btn-up").css("height", "30px"); 

		if( $w.scrollTop() > 150 ) {

			$(".bg-video").css("opacity", "0"); 
		}

	}else {

		$(".bg-video").css("opacity", "0.7"); 

		$("#nav-topo").css("transition-duration", "0.5s");
		$("#nav-topo").css("opacity", "0");
		$("#nav-topo").css("visibility", "hidden"); 
		$("#nav-topo").css("height", "0px"); 

		if ($(document).width() < 520) {
			$(".img-bottom").css("opacity", "0"); 
			$(".img-bottom").css("visibility", "hidden"); 	
			$(".img-bottom").css("display", "none"); 	

		}

		if ($w.scrollTop() < 400) {
			$("#btn-up").css("transition-duration", "2s");
			$("#btn-up").css("opacity", "0"); 
			$("#btn-up").css("height", "0px"); 
		}
	}
	
});


var sinopseVisible = false;
$('#btn-sinopse').click(function() {
	var targetSinopse = $('#btn-sinopse').offset().top;
	var targetAvengers = $('#parallax-avengers').offset().top;
	var doc = $(document);
	if (sinopseVisible) {
		if (doc.width() > 800) {
			$('html,body').animate({scrollTop: targetAvengers - 100}, 600);
		}else {
			$('html,body').animate({scrollTop: targetAvengers - 300}, 600);

		}


		$('#sinopse').css({"visibility": "hidden", "display":"none"});
		sinopseVisible = false;
		$('#btn-sinopse').text("Ver Sinopse");


	}else {


		$('html,body').animate({scrollTop: targetSinopse - 200}, 600);

		$('#sinopse').css({"visibility": "visible", "display":"block"});
		sinopseVisible = true;
		$('#btn-sinopse').text("Esconder");

	}

});


$('.scroll-suave').click(function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop: targetOffset - 50}, 600);
});



