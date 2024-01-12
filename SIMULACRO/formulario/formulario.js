const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const nhc = document.getElementById('nhc');
const sexo = document.getElementById('sexo');
const fechaNacimiento = document.getElementById('fechaNacimiento');

const datosPaciente = document.getElementById('datospaciente');
const historialForm = document.getElementById('historial');

const modNHC = document.getElementById('modificarNHC');
const modNombre = document.getElementById('modificarNombre');
const modApellidos = document.getElementById('modificarApellidos');
const modSexo = document.getElementById('modificarSexo');
const modFecha = document.getElementById('modificarFecha');

const agregarEpisodio = document.getElementById('agregarDxyTto');
const modEpisodio = document.getElementById('modificarEpisodio');
const limpiar = document.getElementById('limpiar');

let paciente;

form.addEventListener('submit', e => {
    e.preventDefault();

    let nombreInput = nombre.value;
    let apellidosInput = apellidos.value;
    let nhcInput = nhc.value;
    let sexoInput = sexo.value;
    let fechaNacimientoInput = fechaNacimiento.value;

    paciente = new Paciente(nhcInput, nombreInput, apellidosInput, fechaNacimientoInput, sexoInput);
    mostrarDatos(nhcInput, nombreInput, apellidosInput, fechaNacimientoInput, sexoInput);
});

const mostrarDatos = (nhc, nombre, apellidos, fecNac, sexo) => {
    datosPaciente.innerHTML = 'NHC:' + nhc + 
    '<br>Nombre: ' + nombre + '<br>Apellidos: ' + apellidos + 
    '<br>Fecha de nacimiento: ' + fecNac + '<br>Sexo: ' + sexo;
};

modNHC.addEventListener('click', () => {
    paciente.modificarNhc();
    mostrarDatos(paciente.nhc, paciente.nombre, paciente.apellidos, paciente.fecNac, paciente.sexo);
});

modNombre.addEventListener('click', () => {
    paciente.modificarNombre();
    mostrarDatos(paciente.nhc, paciente.nombre, paciente.apellidos, paciente.fecNac, paciente.sexo);
});

modApellidos.addEventListener('click', () => {
    paciente.modificarApellidos();
    mostrarDatos(paciente.nhc, paciente.nombre, paciente.apellidos, paciente.fecNac, paciente.sexo);
});

modFecha.addEventListener('click', () => {
    paciente.modificarFecNac();
    mostrarDatos(paciente.nhc, paciente.nombre, paciente.apellidos, paciente.fecNac, paciente.sexo);
});

modSexo.addEventListener('click', () => {
    paciente.modificarSexo();
    mostrarDatos(paciente.nhc, paciente.nombre, paciente.apellidos, paciente.fecNac, paciente.sexo);
});

// agregarEpisodio.addEventListener('click', () => {
//     paciente.crearEpisodio();
//     historialForm.innerHTML = paciente.historial.toString();
// });


