var numero = 1;
var resultado = 0 + numero;

while (numero<=1000 && numero>=0 (numero % 2) != 0){
    resultado += numero;
    console.log(resultado);
    numero+=2;
}

//manera Nico de resolver

var numero = 0;
var resultado = 0 + numero;

while (numero<=1000 && numero>=0){
    if ((numero%2) !== 0){
        resultado += numero;
        console.log(resultado);
    }
    numero++;
}