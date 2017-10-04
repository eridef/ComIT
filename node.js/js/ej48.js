var mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
var pi = parseFloat(mensaje.substr(0,4));
var significadoDeLaVida = parseInt(mensaje.slice(38,40));
var resultado = pi + significadoDeLaVida;

console.log(resultado);

console.log(resultado.toString().concat(` es el resultado de sumar las variables ${pi} y ${significadoDeLaVida}.`));



