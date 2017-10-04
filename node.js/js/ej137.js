var numeros = [];
var numero = 0;

while(numero <= 1000){
    numeros.push(numero);
    numero++;
};

var deADiez = [];
var numero = 0;

while(numero <= 10000){
    deADiez.push(numero);
    numero+=10;
};

function mostrar(){
    for (let indice = 0; indice <= 10; indice++){
        console.log(`Índice: ${indice}` + ' Valor original: ' + numeros[indice] + ' Valor incrementado: ' + deADiez[indice]);
    };
};

mostrar();