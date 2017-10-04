function mostrarNumeros(inicio, fin){
    if(inicio < (fin + 1)){
        while (inicio <= fin){
            console.log(inicio);
            inicio++;
        }
    }else if (inicio > fin){
        while (inicio > fin && fin >= 0){
            console.log(inicio);
            inicio--;
        }
    }else if (inicio===fin){
        console.log('Los numeros son iguales');
    }else{
        console.log('Esta función espera valores del tipo number');
    };
};

mostrarNumeros(10, 00);
