// Ejercicio 2. Sabiendo que cuando desplazamos 1 bit a la derecha dividimos un entero por 2 y 
// cuando lo desplazamos a la izquierda estamos multiplicando por 2; configurar tu web para que 
// también imprima el resultado de las siguientes operaciones empleando desplazamiento de bits:

// 125 / 8 =
// 40 x 4 =
// 25 / 2 =
// 10 x 16 =

const firstNumber = document.querySelectorAll('.first-number');
const secondNumber = document.querySelectorAll('.second-number');
const resultsBits = document.querySelectorAll('.result-bit');
const operatorsBits = document.querySelectorAll('.operator');
const op = ["/", "x", "/", "x"];
const fNumber = [125, 40, 25, 10];
const sNumber = [8, 4, 2, 16];

function setFirstNumber() {
    for(i = 0; i < firstNumber.length; i++) {
        let current = firstNumber[i];
        current.innerHTML = fNumber[i];
     }
}

function setSecondNumber() {
    let sNumber = [8, 4, 2, 16];

    for(i = 0; i < secondNumber.length; i++) {
        let current = secondNumber[i];
        current.innerHTML = sNumber[i];
     }
}

function setOperator() {
    for(i = 0; i < operatorsBits.length; i++) {
        let current = operatorsBits[i];
        current.innerHTML = op[i];
     }
}

function bit() {

    for(i = 0; i < resultsBits.length; i++) {
        let current = resultsBits[i];

        if(op[i] == "/"){
            let firstNum = fNumber[i];
            let secondNum = sNumber[i];

            current.innerHTML = firstNum >> (secondNum / 2);
        } else {
            let firstNum = fNumber[i];
            let secondNum = sNumber[i];

            current.innerHTML = firstNum << (secondNum / 2);
        }
     }          
}

setFirstNumber();
setSecondNumber();
setOperator();
bit();