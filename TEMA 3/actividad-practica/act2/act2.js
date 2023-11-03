/*Actividad 2. 
Realiza una página web que redirija al usuario a la página de google (conservando el historial) 
si sacando un número de forma aleatoria entre 0 y 10 el mismo es menor o igual a 5. 
En caso contrario, que la página genere una alerta saludando con buenos días o 
buenas tardes en función de si es antes de las 12 am o después.*/

function redirect() {
    
    let number = Math.floor((Math.random()) * 10);
    console.log(number);

    if(number <= 5 ){
        let url = "https://www.google.es/";
        formTab = window.open(url, "_blank");
    } else {
        let today = new Date();
        let todayHour = today.getHours();       
        
        if(todayHour < 12 && todayHour > 4) {
            alert("Buenos días :)");
        } else if(todayHour >= 12 && todayHour < 19) {
            alert("Buenas tardes :)");
        } else if(todayHour >= 19) {
            alert("Buenas noches :)");
        } else {
            alert("Ve a dormir >:(");
        }
    }

}

