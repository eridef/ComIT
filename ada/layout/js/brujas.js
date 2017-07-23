//alert('hello');

var options = ['uno', 'uno', 'uno', 'uno'];

$(document).ready(function(){

	var select = $('#seleccion'); //-----> objeto html

	for(i=0; i<options.length; i++){

		value = i + 1;
		var option = '<option value="'+value+'">'+options[i]+'</option>';
		select.append(option);
	}




$('.img_peque').on('click', function(){
	id=$(this).data('img');
	url='img/'+id;
	console.log(url);
	$('#img_grande').attr('src', url);
	});


$('.menu').on('click', function(e){
	e.preventDefault();
	link = $(this).attr('href'); 
	$('html, body').animate({
		scrollTop:$(link).offset().top
	}, 5000);

});


/*$('#slider').on('click', function(){
	id=$(this).data('img');
	url='img/'+id;
	$('#slider').attr('src', url);
	});

	este codigo sirve para cambiar la imagen sin efecto
	*/



//var boton = $('#slider');
//boton.on('mouseenter', function(){
$('#imagen').on('click' , function(){

	$('#slider').fadeOut(500, function(){
		url= $(this).data('img');
		url_otra= $('#slider').attr('src');
		console.log(url);
		$('#slider').attr('src' , url);

		$('#slider').fadeIn('slow' , function(){
			$('#slider').data('img', url_otra);
		})
	});
})

});


