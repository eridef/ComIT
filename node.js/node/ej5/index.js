//importar modulo propio
const esPar = require('./numeros');

//importar modulo logplease
const logplease = require('logplease');
const logger = logplease.create('logger');


let numero = [2, 3, 101, 201, 202, 100];

numero.forEach(function(numero){
    let resultado = esPar(numero);
    //console.log(resultado);
    if (resultado === true){
        logger.info('El número es par');
    }else{
        logger.error('El no número es par')
    }
})
//para que no entre siempre a "true" tuve que especificar el false e igualar la condicion


