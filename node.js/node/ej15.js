const express = require('express'); //manejo los request y response
const app = express();
const puerto = 3000;

var requestTime = function (req, res, next) {
    const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
    console.log(mensaje)
    next();
};

app.use(requestTime)

app.get('/', function(req, res){
    res.json({
        status: 200,
        message: 'Este request/response está OK'
      })
})


app.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  });