var dia = 5;
nombreDelDia = null;

switch (dia){
    case 1:
    nombreDelDia = 'Lunes';
    break;
    case 2:
    nombreDelDia = 'Martes';
    break;
    case 3:
    nombreDelDia = 'Miércoles';
    break;
    case 4:
    nombreDelDia = 'Jueves';
    break;
    case 5: 
    nombreDelDia = 'Viernes';
    break;
    case 6:
    nombreDelDia = 'Sábado';
    break;
    case 7:
    nombreDelDia = 'Domingo';
    break;
    default:
    mensaje = 'Por favor seleccionar un número de 1 a 7';
}

console.log(mensaje);