var usuario = {
    username: null,
    password: null,
    saludar: function(username){
        if (username !== null){
            console.log('Hola, soy el usuario ' + username);
        }else{
            console.log('Este usuario no tiene username');
        }
        
    },
    updaterUsername: function(nombreDeUsuario){
        usuario.username = nombreDeUsuario;
    },
    updatePassword: function(nombreDeUsuario){
        usuario.password = nombreDeUsuario;
    }
};

usuario.saludar('erica');
usuario.updaterUsername('erica');
usuario.updatePassword('1234');
console.log(usuario.username);
console.log(usuario.password);