const colores = document.querySelectorAll('.colores');
const pincel = document.getElementById('pincel');
const tablaDibujo = document.getElementById('tabla-dibujo');
const colorElegido = document.querySelector('.seleccionado');

const pizarra = {

    init: () => {
        pizarra.crearTabla();
        pizarra.seleccionarColor();
    },

    crearTabla: () => {
        for(i = 1; i <= 30; i++){
            let row = document.createElement('tr');

            for(j = 1; j <= 30; j++){
                let data = document.createElement('td');
                row.appendChild(data);
            }
            tablaDibujo.appendChild(row);
        }
    },

    seleccionarColor: () => {
        colores.forEach( color => {
            color.addEventListener('click', () => {
                colores.forEach( color => {
                    color.classList.remove('seleccionado');
                })
                color.classList.add('seleccionado');
            })
        })
    },

    pintar: () => {
        
    }
}

document.addEventListener("DOMContentLoaded", pizarra.init());