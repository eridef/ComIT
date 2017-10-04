var numero = 0;
var resultado = 0;

for (var numero = 0; numero <= 1000 && numero >=0 && (numero % 2 == 0); numero+=2){
    if (numero<=20 && numero >=0) {
        resultado = resultado + numero;
        console.log(resultado);
    }else{
        break;
    } 
}

//ver los ejercicios

