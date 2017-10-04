var mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];

let masMutantes = [];
var mutanteModificado = null;


mutantes.forEach(function(mutante){
        if (mutante === 'Prof. Charles Francis Xavier' || mutante === 'James "Logan" Howlett' || mutante === 'Jean Elaine Grey'){
            mutanteModificado = mutante.toUpperCase();
            masMutantes.push(mutanteModificado);
        }else{
            masMutantes.push(mutante);
        }
});

console.log(masMutantes);

mutantesCorazon = [];

mutantes.forEach(function(mutante){
    if (mutante === 'Lorna Sally Dane' || mutante === 'Suzanne Chan'){
        mutante += ' <3 ';
        mutantesCorazon.push(mutante);
    }else{
        mutantesCorazon.push(mutante);
    }
})

console.log(mutantesCorazon);