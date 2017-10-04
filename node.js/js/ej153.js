var aritmetica = {
    suma: function (numero1, numero2){
        if (validarNumeros(numero1, numero2)){
            console.log(numero1 + numero2);
        }else{
            console.log('Por favor introducir números');
        }
    },
    resta: function (numero1, numero2){
        if (validarNumeros(numero1, numero2)){
            if (numero2 < numero1){
                console.log(numero1 - numero2);
            }else{
                console.log(numero2 - numero1);
            }
        }else{
            console.log('Por favor introducir números');
        } 
    },
    multiplicar: function (numero1, numero2){
        if (validarNumeros(numero1, numero2)){
            console.log(numero1 * numero2);
        }else{
            console.log('Por favor introducir números');
        }
    },
    dividir: function (numero1, numero2){
        if (validarNumeros(numero1, numero2)){
            if (numero2 < numero1){
                console.log(numero1 / numero2);
            }else{
                console.log(numero2 / numero1);
            }
        }else{
            console.log('Por favor introducir números');
        }
    },
    mostrarModulo: function (numero1, numero2){
        if (validarNumeros(numero1, numero2)){
            if (numero2 < numero1){
                console.log(numero1 % numero2);
            }else{
                console.log(numero2 % numero1);
            }
        }else{
            console.log('Por favor introducir números');
        } 
    }
};

function validarNumeros(numero1, numero2){
    return typeof numero1 === 'number' && !isNaN(numero1) && typeof numero2 === 'number' && !isNaN(numero2);
    };

aritmetica.suma(2,10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);