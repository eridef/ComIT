//estoy escuchando la accion para que se ejecute la funcion 
//alert('hello');

$(document).ready(function(){

$('#mensaje').hide(); //oculto el div

$('#enviar').on('click',function(){

	var user = $('#username').val(); //muestro el valor

	var pass = $('#password').val();

	if(user == "pepe" && pass == "12345"){ //validacion
		$('#mensaje').show(); //muestro el div oculto
		$('#mensaje').append('<p>Bienvenido</p>'); //agregar un elemento html desde jquery
	}else{
		$('#mensaje').show();
		$('#mensaje').append('<p>Falló el logueo</p>');
	}
})
})

/*
Sintáxis JQuery
$(selector).accion();
$ ('tag')/('#id')/('.class').accion();