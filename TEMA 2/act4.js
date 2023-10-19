//Actividad 4. ¿Qué valor se obtendrá al ejecutar estas expresiones?

//a. 16 << 2
//b. 8 > 10 ? v1 = 'sí' : v1 = 'no'
//c. var n=7; alert(“n vale “ + (++n));
//d. var m=17; alert("m vale " + (m++)); alert(m);
//e. var y=17; y%=5;

console.log(16 << 2);  // --> 64

console.log(8 > 10 ? v1 = 'sí' : v1 = 'no');  // --> no

var n = 7;
console.log("n vale " + (++n) + " " + n);  // --> n vale 8 8

var m = 17;
console.log("m vale " + (m++) + " " + m);  // --> m vale 17 18

var y = 17;
console.log(y %= 5);  // --> 2