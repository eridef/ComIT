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

function autenticarUsuario (usuario){
    if (usuario.username === 'batman' && usuario.password === 'Alfred1960KPO!'){
        return true;
    }else{
        return false;
    }
}


//hay algo que no va!!