/*
Actividad 7. Observa y analiza la función del siguiente código. 
A continuación modifica el código para que sea el usuario el que escoja el número de filas del rombo.

*/     
const formSeven = document.getElementById('form-seven');
const rowsInput = document.getElementById('rows-input');

formSeven.addEventListener('submit', e => {
    e.preventDefault();
    
    const rows = rowsInput.value;

    drawRhombus(rows);
});

const drawRhombus = (rows) => {
                
    let output = '';
                
    //Parte creciente del rombo:
    for (let i = 1; i <= rows; i++){
        let line = '';
        for (let j = 1; j <= 2 * i - 1; j++) {
            line += '*';
        }
        output += line + '<br>';
    }
    
    //Parte decreciente del rombo:
    for (let i = rows - 1; i >= 1; i--) {
        let line = '';
        for (let j = 1; j <= 2 * i - 1; j++) {
            line += '*';
        }
        output += line + '<br>';
    }
    document.getElementById('rhombus').innerHTML = output;
}
  