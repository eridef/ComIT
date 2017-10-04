let saludador = require('./saludador');

let call = () => {
    console.log('Luego de saludar se ejecuta el callback');
};

saludador('Érica', 'Lafuente', call());


//se me ejecuta antes el call