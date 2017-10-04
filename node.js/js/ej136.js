var mutantes = [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe'];

let mensaje = '';
let contador = 0;

mutantes.forEach(function(mutante){
    if(mutante === 'Jean Elaine Grey' || mutante === 'James "Logan" Howlett' && contador <= 1){
        mensaje += mutante + ' / '; 
    }else if (mutante === 'Jean Elaine Grey' || mutante === 'James "Logan" Howlett'){
        mensaje += mutante;
    }
    contador++;
});

console.log(mensaje);
