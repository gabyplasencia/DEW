/*Actividad 1. 
Programar una página web que permita al usuario abrir una subventana con un formulario de registro 
que una vez confirmado imprima los datos en la ventana principal. La aplicación debe hacer lo siguiente:

Redirigir al usuario a una nueva ventana después de haber pulsado un botón.

Lanzar un mensaje de alerta pidiendo al usuario que confirme que desea abrir una nueva ventana. 

En caso afirmativo, redirigir al usuario al formulario. En caso negativo, emitir una alerta en la
ventana principal indicando que no se pudo completar el registro.

El formulario debe permitir completar nombre, apellidos, dirección (incluyendo calle, 
código postal, localidad y municipio) así como teléfono y correo electrónico.

Una vez validador el formulario los resultados se mostrarán en la ventana principal.*/

var formTab;

function openForm() {

let consent = window.confirm("El formulario se abrira en una ventana nueva. ¿Desea continuar?");

    if(consent == true) {

        let windowWidth = 600;
        let windowHeight = 700;
        let left = (window.screen.width - windowWidth) / 2;
        let top = (window.screen.height - windowHeight) / 2;
    
        let features = "width=" + windowWidth + ",height=" + windowHeight + ",left=" + left + ",top=" + top;
        let url = "http://127.0.0.1:5500/TEMA%203/actividad-practica/form.html";
    
        formTab = window.open(url, "VentanaEmergente", features);

    } else {
        alert("No se pudo completar el registro");
    }

}

const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    //setValues();
    formTab.close();
});
