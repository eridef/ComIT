function obtenerIDUsuario(){
    return 50;   
}
function usuarioValido(){
    if(obtenerIDUsuario()<=30){
        return true;
    }else{
        return false;
    }
}

if (usuarioValido()===true){
    console.log('EL usuario es válido');
}else{
    console.log('EL usuario no es válido');
}

