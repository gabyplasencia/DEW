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

let formTab;
const btnHome = document.querySelector('.btn-home');
const btnRefresh = document.querySelector('.btn-refresh');
const info = document.querySelector('.info');

let nameDisplay = document.getElementById('name-display');
let lastnameDisplay = document.getElementById('lastname-display');
let adressDisplay = document.getElementById('adress-display');
let postcodeDisplay = document.getElementById('postcode-display');
let townDisplay = document.getElementById('town-display');
let cityDisplay = document.getElementById('city-display');
let phoneDisplay = document.getElementById('phone-display');
let emailDisplay = document.getElementById('email-display');

function openForm() {

let consent = window.confirm("El formulario se abrira en una ventana nueva. ¿Desea continuar?");

    if(consent == true) {
        
        let url = "http://127.0.0.1:5500/TEMA%203/actividad-practica/act1/form.html";
    
        formTab = window.open(url, "_self");

    } else {
        alert("No se pudo completar el registro");
    }

}

function refresh() {

    btnHome.classList.remove('hidden');
    info.classList.remove('show'); 
    btnRefresh.classList.add('hidden');

    localStorage.removeItem('name');
    localStorage.removeItem('lastname');
    localStorage.removeItem('adress');
    localStorage.removeItem('postcode');
    localStorage.removeItem('town');
    localStorage.removeItem('city');
    localStorage.removeItem('phone');
    localStorage.removeItem('email');
    localStorage.removeItem('success');
    
}


window.addEventListener('load', () => {

        let name = localStorage.getItem('name');
        let lastname = localStorage.getItem('lastname');
        let adress = localStorage.getItem('adress');
        let postcode = localStorage.getItem('postcode');
        let town = localStorage.getItem('town');
        let city = localStorage.getItem('city');
        let phone = localStorage.getItem('phone');
        let email = localStorage.getItem('email');
        let success = localStorage.getItem('success');

        if(success) {
            btnHome.classList.add('hidden');
            info.classList.add('show');  
            btnRefresh.classList.remove('hidden'); 
            console.log('entra if')
        }
    
        nameDisplay.innerHTML = name;
        lastnameDisplay.innerHTML = lastname;
        adressDisplay.innerHTML = adress;
        postcodeDisplay.innerHTML = postcode;
        townDisplay.innerHTML = town;
        cityDisplay.innerHTML = city;
        phoneDisplay.innerHTML = phone;
        emailDisplay.innerHTML = email;
        console.log('entra load')

})




