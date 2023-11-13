function Coche(modelo, color, matricula, anho) {
    this.modelo = modelo;
    this.color = color;
    this.matricula = matricula;
    this.anho = anho;
}

let coches = {};

function agregarCoche(matricula, modelo, color, anho) {
    coches[matricula] = new Coche(modelo, color, matricula, anho);
}

function eliminarCoche(matricula) {
    if (coches[matricula]) {
        delete coches[matricula];
    }
}

function mostrarTodosLosCoches() {
    for (let matricula in coches) {
        let coche = coches[matricula];
        console.log("Modelo: " + coche.modelo);
        console.log("Color: " + coche.color);
        console.log("Matrícula: " + coche.matricula);
        console.log("Año: " + coche.anho);
        console.log("------------------------------------");
    }
}

// Ejemplos de uso de las funciones
agregarCoche("123ABC", "Toyota Camry", "Azul", 2022);
agregarCoche("456XYZ", "Honda Civic", "Rojo", 2023);
agregarCoche("126XWD", "Fiat 500", "Negro", 2019);

mostrarTodosLosCoches();

eliminarCoche("789DEF");
eliminarCoche("456XYZ");

mostrarTodosLosCoches();