var numero = null;

//function validarNumero(){
 //   numero !== NaN;
//}

function numeroMasGrande(numero1, numero2){
    if(numero !== NaN){
        if(numero1>numero2){
            console.log('El número ' + numero1 + ' es más grande que ' + numero2);
        }else if(numero1<numero2){
            console.log('El número ' + numero2 + ' es más grande que ' + numero1);
        }else{
            console.log('Los dos números son ' + numero1);
        }
    }else{
        console.log('Esta función espera valores del tipo number');
    }
};

numeroMasGrande(20, 7);