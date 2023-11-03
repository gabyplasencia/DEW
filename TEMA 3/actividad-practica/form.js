const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let nameInput = document.getElementById('name').value;
    let lastnameInput = document.getElementById('lastname').value;
    let adressInput = document.getElementById('adress').value;
    let postcodeInput = document.getElementById('postcode').value;
    let townInput = document.getElementById('town').value;
    let cityInput = document.getElementById('city').value;
    let phoneInput = document.getElementById('phone').value;
    let emailInput = document.getElementById('email').value;
    
    localStorage.setItem('name', nameInput);
    localStorage.setItem('lastname', lastnameInput);
    localStorage.setItem('adress', adressInput);
    localStorage.setItem('postcode', postcodeInput);
    localStorage.setItem('town', townInput);
    localStorage.setItem('city', cityInput);
    localStorage.setItem('phone', phoneInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('success', true);

});

