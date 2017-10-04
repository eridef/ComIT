let saludar = (nombre, apellido, tercer) => {
    console.log(`Hola ${nombre} ${apellido}`);
};

let call = () => {
    console.log('Luego de saludar se ejecuta el callback');
};

saludar('Érica', 'Lafuente', call());

//como hago para que se ejecute despues??