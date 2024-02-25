Contador de Clics

Este es un proyecto simple que implementa un contador de clics utilizando HTML, CSS y JavaScript. El propósito de este código es proporcionar una introducción práctica a la manipulación del DOM y el manejo de eventos en JavaScript.

Instrucciones de Uso

Abre el archivo ejercicio2.html en tu navegador web.
Observa el botón con el texto "Haz clic aquí" y el contador inicializado en 0.
Haz clic en el botón.
Verás cómo el contador se actualiza con cada clic.
Detalles del Código
HTML
html
Copy code
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de clics</title>
</head>
<body>

    <button id="boton">Haz clic aquí</button>
    <p id="contador">0</p>

    <script src="script.js"></script> <!-- Se agrega un archivo de script externo -->

</body>
</html>
JavaScript (script.js)
javascript
Copy code
// Seleccionar el botón y el párrafo del contador
let boton = document.getElementById("boton");
let contador = document.getElementById("contador");

// Inicializar el contador en 0
let count = 0;

// Función para manejar el clic en el botón
function handleClick() {
    count++; // Incrementar el contador
    contador.innerText = count; // Actualizar el contador en la página
}

// Asignar el evento clic al botón utilizando addEventListener
boton.addEventListener("click", handleClick);
Este proyecto es adecuado para aquellos que están aprendiendo JavaScript y desean practicar conceptos básicos de eventos y manipulación del DOM. Puedes personalizar y expandir este código según tus necesidades o utilizarlo como base para proyectos más complejos.