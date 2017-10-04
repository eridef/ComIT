var numero1 = -1;
var numero2 = 1;
var respuesta = null;

while (respuesta<=34){
    respuesta = numero1 + numero2;
    numero1 = numero2;
    numero2 = respuesta;
    console.log(respuesta);   
}
