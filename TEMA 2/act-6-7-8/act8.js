/* Actividad 8. Crea una web sencilla que permita al usuario introducir un número de entrada 
y obtener todos los divisores del mismo.*/

const formEight = document.getElementById('form-eight');
const numberInput = document.getElementById('number-input');
const dividersText = document.querySelector('.dividers-text');
const dividersResult = document.getElementById('dividers-result');

formEight.addEventListener('submit', e => {
    e.preventDefault();
    
    const number = parseInt(numberInput.value);

    dividers(number);
});

function dividers(number){

    var listDividers = [];
 
    for(let i = 1; i<= number ; i++){
        if(number % i == 0)
        {
            listDividers.push(" " + i);
        }
    }

    dividersText.classList.add('show');

    dividersResult.innerHTML = listDividers;
}
