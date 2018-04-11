

$("#btn-captain").click(function() {
	$('#modal-captain').css('display', 'block'); 
	travaSroll();
});

$("#btn-thor").click(function() {
	$('#modal-thor').css('display', 'block'); 
	travaSroll();
});

$("#btn-iron").click(function() {
	$('#modal-iron').css('display', 'block'); 
	travaSroll();
});

$("#btn-hulk").click(function() {
	$('#modal-hulk').css('display', 'block'); 

});

$("#btn-spider").click(function() {
	$('#modal-spider').css('display', 'block'); 

});



$('.close').click(function(event) {
	$('#modal-captain').css('display', 'none');
	$('#modal-thor').css('display', 'none');
	$('#modal-iron').css('display', 'none');
	$('#modal-hulk').css('display', 'none');
	$('#modal-spider').css('display', 'none');

});

$('#ch-filme').click(function() {
	if ($(this).is(':checked')) {
		$("#dia").css("visibility", "visible"); 
		$("#dia").css("display", "block");
	}else {
		$("#dia").css("visibility", "hidden"); 
		$("#dia").css("display", "none");
	}
});


$(document).ready(function(){
	$('#ch-filme').attr("checked", false);	
});

