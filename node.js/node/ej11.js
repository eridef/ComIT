const express = require('express'); //manejo los request y response
const app = express();
const puerto = 3000;
const path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

//el string (primer parametro de get) tiene que respetar el formato del archivo ---> ruta
app.get('/productos', function(req, res){
    res.sendFile(path.join(__dirname, 'productos.html'));
});

app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });