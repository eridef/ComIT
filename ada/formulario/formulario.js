//formulario de datos de contacto que devuelva errores en el caso que no se ingrese correctamente lo solicitado
//funcion validar
//nombre
//apellido
//telefono
//mail
//edad (ver si se puede ingresar fecha de nacimiento)
//boton de validación
//agregar un check que visibilice un div con datos a completar de domicilio 

//estética básica (no quiere boostrap)


//seria necesario recorrer el telefono por ejemplo para verificar la cantidad de caracteres
// para validar un mail,se utiliza 'expr' para validar y comprar caracteres ---expresiones regulares 
// la condicion seria !expr.test(email) --- dentro de un if, por ejemplo 


function validar (){

	//se declaran las funciones locales en la general
	//por ejemplo: soloLetras(nombre);

	if (soloLetras(nombre)) {
		return true;
	} return false;
// 
}

function soloLetras(x){
	expr = //buscar la expresion en internet 
	if(!expr.test(x)){
		return true 
	}
}