const colores = document.querySelectorAll('.colores');
const pincel = document.getElementById('pincel');
const tablaDibujo = document.getElementById('tabla-dibujo');

const pizarra = {

    init: () => {
        pizarra.crearTabla();
        pizarra.seleccionarColor();
        pizarra.addEvents();
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
                let colorElegido = document.querySelector('.seleccionado');
                document.body.style.cursor = window.getComputedStyle(colorElegido).getPropertyValue('cursor');
            })
        })
    },

    addEvents: () => {
        tablaDibujo.addEventListener('click', pizarra.estadoPincel);
        tablaDibujo.addEventListener('mouseover', pizarra.pintar);
    },

    estadoPincel: () => {
        if(tablaDibujo.classList.contains('activo')){
            tablaDibujo.classList.remove('activo');
            pincel.style.color = 'rgb(199, 9, 9)';
            pincel.innerHTML = "El pincel esta desactivado.<br>Haz click de nuevo para activarlo";
        }else {
            tablaDibujo.classList.add('activo');
            pincel.style.color = 'rgb(5, 95, 5)';
            pincel.innerHTML = "El pincel esta activo.<br>Puedes pintar!";
        }
    },

    pintar: (e) => {
        if(!e){return;}
        if(tablaDibujo.classList.contains('activo') && e.target.tagName == 'TD'){
            let colorElegido = document.querySelector('.seleccionado');
            e.target.style.backgroundColor = window.getComputedStyle(colorElegido).getPropertyValue('background-color');
        }
    }
}

document.addEventListener("DOMContentLoaded", pizarra.init());