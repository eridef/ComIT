var texto = 'Game Of Thrones';
var primerLetra, segundaLetra, tercerLetra;

primerLetra = texto.charAt(0);
segundaLetra = texto.charAt(5);
tercerLetra = texto.charAt(8);

var resultado = primerLetra.concat(segundaLetra, tercerLetra);

console.log(resultado.toUpperCase());
