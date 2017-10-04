var numero1 = -1;
var numero2 = 1;
var respuesta = 0;

do {
    respuesta = numero1 + numero2;
    numero1 = numero2;
    numero2 = respuesta;
    console.log(respuesta);   
} while (respuesta<=34)