// Ejercicio 3. Dado el siguiente código de una calculadora simple:

// Se pide:
// 	Modificar el código proporcionado para agregar condicionales if que manejen las operaciones matemáticas según el botón que se presione.
// 	También, modificar el código para usar un condicional switch en lugar de múltiples if para manejar las operaciones matemáticas.
// 	Comentar el código y asegurarse de que esté bien indentado para una mayor claridad y presentación.


//Declaro el array de .btn--cal
const btnCal = document.querySelectorAll(".btn--cal");

//Uso un forEach para iterar dentro del array declarado
btnCal.forEach (btn => {

   //Uso un evento para que detecte cuando se hace click sobre los botones
   btn.addEventListener('click', () =>{
    
    //Obtengo los valores del input
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado;
        
           //En el bucle if pongo como condicion que el elemento tenga la clase correspondiente a la operación 
    //     if(btn.classList.contains("sumar")) {

    //         resultado = (numero1 + numero2);
    //         document.getElementById("resultado").value = resultado;
    
    //     } else if(btn.classList.contains("restar")) {
    
    //         resultado = (numero1 - numero2).toFixed(2);
    //         document.getElementById("resultado").value = resultado;
    
    //     } else if(btn.classList.contains("mult")) {
            
    //         resultado = (numero1 * numero2).toFixed(2);
    //         document.getElementById("resultado").value = resultado;
    
    //     } else {
            
    //         resultado = (numero1 / numero2).toFixed(2);
    //         document.getElementById("resultado").value = resultado;
    //     } 
     
    //Pongo como condicion true para que entre en el bucle
    switch(true) {

        case btn.classList.contains("sumar"):
            resultado = (numero1 + numero2).toFixed(2);
            document.getElementById("resultado").value = resultado;
            break;

        case btn.classList.contains("restar"):
            resultado = (numero1 - numero2).toFixed(2);
            document.getElementById("resultado").value = resultado;
            break; 

        case btn.classList.contains("mult"):
            resultado = (numero1 * numero2).toFixed(2);
            document.getElementById("resultado").value = resultado;
        break;  

        case btn.classList.contains("div"):
            resultado = (numero1 / numero2).toFixed(2);
            document.getElementById("resultado").value = resultado;
            break;  
            
        default:
            document.getElementById("resultado") = "ERROR";    
    }
   })

})
