var numero = 0;
var asterisco = '***************';

do {
    console.log(asterisco);
    numero++;
    asterisco = asterisco.substr(0, (asterisco.length -1));
} while (numero<=14 && numero>=0)
