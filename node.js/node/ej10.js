//no lo probé en Postman, no tengo internet

const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', function(req, res){
    res.send('Bienvenide, utilizaste la ruta GET');
});

app.get('/productos', function(req, res){
    res.send('listado de productos');
});

app.post('/productos', function(req, res){
    res.send('crear producto');
});

app.put('/productos', function(req, res){
    res.send('actualizar un producto');
});

app.delete('/productos', function(req, res){
    res.send('borrar un producto');
});

app.get('/usuarios', function(req, res){
    res.send('listado de usuarios');
});

app.post('/usuarios', function(req, res){
    res.send('crear usuario');
});

app.put('/usuarios', function(req, res){
    res.send('actualizar un usuario');
});

app.delete('/usuario', function(req, res){
    res.send('borrar un usuario');
});

app.all('/productos', function(req, res){
    res.send('maneja todos los verbos http');
});

app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });