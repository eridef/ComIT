var nacho = ['nacho', 'Nerd1979'];
var pedro = ['pedro', 'Batman0217'];
var marta = ['marta', 'Madre2312'];

function autenticarUsuario(usuario, password){
    if(usuario===nacho[0] && password===nacho[1]){
        console.log('Bienvenido ' + usuario + ', te estabamos esperando');
        return true;
    }else{
        console.log('Por favor ingrese credenciales válidas');
        return false;
    }
}

autenticarUsuario('nacho', 'Nerd1979');
autenticarUsuario('pedro', 'Nerd1979');
autenticarUsuario('marta', 'Nerd1979');

//como usar solo un condicional para los tres usuarios??
