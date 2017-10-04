var numero = 0;
var asterisco = '***************';

for (var numero = 0; numero <=14 && numero >=0; numero++){
    console.log(asterisco);
    asterisco = asterisco.substr(0, (asterisco.length -1));
}