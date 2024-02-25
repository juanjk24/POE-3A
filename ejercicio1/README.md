
Ejercicio 1: Botón de Colores
Este es un simple ejercicio de HTML, CSS y JavaScript que crea un botón interactivo para cambiar el color de fondo de dicho botón de forma aleatoria.

Instrucciones de Uso
Abre el archivo index.html en tu navegador web.
Haz clic en el botón etiquetado como "Cambiar color".
Observa cómo el color de fondo del botón se transforma en un color aleatorio.
Detalles del Código
HTML
html
Copy code
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1: Botón de Colores</title>
    <link rel="stylesheet" href="styles.css"> <!-- Agregamos un archivo de estilo externo -->
</head>
<body>

    <button id="boton-color" onclick="cambiarColor()">Cambiar color</button>

    <script src="script.js"></script> <!-- Agregamos un archivo de script externo -->

</body>
</html>
CSS (styles.css)
css
Copy code
#boton-color {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}
JavaScript (script.js)
javascript
Copy code
// Función para cambiar el color de forma aleatoria
function cambiarColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + "," + g + "," + b + ")";
    
    // Cambiamos el color de fondo del botón
    document.getElementById("boton-color").style.backgroundColor = color;
}

// Asignación dinámica del evento de clic al botón
document.getElementById("boton-color").addEventListener("click", cambiarColor);
En este ejercicio, hemos organizado el código en tres partes: el archivo HTML (index.html), el archivo de estilo CSS (styles.css), y el script de JavaScript (script.js). Esta separación mejora la legibilidad y mantenimiento del código.