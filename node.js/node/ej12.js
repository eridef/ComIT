const express = require('express');
const app = express();
const puerto = 3000;


//el string (primer parametro de get) tiene que respetar el formato del archivo ---> ruta
app.get('/api/products', function(req, res){
    res.json({
        descripcion: 'Productos',
        items: [
          { nombre: 'taza de Star Wars' , precio: 300},
          { nombre: 'FIFA 22 PS4' , precio: 1000},
          { nombre: 'Remera superheore' , precio: 100},
          { nombre: 'Bincha de Piñon fijo' , precio: 200},
          { nombre: 'Grande de Muzza' , precio: 120},
          { nombre: 'Botella de Fernet por 1 litro' , precio: 220}
        ]
      });
});

app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });