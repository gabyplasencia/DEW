const form = document.getElementById('form');

const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const edad = document.getElementById('edad');
const nif = document.getElementById('nif');
const email = document.getElementById('email');
const provincia = document.getElementById('provincia');
const fechaNac = document.getElementById('fec-nac');
const telefono = document.getElementById('telefono');
const horaVisita = document.getElementById('hora-visita');
const intentos = document.getElementById('intentos');

/*Para modificar los intentos, creo un array y paso a numero el valor de la cookie */
let cookie = document.cookie = "intentos = 0";
let cookieArray = cookie.split("=");
let numeroIntentos = parseInt(cookieArray[1]);

/* El evento submit llamara a las validaciones*/
form.addEventListener('submit', e => {
    e.preventDefault();
    
    /*Cada vez que se haga click en enviar se sumara un intento */
    numeroIntentos++;
    if(numeroIntentos == 1) {
        document.querySelector('.form__tries').classList.remove('hidden');
        intentos.innerHTML = numeroIntentos + " vez";
    }else {
        intentos.innerHTML = numeroIntentos + " veces";
    }
    
    let consent = window.confirm("¿Desea enviar el formulario?");

    if(consent == true) {
        validacionNombre(nombre);
        validacionApellidos(apellidos);
        validacionEdad(edad);
        validacionNIF(nif);
        validacionEmail(email);
        validacionProvincia(provincia);
        validacionFechaNac(fechaNac);
        validacionTelefono(telefono);
        validacionHoraVisita(horaVisita);
    } else {
        alert("No se envio el formulario");
    }
});

/*Agregue este evento para limpiar las alertas de errores*/ 
form.addEventListener('reset', e => {
    const formGroups = document.querySelectorAll('.form__group');

    formGroups.forEach( group => {
        const errorDisplay = group.querySelector('.error-message');
        group.classList.remove('error');
        errorDisplay.innerText = '';
    })
});

/*Con este metodo muestro el error en cada casilla*/
const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error-message');
    errorDisplay.innerText = message;
    formGroup.classList.add('error');
}

/*Con este metodo si habia un error previo, lo elimino*/
const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector('.error-message');
    errorDisplay.innerText = '';
    formGroup.classList.remove('error');
};

/*Con estos metodos transformo el texto de esos input a mayuscula*/
nombre.addEventListener("blur", () => {
    toUpper(nombre);
});
apellidos.addEventListener("blur", () => {
    toUpper(apellidos);
});

const toUpper = (element) => {
    element.value = element.value.toUpperCase();
}

/*VALIDACION NOMBRE*/
const validacionNombre = (nombre) => {
    let success = true;
    let regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    /*a-z permite letras minusculas
      A-Z permite letras mayusculas
      À-ÿ permite letras especiales
      \s permite espacios en caso de que tenga dos nombres
      y un minimo de 1 caracter y máximo de 40*/

    if(nombre.value.length == 0){
        setError(nombre, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(nombre.value)){
        setError(nombre, 'No debe contener números o carácteres especiales');
        success = false;
    }
    
    if(success) {
        setSuccess(nombre);
    }
}

/*VALIDACION APELLIDOS*/
const validacionApellidos = (apellidos) => {
    let success = true;
    let regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    /*repeti la misma expresión que use con el nombre */

    if(apellidos.value.length == 0){
        setError(apellidos, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(apellidos.value)){
        setError(apellidos, 'No debe contener números o carácteres especiales');
        success = false;
    }
    
    if(success) {
        setSuccess(apellidos);
    }
}

/*VALIDACION EDAD*/
const validacionEdad = (edad) => {
    let success = true;
    let regex = /^\d{1,3}$/;
    /*\d permite números y exige un minimo de 1 dígito y máximo de 3 */

    if(edad.value.length == 0){
        setError(edad, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(edad.value)){
        setError(edad, 'Solo debe contener números sin espacios');
        success = false;
    }else {
        if(edad.value < 0 || edad.value > 105){
            setError(edad, 'No se aceptan edades menores a 0 ni superiores a 105');
            success = false;
        }
    }
    
    if(success) {
        setSuccess(edad);
    }
}

/*VALIDACION NIF*/
const validacionNIF = (nif) => {
    let success = true;
    const regex = /^\d{8}[a-zA-Z]$/;
    /*\d permite números y exige 8 dígitos
       a-zA-Z exige una letra minúscula o mayúscula */

    if(nif.value.length == 0){
        setError(nif, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(nif.value)){
        setError(nif, 'Debe contener 8 dígitos seguidos de una letra, sin espacios');
        success = false;
    }else {
        const letraNif = nif.value.slice(8).toUpperCase();
        const numeroNif = nif.value.slice(0,8);
        const letras = ['T', 'R',' W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 
                        'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        const resto = numeroNif % 23;
        const letra = letras[resto];

        if(letraNif != letra){
            setError(nif, 'Esta letra no coincide con los números de NIF');
            success = false;
        }
    }
    
    if(success) {
        setSuccess(nif);
    }
}

/*VALIDACION EMAIL*/
const validacionEmail = (email) => {
    let success = true;
    let regex = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_](\.[a-zA-Z]{2,4}){1,2}$/;
    /*[a-zA-Z0-9-_.]+ exige que esto se cumpla al menos una vez y permite letras, números y los caracteres -_.
      @ no necesita \ para escribirse
      [a-zA-Z0-9-_] repito el primero pero quito el punto
      (\.[a-zA-Z]{2,4}){1,2} con los parentesis creo un grupo que debe empezar por un punto, solo acepta letras y tiene un minimo de 2 letras y máximo de 4, este grupo se puede repetir dos veces*/

    if(email.value.length == 0){
        setError(email, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(email.value)){
        setError(email, 'Solo se permiten letras, números y los caracteres "-, _, .", el "@" es obligatorio al igual que terminar con ".com, .es" etc');
        success = false;
    }
    
    if(success) {
        setSuccess(email);
    }
}

/*VALIDACION PROVINCIA*/
const validacionProvincia = (provincia) => {
    let success = true;

    if(provincia.value == 0){
        setError(provincia, 'Seleciona una provincia');
        success = false;
        return;
    }
    
    if(success) {
        setSuccess(provincia);
    }
}

/*VALIDACION FECHA DE NACIMIENTO*/
const validacionFechaNac = (fechaNac) => {
    let success = true;
    let regex = /^(0?[1-9]|[1-2][0-9]|3[0-1])[-\/](0?[1-9]|1[0-2])[-\/]\d{4}$/;
    /*(0?[1-9]|[1-2][0-9]|3[0-1]) con el signo de interrogación indico que puede o no empezar por 0 y uso el condicional "|" para permitir números del 1 al 31 
       [-\/] exige un "-" o "/"
       (0?[1-9]|1[0-2])repito la primera expresion pero solo para números del 1 al 12
       \d{4} exige 4 dígitos que serían el año*/

    if(fechaNac.value.length == 0){
        setError(fechaNac, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(fechaNac.value)){
        setError(fechaNac, 'Debe ser en el formato dd/mm/aaaa o dd-mm-aaaa');
        success = false;
    }
    
    if(success) {
        setSuccess(fechaNac);
    }
}

/*VALIDACION TELEFONO*/
const validacionTelefono = (telefono) => {
    let success = true;
    let regex = /^[6|7|8|9]\d{8}$/;
    /*[6|7|8|9] exijo que empiece por los números indicados
      \d{8} seguido del primer número deben haber 8 dígitos más*/

    if(telefono.value.length == 0){
        setError(telefono, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(telefono.value)){
        if(telefono.value[0] != 6|7|8|9){
            setError(telefono, 'No es un número válido, debe empezar por 6, 7, 8 o 9');
            success = false;
        }
        if(telefono.value.length != 9){
            setError(telefono, 'No es un número válido, debe contener 9 dígitos');
            success = false;
        }
    }
    
    if(success) {
        setSuccess(telefono);
    }
}

/*VALIDACION HORA DE VISITA*/
const validacionHoraVisita = (horaVisita) => {
    let success = true;
    let regex = /^(0[1-9]|1[0-9]|2[0-3])\:(0[1-9]|[1-5][0-9])$/;
    /*Repito la expresión que use para la fecha pero en este caso
      el 0 si es obligatorio y en vez de "-" o "/" se pide ":" */

    if(horaVisita.value.length == 0){
        setError(horaVisita, 'No debe estar vacío');
        success = false;
        return;
    }
    
    if(!regex.test(horaVisita.value)){
        if(horaVisita.value[0] > 2 || horaVisita.value[3] > 5){
            setError(horaVisita, 'No es una hora válida');
            success = false;
            console.log('hora mal')
        } else{
            setError(horaVisita, 'No es una hora válida, solo se acepta formato militar');
            success = false;
            console.log('todo mal')
        }
    }

    if(success) {
        setSuccess(horaVisita);
        console.log('success')
    }
}