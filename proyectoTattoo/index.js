const express = require('express');
const exphbs  = require('express-handlebars');
// Obtenemos el objeto MongoClient
const MongoClient = require('mongodb').MongoClient
// Configuramos la url dónde está corriendo MongoDB
const url = 'mongodb://localhost:27017/tattoo';
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const puerto = 3000; 

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('home')
}) 

app.get('/artistas', function (req, res) {
    MongoClient.connect(url, function(error, db) {
        console.log("Conectados a MongoDB");
      var coleccion = db.collection('artistas')
      coleccion.find().toArray(function(err, artistas) {
        //console.log(artistas)
        db.close()
        res.render('artist', { artistas: artistas})
      })
    })
  })

  app.get('/estilos', function (req, res) {
    MongoClient.connect(url, function(error, db) {
        console.log("Conectados a MongoDB");
      var coleccion = db.collection('estilos')
      coleccion.find().toArray(function(err, estilos) {
        //console.log(estilos)
        db.close()
        res.render('style', { estilos: estilos  })
      })
    })
  })


  app.post('/busqueda', function (req, res) {
    const name = req.body.search;
    MongoClient.connect(url, function(error, db) {
        console.log('entré a mongo!!')
      var coleccion = db.collection('todo')
      coleccion.findOne({nombre: name}, function(err, resultado) {
        db.close()
        res.render('search', { resultado: resultado })
      });
    })
  })


app.use(express.static('public'));

app.listen(puerto, function(err){
    if (err) {
        return console.log('No se pudo levantar el servidor en el puerto', puerto)
      }
    
      console.log(`Servidor corriendo en el puerto ${puerto}`);
});