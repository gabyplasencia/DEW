//Actividad 2. Indica el valor que generan las siguientes expresiones 
//y el tipo de datos de los mismos (emplea para ello la función typeof()):

//a. 2 > 3 +2
//b. 1 + false +3.5
//c. 4 * true + 2
//d. 5 / 0
//e. 3 * 'hola' + 2
//f. 'Tienes' + 23 + 'años'

var valorA = 2 > 3 + 2;
console.log(typeof valorA); // --> boolean

var valorB = 1 + false + 3.5;
console.log(typeof valorB); // --> number

var valorC = 4 * true + 2;
console.log(typeof valorC); // --> number

var valorD = 5 / 0;
console.log(typeof valorD); // --> number

var valorE = 3 * 'hola' + 2;
console.log(typeof valorE); // --> number

var valorF = 'Tienes' + 23 + 'años';
console.log(typeof valorF); // --> string