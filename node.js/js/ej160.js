var propiedades = ['nombre', 'precio', 'cantidadVendida', 'localidad'];

var juegos = [{
        nombre: 'Super Mario Bros',
        precio: 200,
        cantidadVendida: 12,
        localidad: 'Capital Federal'
    },
    {
        nombre: 'Mortal Combat',
        precio: 250,
        cantidadVendida: 82,
        localidad: 'Esquel'
    },
    {
        nombre: 'Guitar Hero',
        precio: 700,
        cantidadVendida: 32,
        localidad: 'Entre Ríos'
    },
    {
        nombre: 'FIFA 2017',
        precio: 400,
        cantidadVendida: 45,
        localidad: 'Lanús'
    } 
];


juegos.forEach(function(juego) {
    propiedades.forEach(function(propiedad){
        console.log(juego[propiedad]);
    })
});
    
