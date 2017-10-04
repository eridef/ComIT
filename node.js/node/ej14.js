const express = require('express'); //manejo los request y response
const app = express();
const puerto = 3000;
const path = require('path');

app.get('/', function(req, res){
    res.status(200).send('Este request/response está OK');
});

//el string (primer parametro de get) tiene que respetar el formato del archivo ---> ruta
app.get('/productos', function(req, res){
    res.status(500).send('Ha ocurrido un error de servidor');
});

app.get('/contacto', function(req, res){
    res.status(404).send('404 No encontrado');
})

app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });