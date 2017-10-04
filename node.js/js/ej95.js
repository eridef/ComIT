var numero1 = -1;
var numero2 = 1;
var respuesta = 0;

for (var numero1 = -1; respuesta<=34; ){
    respuesta = numero1 + numero2;
    numero1 = numero2;
    numero2 = respuesta;
    console.log(respuesta); 
}