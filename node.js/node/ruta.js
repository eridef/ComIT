const express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Página: Home, método: get');
  });
  
router.post('/', function(req, res) {
    res.send('Página: Home, método: post');
  });
  
  module.exports = router;