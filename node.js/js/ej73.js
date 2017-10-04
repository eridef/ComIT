/*var numero = 0;
var asterisco = '***************';

while (numero<=14 && numero>=0){
    console.log(asterisco);
    numero++;
    asterisco = asterisco.substr(0, (asterisco.length -1));
}
*/

//modo Nico: da vuelta 
var linea = 8;

while (linea >= 1){
    //console.log(linea);
    var cantidadDeCaracteres = 1;
    var asterisco = '';
    while (cantidadDeCaracteres <= linea){
        asterisco += '*';
        cantidadDeCaracteres++;
    }
    console.log(asterisco);
    linea--;
}