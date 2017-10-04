const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const puerto = 3000; 
const products = [
  { section: 'MacBook', items: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra'] },
  { section: 'iPad', items: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories'] },
  { section: 'iPhone', items: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories'] }
]

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home')
})  

app.get('/products', function (req, res) {
  res.render('products', { products: products, selected: { products: true }})
})

app.get('/products/:id', function (req, res) {
  const id = req.params.id
  const product = products[id]
  res.render('product', { products: product})
})

app.get('/contact', function (req, res) {
  res.render('contact', { selected: { contact: true } })
})

app.use(express.static('public'));

app.listen(puerto, function(err){
    if (err) {
        return console.log('No se pudo levantar el servidor en el puerto', puerto)
      }
    
      console.log(`Servidor corriendo en el puerto ${puerto}`);
});