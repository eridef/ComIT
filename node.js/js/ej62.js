var numeroDeMes = 4;
var nombreDeMes = null;
var cantidadDeDias = null;

switch (numeroDeMes){
    case 1:
    nombreDelMes = 'Enero';
    cantidadDeDias = '31 días';
    break;
    case 2:
    nombreDelMes = 'Febrero';
    cantidadDeDias = '28/29 días';
    break;
    case 3:
    nombreDelMes = 'Marzo';
    cantidadDeDias = '31 días';
    break;
    case 4:
    nombreDelMes = 'Abril';
    cantidadDeDias = '30 días';
    break;
    case 5:
    nombreDelMes = 'Mayo';
    cantidadDeDias = '31 días';
    break;
    case 6:
    nombreDelMes = 'Junio';
    cantidadDeDias = '30 días';
    break;
    case 7:
    nombreDelMes = 'Julio';
    cantidadDeDias = '31 días';
    break;
    case 8:
    nombreDelMes = 'Agosto';
    cantidadDeDias = '31 días';
    break;
    case 9:
    nombreDelMes = 'Septiembre';
    cantidadDeDias = '30 días';
    break;
    case 10:
    nombreDelMes = 'Octubre';
    cantidadDeDias = '31 días';
    break;
    case 11:
    nombreDelMes = 'Noviembre';
    cantidadDeDias = '30 días';
    break;
    case 12:
    nombreDelMes = 'Diciembre';
    cantidadDeDias = '31 días';
    break;
}

if (numeroDeMes<=12){
    console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias}`);
}else{
    console.log('Ingrese un número del 1 al 12');
}