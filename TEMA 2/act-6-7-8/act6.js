const radioInput = document.getElementById('radio-input');

const areaText = document.getElementById('area-result');
const perimeterText = document.getElementById('perimeter-result');
const resultText = document.querySelector('.result-text');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const radio = parseFloat(radioInput.value);

    if (!isNaN(radio)) {
        circleCalculation(radio);
    }
});

const setArea = (area, radio) => {

    let areaResult = Number.parseFloat(area).toFixed(1);
    areaText.innerHTML = areaResult + 'm';

    document.getElementById('area-circle').innerHTML = radio + 'm';

    let circle = document.querySelector('.circle');
    let line = document.querySelector('.line');
    let diameter = (radio * 2) + "px";

    circle.style.display = "block";
    
    if (radio > 50 && radio < 150) {
      circle.style.height = diameter.toString();
      line.style.marginTop = radio.toString() + "px";
    } else if (radio < 50){
      circle.style.height = "100px";
      line.style.marginTop = "50px";
    }  else if (radio > 150){
      circle.style.height = "300px";
      line.style.marginTop = "150px";
    }

  }

const setPerimeter = (perimeter) => {

    let perimeterResult = Number.parseFloat(perimeter).toFixed(1);
    perimeterText.innerHTML = perimeterResult + 'm';

  }

const circleCalculation = (radio) => {  
    
    let area = Math.PI * radio**2;
    let perimeter = 2 * Math.PI * radio;
    
    setArea(area, radio);
    setPerimeter(perimeter);
    
    resultText.classList.add('show');
}