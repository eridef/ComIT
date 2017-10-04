var numeros = [];
var numero = 0;

while(numero <= 10000){
    numeros.push(numero);
    numero++;
};

var numero = 0;
var sumaParcial = 0;

while (numero <= 10000){
    sumaParcial += numero;
    console.log(sumaParcial);
    numero++;
};

console.log('El resultado final es: ' + sumaParcial);

if (sumaParcial === 50005000){
    console.log('El ejercicio es correcto');
}else{
    console.log('Verificar el ejercicio para obtener el resultado esperado!!!');
};

