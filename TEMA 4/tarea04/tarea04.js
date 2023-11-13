function Edificio(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = [];

    console.log('Construido nuevo edificio en calle: ' + this.calle + ', nº: ' + this.numero + ', CP: ' + this.codigoPostal);

    this.agregarPlantasYPuertas = function(numPlantas, puertas) {
        let numPlantasTotal = this.plantas.length + numPlantas;

        for (let i = 0; i < numPlantasTotal; i++) {
            let planta = {numPlanta: i+1, puertas:[]}
            for(let j = 0; j < puertas; j++){
                let puerta = {numPuerta: j+1, nomPropietario: "Piso Libre"}
                planta.puertas.push(puerta)
            }
            this.plantas.push(planta);
        }
    };

    this.modificarNumero = function(numero) {
        this.numero = numero;
    };

    this.modificarCalle = function(calle) {
        this.calle = calle;
    };

    this.modificarCodigoPostal = function(codigo) {
        this.codigoPostal = codigo;
    };

    this.imprimeCalle = function() {
        console.log('La calle del edificio es: ' + this.calle);
    };

    this.imprimeNumero = function() {
        console.log('El número del edificio es: ' + this.numero);
    };

    this.imprimeCodigoPostal = function() {
        console.log('El código postal del edificio es: ' + this.codigoPostal);
    };


    this.agregarPropietario = function(nombre, numPlanta, numPuerta) {
        let currentPlanta = this.plantas.find(planta => planta.numPlanta === numPlanta)
        if(currentPlanta){
            let currentPuerta = currentPlanta.puertas.find(planta => planta.numPuerta === numPuerta);
            if(currentPuerta){
                currentPuerta.nomPropietario = nombre;
                console.log(nombre + ' es ahora el propietario de la puerta ' + numPlanta + ' de la planta ' + numPuerta);
            }
        }
    };

    this.imprimePlantas = function() {
        let currentPlanta;
        let currentPuerta;
        let currentPropietario;
        for (let i = 0; i < this.plantas.length ; i++) {
             currentPlanta = this.plantas[i];
            for(let j = 0; j < currentPlanta.puertas.length; j++){
                 currentPuerta = currentPlanta.puertas[j];
                 currentPropietario = currentPuerta.nomPropietario;
                 console.log(currentPlanta.numPlanta + " " + currentPuerta.numPuerta + " " + currentPropietario);
            }
        }
    };
}

const edificioA = new Edificio("Garcia Prieto", 58, 15706);
edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Pepa Lopez", 2, 2);
edificioA.agregarPropietario("Jorge Martin", 1, 3);
edificioA.agregarPropietario("no existe esta planta", 3, 3);
edificioA.imprimePlantas();
edificioA.agregarPlantasYPuertas(2, 2);
edificioA.imprimePlantas();

const edificioB = new Edificio("Torreja", 15, 25800);
edificioB.agregarPlantasYPuertas(5, 4);
edificioB.agregarPropietario("Pedro Gomez", 3, 2);
edificioB.imprimeCalle();
edificioB.imprimeNumero();
edificioB.imprimeCodigoPostal();
edificioB.modificarCalle("Trinidad");
edificioB.modificarNumero(4);
edificioB.modificarCodigoPostal(38206);
edificioB.imprimeCalle();
edificioB.imprimeNumero();
edificioB.imprimeCodigoPostal();
