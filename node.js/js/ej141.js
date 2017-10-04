var gastos = [100, 1000, 200];

var suma = gastos.reduce(function(total, precios){
    return total +  precios;
});

console.log(suma);