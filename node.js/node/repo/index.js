const express = require('express')
console.log(express);

const obtenerPrecio = require('./calcular')
const precio = obtenerPrecio(200);
console.log(precio);