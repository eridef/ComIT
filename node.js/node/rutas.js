const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Página: Productos, método: get');
  });
  
router.post('/', function(req, res) {
    res.send('Página: Productos, método: post');
  });

router.put('/', function(req, res) {
    res.send('Página: Productos, método: put');
  });
  
router.delete('/', function(req, res) {
    res.send('Página: Productos, método: delete');
  });
  
  module.exports = router;