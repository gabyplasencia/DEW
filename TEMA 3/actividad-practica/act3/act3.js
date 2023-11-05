/*Actividad 3.
Crea una web que permita al usuario establecer una fecha y hora para una cuenta atrás.*/

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const init = () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", countdown);
}
const countdown = (e) => {
    e.preventDefault();
    const dateInput = document.getElementById("date").value;

    setCountdown(dateInput);
    window.onload = setInterval(() => setCountdown(dateInput), 1000); 
}

const setCountdown = (dateInput) => {
    const dateSelected = new Date(dateInput);
    const today = new Date();

    const days = document.getElementById('countdown-days');
    const hours = document.getElementById('countdown-hours');
    const minutes = document.getElementById('countdown-minutes');
    const seconds = document.getElementById('countdown-seconds');

    if (dateSelected > today) {
        const timeLeft = (dateSelected - today);

        days.innerText = Math.floor(timeLeft / day);
        hours.innerText = Math.floor((timeLeft % day) / hour);
        minutes.innerText = Math.floor((timeLeft % hour) / minute);
        seconds.innerText = Math.floor((timeLeft % minute) / second);

    }/* else {
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
    }*/
}

window.addEventListener('DOMContentLoaded', init);

