const btnClick = document.querySelector('.btn-click');
const btnRefresh = document.querySelector('.btn-refresh');
const wrapperForm = document.querySelector('.wrapper2');
const wrapperInfo = document.querySelector('.info');

const form = document.getElementById('form');

const nameDisplay = document.getElementById('name-display');
const lastnameDisplay = document.getElementById('lastname-display');
const nameChar = document.getElementById('name-char');
const firstA = document.getElementById('first-a');
const lastA = document.getElementById('last-a');
const minusFirst3 = document.getElementById('minus-first3');
const nameUpper = document.getElementById('name-upper');
const age = document.getElementById('age');
const dayDisplay = document.getElementById('day-display');
const monthDisplay = document.getElementById('month-display');
const yearDisplay = document.getElementById('year-display');
const cos = document.getElementById('cos');
const biggerNum = document.getElementById('bigger-num');
const randomNum = document.getElementById('random-num');


function openSecondPage() {

    //No puse la URL completa para que esto funcione en cualquier ordenador siempre que los html esten en la misma carpeta
    let url = "second.html";
    //el spec resize solo funciona en IE
    let features = "resize=no, height=900, width=700"
        
        window.open(url, "_blank", features);

        btnClick.classList.add('hidden');
        wrapperForm.classList.remove('hidden'); 
}

function refresh() {

    btnClick.classList.remove('hidden');
    btnRefresh.classList.add('hidden');
    wrapperInfo.classList.add('hidden');
}


form.addEventListener('submit', e => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let dayBirth = document.getElementById('birth-day').value;
    let monthBirth = document.getElementById('birth-month').value;
    let yearBirth = document.getElementById('birth-year').value;

    //Muestro el nombre introducido
    nameDisplay.innerHTML = name;
    lastnameDisplay.innerHTML = lastname;
    
    //Con .length obtengo la longitud del objeto
    nameChar.innerHTML = name.length;
    
    //Chequeo que el nombre tenga la letra "a"
    //si la incluye muestro la primera y ultima posicion
    const a = "a";
    if (name.includes(a)) {
        firstA.innerHTML = name.indexOf(a) + 1;
        lastA.innerHTML = name.lastIndexOf(a) +1;
    } else {
        firstA.innerHTML = "0, no hay letra A en tu nombre";
    }
    
    // .slice corta desde el inicio
    minusFirst3.innerHTML = name.slice(3);
    
    //.toUpperCase transforma el string en mayúscula
    nameUpper.innerHTML = name.toUpperCase() + " " + lastname.toUpperCase();
    

    let today = new Date();
    let currentYear = today.getFullYear();
    
    //Chequeo que sean días, meses y años válidos
    if (dayBirth > 31 || dayBirth == 0) {
       dayBirth.innerHTML = "Día no válido";
    } else if (monthBirth == 0 || monthBirth > 12) {
       monthBirth.innerHTML = "Mes no válido"; 
    } else if (yearBirth > currentYear) {
        yearBirth.innerHTML = "No puede ser un año en el futuro";
    } else {
        //Una vez validados los paso al objeto birthday
        //al mes le resto uno ya que en Date los meses van de 0 a 11
        let birthday = new Date(yearBirth, (monthBirth - 1), dayBirth);
        
        //Con este array puedo mostrar el nombre del mes usando el index
        let monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
                         "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
                         "Noviembre", "Diciembre"]
        
                         //Como devuelve los años en milisegundos, lo divido entre los milisegundos que hay en un año
        age.innerHTML = Math.floor((today - birthday) / 31556900000);
        dayDisplay.innerHTML = dayBirth;
        monthDisplay.innerHTML = monthName[monthBirth - 1];
        yearDisplay.innerHTML = yearBirth;
    }
    
    //Primero convierto el numero en radial multiplicando por PI y dividiendo entre 180
    let degrees = 180;
    cos.innerHTML = Math.cos(degrees * Math.PI / 180);
    
    //Introduzco los números en un array
    let arrayNum = [34, 67, 23, 75, 35, 19];
    let bigger = 0;
    
    //Con el for loop bigger se reasignara al valor actual solo si es mayor que el mismo
    for (i = 0; arrayNum.length > i ; i++) {
        let currentNum = arrayNum[i];
        if (currentNum > bigger) {
            bigger = currentNum;
        }
    }

    biggerNum.innerHTML = bigger;
    
    //Número random con tope de 100
    randomNum.innerHTML = Math.floor(Math.random() * 100);

    wrapperInfo.classList.remove('hidden'); 
    btnRefresh.classList.remove('hidden');
    wrapperForm.classList.add('hidden'); 

});

