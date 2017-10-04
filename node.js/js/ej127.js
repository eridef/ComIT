var sabores = [];

sabores.push('Banana Split', 'Amarena','Chocolate', 'Tramontana', 'Limón', 'Durazno', 'Granizado', 'Dulce de Leche', 'Vainilla', 'Chocolate Suizo');

//console.log(sabores);

function distinta(){
    sabores = sabores.reverse();
    console.log(sabores);
}

//distinta();

var sinStock = [];


for (let indice = 0; indice < 2; indice++) {
    sinStock = sabores.shift()
    console.log(sinStock);
};

console.log(sabores);