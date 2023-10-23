// Ejercicio 1. Realizar una pequeña aplicación en JavaScript que muestre lo siguiente:

// Tabla de multiplicar del 7.

// Tabla de sumar del 8.

// Tabla de dividir del 9.

// Utilizar tres tipos distintos de bucles que hay en JavaScript (para cada número un tipo de bucle diferente).

const btn = document.querySelectorAll('.btn');
const table = document.getElementById('table');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const results = document.querySelectorAll(".result");

btn.forEach( btn => {

    btn.addEventListener('click', () => {
        if(btn.classList.contains('seven')){
            let number = 7;
            
            for(i = 0; i < results.length; i++) {
               let current = results[i];
               current.innerHTML = number * (i+1);
            }

            table.classList.add('show');

            numbers.forEach( num => {
            num.innerHTML = number;
            })

            operators.forEach( op => {
                op.innerHTML = "x"
            })


        } else if (btn.classList.contains('eight')){
            let number = 8;
            let i = 0;

            do{
               let current = results[i];
               current.innerHTML = number + (i+1);

               i++;

            }while (i < results.length);

            table.classList.add('show');

            numbers.forEach( num => {
            num.innerHTML = number;
            })

            operators.forEach( op => {
                op.innerHTML = "+"
            })

        } else {
            let number = 9;
            let i = 0;

            while (i < results.length) {
                let current = results[i];
                current.innerHTML = (number / (i+1)).toFixed(2);

                i++;
            }

            table.classList.add('show');

            numbers.forEach( num => {
                num.innerHTML = number;
                })
    
                operators.forEach( op => {
                    op.innerHTML = "/"
                })
        }
    })

})

