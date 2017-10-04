var numero = 0;
var arrayDeNumeros = [];

while (numero <= 1000){
    arrayDeNumeros.push(numero);
    numero++;
};

var arrayDeNumerosPares = [];


arrayDeNumeros.forEach(function(numero){
    if ((numero % 2) == 0){
        arrayDeNumerosPares.push(numero);
    }
});

for (let indice = arrayDeNumerosPares.length - 10; indice < arrayDeNumerosPares.length; indice++){
    console.log(arrayDeNumerosPares[indice]);
}


var arrayDeNumerosImpares = [];

arrayDeNumeros.forEach(function(numero){
    if ((numero % 2) !== 0){
        arrayDeNumerosImpares.push(numero);
    }
});

for (let indice = arrayDeNumerosImpares.length - 10; indice < arrayDeNumerosImpares.length; indice++){
    console.log(arrayDeNumerosImpares[indice]);
}