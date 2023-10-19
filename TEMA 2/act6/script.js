const radioInput = document.getElementById('radio-input');

const areaText = document.getElementById('area-result');
const perimeterText = document.getElementById('perimeter-result');

form.addEventListener('submit', e => {
    e.preventDefault();

    const radio = parseFloat(radioInput.value);

    if (!isNaN(radio)) {
        circleCalculation(radio);
    }
});

const setArea = (area) => {

    let areaResult = Number.parseFloat(area).toFixed(1);
    areaText.innerHTML = areaResult;
  }

const setPerimeter = (perimeter) => {

    let perimeterResult = Number.parseFloat(perimeter).toFixed(1);
    perimeterText.innerHTML = perimeterResult;

  }

const circleCalculation = (radio) => {  
    
    let area = Math.PI * radio**2;
    let perimeter = 2 * Math.PI * radio;
    
    setArea(area);
    setPerimeter(perimeter);

}