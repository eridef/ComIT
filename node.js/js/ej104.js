var fibonacci = function(){
    let numero2 = 1;
    let respuesta = 0;
    
    for (var numero1 = -1; respuesta<=34; ){
        respuesta = numero1 + numero2;
        numero1 = numero2;
        numero2 = respuesta;
        console.log(respuesta); 
    }
}; //me tira error si pongo un punto y coma acá ---> ya no :/

fibonacci();
fibonacci();
fibonacci();