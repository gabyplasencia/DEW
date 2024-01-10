function Paciente(nhc, nombre, apellidos, fecNac, sexo) {
    this.nhc = nhc;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecNac = fecNac;
    this.sexo = sexo;
    this.historial = [];

    console.log('Se ha registrado un nuevo paciente con éxito nhc:' + this.nhc + 
                    ' nombre: ' + this.nombre + ' apellidos: ' + this.apellidos + 
                    ' fecha de nacimiento: ' + this.fecNac + ' sexo: ' + this.sexo);

    this.modificarNhc = function(nhc) {
        let consent = window.confirm("Se modificará el NHC ¿Desea continuar?");
        if(consent == true) {
            this.nhc = nhc;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarNombre = function(nombre) {
        let consent = window.confirm("Se modificará el nombre ¿Desea continuar?");
        if(consent == true) {
            this.nombre = nombre;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarApellidos = function(apellidos) {
        let consent = window.confirm("Se modificarán los apellidos ¿Desea continuar?");
        if(consent == true) {
            this.apellidos = apellidos;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarFecNac = function(fecNac) {
        let consent = window.confirm("Se modificará la fecha de nacimiento ¿Desea continuar?");
        if(consent == true) {
            this.fecNac = fecNac;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarSexo = function(sexo) {
        let consent = window.confirm("Se modificará el sexo ¿Desea continuar?");
        if(consent == true) {
            this.sexo = sexo;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.crearHistorial = function(id, fecha, diagnostico, tratamiento, medico){
        let historia = {id, fecha, diagnostico, tratamiento, medico};
        this.historial.push(historia);
    };

    this.modificarHistorial = function(idSelected, fechaNew, diagnosticoNew, tratamientoNew, medicoNew){
        let currentHistoria = this.historial.find(historia => historia.id === idSelected);
        if(currentHistoria){
            currentHistoria.fecha = fechaNew;
            currentHistoria.diagnostico = diagnosticoNew;
            currentHistoria.tratamiento = tratamientoNew;
            currentHistoria.medico = medicoNew;
        }else {
            console.log("No se encontraron historiales con ese ID");
        }
    };

    this.mostrarHistorial = function(){
        console.log(this.historial);
    };
}

const pacienteA = new Paciente("1", "jose", "perez", "10/10/1995", "M");
pacienteA.crearHistorial("0", "15/10/2010", "migraña", "dejar el cafe", "manuel jesus");
pacienteA.crearHistorial("1", "08/05/2015", "dermatitis", "aloe vera", "maria magdalena");
pacienteA.mostrarHistorial();
pacienteA.modificarHistorial("1", "23/10/2020", "dermatitis", "cerave", "manuel jesus");
pacienteA.mostrarHistorial();
