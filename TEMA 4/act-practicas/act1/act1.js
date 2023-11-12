// Actividad 1. 
// Crear una función que genere un array aleatorio, usando 3 parámetros: 
//     número de elementos (por defecto 10), 
//     valor mínimo del elemento (por defecto 100), 
//     valor máximo (por defecto 200).

let newArray = [];
function arrayRandom(size = 10, minValue = 100, maxValue = 201) {
    for ( i = 0; size > i; i++) {
        let value = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        newArray.push(value);
    }
}

arrayRandom(5, 4, 10);

console.log(newArray);