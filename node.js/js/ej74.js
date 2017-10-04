/*var numero = 0;
var asterisco = '*';


while (numero<=10 && numero>=0){
    console.log(asterisco);
    numero++;
    asterisco += '**';
}*/

//modo Nico: muestra solo los impares

let linea = 0;

while (linea <= 8){
    var cantidadDeCaracteres = 1;
    var asterisco = '';
    while (cantidadDeCaracteres <= linea && (linea % 2) != 0){
        asterisco += '*';
        cantidadDeCaracteres++;
    }
    console.log(asterisco);
    linea++;
};