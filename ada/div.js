//de acuerdo con el ejercicio, armar una funcion para división
// validar que no este dividiendo por cero, validar caracteres 
function division (num1,num2){
	 
		if(num1==0 || num2==0){
			document.write('Los números deben ser distintos de cero')
		}else{
			var div = parseInt(num1) / parseInt(num2);
			document.write('La división da como resultado' + ' ' + div);
		}

	return div;
}

