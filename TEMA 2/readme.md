Actividad 1. Tal y como ya hemos visto, hemos visto que en ciertas ocasiones el motor de ejecución de javascript puede estar apagado en el cliente, ya sea de forma voluntaria o involuntaria. En tales casos, conviene incluir un aviso empleando para ello las etiquetas <noscript>mensaje</noscript>. Añade dicha etiqueta en el código de una página y prueba el efecto desactivando para ello javascript en el navegador.

Actividad 2. Indica el valor que generan las siguientes expresiones y el tipo de datos de los mismos (emplea para ello la función typeof()):

a. 2 > 3 +2
b. 1 + false +3.5
c. 4 * true + 2
d. 5 / 0
e. 3 * 'hola' + 2
f. 'Tienes' + 23 + 'años'

Actividad 3. ¿Qué valor producirán las siguientes expresiones?

a. parseInt("15.5");
b. parseInt(true);
c. parseInt("Pedro");
d. parseInt(15 + "Pedro");
e. parseFloat("15.5");

Actividad 4. ¿Qué valor se obtendrá al ejecutar estas expresiones?

a. 16 << 2
b. 8 > 10 ? v1 = 'sí' : v1 = 'no'
c. var n=7; alert(“n vale “ + (++n));
d. var m=17; alert("m vale " + (m++)); alert(m);
e. var y=17; y%=5;

Actividad 5. Observa el siguiente código:

  var arr=[1,2,3,4];
  for (i of arr) {
  console.log(i)};

  for (i in arr) {
  console.log(i)};

a) ¿Muestran la misma información el primer y el segundo bucle?
b) ¿Cuál es la diferencia entre los mismos?
c) ¿Qué muestra el siguiente código: "arr.forEach(function(i){console.log(i)});"?

Actividad 6. Realiza un programa en JavaScript que calcule el área y el perímetro de una circunferencia de radio 5 m. A continuación, modifica dicho código para que el usuario pueda introducir el radio. Recuerda que para seleccionar un elemento desde HTML debes usar la instancia document.getElementById(""). Algunas funciones predefinidas necesarias/útiles para esta tarea son:

document.getElementById('').value: devuelve el valor de un elemento HTML.

parseFloat()

Math.PI: devuelve el número real pi.

El modificador .innerHTML que permite seleccionar un elemento HTML y modificar su contenido.

toFixed(): permite redondear a un determinado número de decimales.

Actividad 7. Observa y analiza la función del siguiente código. A continuación modifica el código para que sea el usuario el que escoja el número de filas del rombo.

<!DOCTYPE html>
<html>
<head>
    <title>Rombo de emoticonos</title>
</head>
<body>

    <div id="rombo" style="text-align: center"></div>
    
    <script>
            function dibujarRombo(filas) {
                
                let output = '';
                
                //Parte creciente del rombo:
                for (let i = 1; i <= filas; i++){
                    let linea = '';
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        linea += '*';
                    }
                    output += linea + '<br>';
                }
                
                //Parte decreciente del rombo:
                for (let i = filas - 1; i >= 1; i--) {
                    let linea = '';
                    for (let j = 1; j <= 2 * i - 1; j++) {
                        linea += '*';
                    }
                    output += linea + '<br>';
                }
                document.getElementById('rombo').innerHTML = output;
            }
            dibujarRombo(15); //Ejecutamos la función.    
    </script>
</body>
</html>

Actividad 8. Crea una web sencilla que permita al usuario introducir un número de entrada y obtener todos los divisores del mismo. Para ello, algunas funciones a tener en cuenta además de las vistas anteriormente son:

parseInt()

%: devuelve el módulo o resto de una división.