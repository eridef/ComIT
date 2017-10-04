var usuario = {
    username: 'batman',
    password: 'Alfred1960KPO!'
};

if (autenticarUsuario(usuario.username, usuario.password) === true){
    console.log(usuario.username);
    console.log(usuario.password);
}else{
    console.log('Usuario no autenticado');
}

function autenticarUsuario (nombreDeUsuario, clave){
    if (nombreDeUsuario === 'batman' && clave === 'Alfred1960KPO!'){
        return true;
    }else{
        return false;
    }
}