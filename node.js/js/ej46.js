var usuarioYPassword = 'pepito2017,12345';
var nombreDeUsuario = usuarioYPassword.substr(0,10);
var password = usuarioYPassword.substr(11,5);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);
