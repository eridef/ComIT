const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const puerto = 3000; 

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home')
}) 

app.get('/artistas', function (req, res) {
    res.render('artist')
})

app.get('/estilos', function (req, res) {
    res.render('style')
})

app.use(express.static('public'));

app.listen(puerto, function(err){
    if (err) {
        return console.log('No se pudo levantar el servidor en el puerto', puerto)
      }
    
      console.log(`Servidor corriendo en el puerto ${puerto}`);
});