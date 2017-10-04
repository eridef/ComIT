const express = require('express');
const app = express();
const puerto = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });