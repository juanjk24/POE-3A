/* Ejercicio 5: Menú de Navegación Interactivo
Diseñar un menú de navegación con al menos tres enlaces. Implementa un efecto visual
(cambio de color, resaltado, etc.) cuando el usuario pasa el ratón sobre cada enlace. Utiliza
eventos de ratón para lograr este efecto. Además, añade una transición suave para mejorar la
experiencia del usuario.
 */

//obtenemos todos los links buscandolos por su id con el metodo (querySelectorAll)
let links = document.querySelectorAll('#link')

//// creamos un bluce el cual va a recorrer cada link
for (let i = 0; i < links.length; i++) {

    //a cada link le agregamos un addEventListener de tipo 'mouseover' que llamará a la funcion cambiarEstilos
    //el addEventListener de tipo 'mouseover' se llama cuando el usuario pasa o mantiene el cursor sobre el elemento
    links[i].addEventListener('mouseover', cambiarEstilos)

    //luego a cada link agregamos otro addEventListener de tipo 'mouseout' que llamará al metodo devolverEstilos
    //el addEventListener de tipo 'mouseout' se llama cuando el usuario quita el cursor fuera el elemento
    links[i].addEventListener('mouseout', devolverEstilos)
}

/* la funcion cambiarEstilos recibe el evento como parametro y busca el elemento y accede a su propiedad de estilos
en este caso accedemos al color de la letra, al color de fondo y a la transicion para que cambie de color por el que deseemos */
function cambiarEstilos(event) {
    event.target.style.color = 'yellow';
    event.target.style.backgroundColor = 'black';
    event.target.style.transition = '.5s';
}

/* la funcion devolverEstilos hace lo mismo que la anterior funcion pero esta despues de 1 milisegundo (usando una funcion de setTimeout) devuelve a los estilos que tenia al principio,
 */
function devolverEstilos(event){
    setTimeout(function(){
        event.target.style.color = 'white';
        event.target.style.backgroundColor = 'blueviolet';
    }, 100)
}