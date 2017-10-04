var sabores = [];

sabores.push('Banana Split', 'Amarena','Chocolate', 'Tramontana', 'Limón', 'Durazno', 'Granizado', 'Dulce de Leche', 'Vainilla', 'Chocolate Suizo');

//console.log(sabores);

function distinta(){
    sabores = sabores.reverse();
    //console.log(sabores);
}

distinta();

var sinStock = [];


for (let indice = 0; indice < 2; indice++) {
    sinStock = sabores.shift()
    console.log(sinStock);
};

//console.log(sabores);

for (let indice = sabores.length -3; indice < sabores.length; indice++){
    sinStock = sabores.pop();
    console.log(sinStock);
};

//si yo guardoen una variable global, no debería guardarme el array anterior??

console.log(sabores);