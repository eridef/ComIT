//de acuerdo con el ejercicio, armar una funcion para suma
	//document.getElementById("num1").value;
	//document.getElementById("num2").value;

function suma (num1, num2) {
	//var numero1 = Number(num1);
	//var numero2 = Number(num2);
 
	var adicion = parseInt(num1) + parseInt(num2);
	document.write(prompt('La suma da como resultado' +' ' + adicion));
	return adicion;
}

