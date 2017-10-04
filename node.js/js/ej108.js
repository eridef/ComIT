function ordenarNúmeros(numero1, numero2, numero3, descendente){
    if(descendente===true){
        console.log(numero3, numero1, numero2);
    }else{
        console.log(numero2, numero1, numero3);
    }
}

ordenarNúmeros(10, 8, 25, true);
