let imagenes = ['0byn.jpg', '1byn.jpg', '2byn.jpg', '3byn.jpg'];

let body = document.querySelector('body');

imagenes.forEach(function(foto){
    let imagen = document.createElement('img');
    imagen.src = `img/${foto}`;

    imagen.onmouseover = function(){
        //modifico el nombre de la foto
        const source = imagen.src.replace('byn', '');
        //reemplazo el src
        imagen.src = source;
    }

    imagen.onmouseout = function(){
        //modifico el nombre de la foto
        const source = imagen.src.replace('.jpg', 'byn.jpg');
        //reemplazo el src
        imagen.src = source;
    }

    body.appendChild(imagen);
})
