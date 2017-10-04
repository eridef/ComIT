var alumnas = ['Caro', 'Meli', 'Emi', 'Xibelys', 'Andy'];
var alumnos = ['Cris', 'Jonas', 'Uriel', 'Mati', 'Eze'];

var todosJuntos = alumnas.concat(alumnos);
//console.log(todosJuntos);

//para alumnas

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

//para alumnos

let indice = 0;

while(indice < alumnos.length){
    console.log(alumnos[indice]);
    indice++;
}

for (let indice = 0; indice < todosJuntos.length; indice++){
    console.log(todosJuntos[indice]);
    indice++;
}