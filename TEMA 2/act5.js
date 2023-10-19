//Actividad 5. Observa el siguiente código:

//  var arr=[1,2,3,4];
//  for (i of arr) {
//  console.log(i)};

//  for (i in arr) {
//  console.log(i)};

//a) ¿Muestran la misma información el primer y el segundo bucle?
//b) ¿Cuál es la diferencia entre los mismos?
//c) ¿Qué muestra el siguiente código: "arr.forEach(function(i){console.log(i)});"?

var arr=[1,2,3,4];

for (i of arr) {
console.log(i)};  // --> 1, 2, 3, 4

for (i in arr) {
console.log(i)};  // --> 0, 1, 2, 3

arr.forEach(function(i){console.log(i)});  // --> 1, 2, 3, 4