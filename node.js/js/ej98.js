var numero = 0;
var resultado = 0;

for (var numero = 0; numero <= 1000 && numero >=0; numero++){
    if (numero<=100 && numero >=0) {
        resultado = resultado + numero;
        console.log(resultado);
    }else{
        break;
    } 
}