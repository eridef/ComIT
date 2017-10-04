const http = require('http');
const puerto = 3001;

const primerRequerimiento = (request, response) => {  
    console.log(request.url);
    response.end('Bienvenidos a Node.js Server Side');
  }
  
  const server = http.createServer(primerRequerimiento);

  server.listen(puerto, (err) => {  
    if (err) {
      return console.log('No se pudo levantar el servidor en el puerto', puerto)
    }
  
    console.log(`Servidor corriendo en el puerto ${puerto}`);
  })