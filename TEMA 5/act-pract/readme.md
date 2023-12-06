Actividad 1. Utiliza el siguiente código para observar cómo se puede manejar el modelo de captura de eventos o de burbujeo según el modelo de registro avanzado de eventos:

<div id="principal"> Este es el contenedor principal <div id="secundario"> Este es el contenedor secundario <input id="miboton" type="button" value="OK"> </div> </div>

Y el archivo .js:


window.onload = function() { document.getElementById("principal").addEventListener("click", function () { alert("Pulsado el contenedor principal"); }, false); // estamos utilizando burbujeo document.getElementById("secundario").addEventListener("click", function () { alert("Pulsado el contenedor secundario"); }, false); // estamos utilizando burbujeo document.getElementById("miboton").addEventListener("click", function () { alert("Pulsado el botón"); }, false); // estamos utilizando burbujeo }

Prueba que funciona el código tal y como está configurado para manejar el evento mediante el método del burbujeo. Luego cambia el método de burbujeo por el de captura.

Actividad 2. Modifica la actividad anterior con la siguiente línea de código y configura la propagación para captura. A continuación, haz clic en el contenedor primario ¿qué función cumple la modificación realizada?


document.getElementById("secundario").addEventListener("click", function (e) { alert("Pulsado el contenedor secundario y paramos la propagación"); e.stopPropagation(); }, true);

Actividad 3. Crea una página que tenga un campo de entrada de texto. Muestra un mensaje de alerta cuando se presione una tecla dentro del campo.

Actividad 4. Crea una página HTML con un cuadrado de color inicialmente rojo. Al hacer clic en el cuadrado, cambia su color a azul. Agrega un evento que al pasar el ratón sobre el cuadrado y salir muestre "¡Ratón fuera del cuadrado!".

Actividad 5. Crea una web en la que al mover el ratón se muestre en un div la información sobre sus coordenadas.

Actividad 6. Modifica el ejercicio anterior y añade funcionalidad de modo que cuando se pulse una tecla se muestre en el div la tecla pulsada. Añade también un evento para cambiar el div con un mensaje de "clic en el ratón".


Actividad 7. Crea una página HTML con tres enlaces. Al hacer clic en cada enlace, muestra un mensaje indicando que se ha hecho clic y evita la acción predeterminada del enlace utilizando el método preventDefault().

Actividad 8. Crea una página HTML con un botón. Al hacer clic en el botón, se debería mostrar un mensaje indicando que se ha hecho clic. Además, después del primer clic, el evento de clic debería desactivarse mediante removeEventListener(), y ya no se mostrará el mensaje en clics posteriores.

Actividad 9. Crea una galería de imágenes con miniaturas. Al hacer clic en una miniatura, muestra la imagen completa en un área principal. Además, añade eventos para navegar entre las imágenes usando las teclas de flecha izquierda y derecha.