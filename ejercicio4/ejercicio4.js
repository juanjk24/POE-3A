/* Ejercicio 4: Galería de Imágenes
Crear una galería de imágenes donde al hacer clic en una miniatura, la imagen principal se
actualiza con la imagen seleccionada. Utiliza eventos de clic para manejar la interactividad.
Puedes implementar esto con un bucle o un array de imágenes. */

// obtenemos la imagen principal buscandola por su id correspondiente
let imgPrincipal = document.getElementById("imagen-principal")

// obtenemos todas las imagenes secundarias buscandolas por su id con el metodo (querySelectorAll)
let imgSecundaria = document.querySelectorAll("#imagen-secundaria")

// creamos un bluce el cual va a recorrer una a una las imagenes secundarias
for (let i = 0; i < imgSecundaria.length; i++) {

    // a cada imagen le agregamos un addEventListener, el cual va a escuchar el evento de 'click' y le agregaremos una funcion
   imgSecundaria[i].addEventListener('click', function() {

    //al momento de dar click en una imagen secundaria, se actualizan los atributos 'src' y 'alt' de la imagen principal por la imagen que se haya seleccionado
        imgPrincipal.src = imgSecundaria[i].src;
        imgPrincipal.alt = imgSecundaria[i].alt;
   })
}