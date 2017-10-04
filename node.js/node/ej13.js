const express = require('express');
const app = express();
const puerto = 3000;
var ruta = require('./ruta');
var rutas = require('./rutas');

app.use('/', ruta);

app.use('/productos', rutas);



app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });