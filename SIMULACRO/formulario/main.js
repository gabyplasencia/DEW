function Paciente(nhc, nombre, apellidos, fecNac, sexo) {
    this.nhc = nhc;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecNac = fecNac;
    this.sexo = sexo;
    this.historial = [];

    //esto tiene que imprimirse en un div
    // console.log('Se ha registrado un nuevo paciente con éxito nhc:' + this.nhc + 
    //                 ' nombre: ' + this.nombre + ' apellidos: ' + this.apellidos + 
    //                 ' fecha de nacimiento: ' + this.fecNac + ' sexo: ' + this.sexo);

    this.modificarNhc = function() {
        let nhc = window.prompt("Introduzca el nuevo NHC:")
        let consent = window.confirm("Se modificará el NHC ¿Desea continuar?");

        if(consent == true) {
            this.nhc = nhc;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarNombre = function() {
        let nombre = window.prompt("Introduzca el nuevo nombre:")
        let consent = window.confirm("Se modificará el nombre ¿Desea continuar?");

        if(consent == true) {
            this.nombre = nombre;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarApellidos = function() {
        let apellidos = window.prompt("Introduzca los nuevos apellidos:")
        let consent = window.confirm("Se modificarán los apellidos ¿Desea continuar?");

        if(consent == true) {
            this.apellidos = apellidos;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarFecNac = function() {
        let fecNac = window.prompt("Introduzca la nueva fecha de nacimiento:")
        let consent = window.confirm("Se modificará la fecha de nacimiento ¿Desea continuar?");

        if(consent == true) {
            this.fecNac = fecNac;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.modificarSexo = function() {
        let sexo = window.prompt("Introduzca el sexo:")
        let consent = window.confirm("Se modificará el sexo ¿Desea continuar?");

        if(consent == true) {
            this.sexo = sexo;
            alert("Se realizó el cambio con éxito");
        } else {
            alert("No se modificó ningún dato");
        }
    };

    this.crearEpisodio = function(){
        let id = window.prompt("ID del episodio:")
        let fecha = window.prompt("Fecha:")
        let diagnostico = window.prompt("Diagnóstico:")
        let tratamiento = window.prompt("Tratamiento:")
        let medico = window.prompt("Médico responsable:")

        let episodio = {id, fecha, diagnostico, tratamiento, medico};
        this.historial.push(episodio);
    };

    this.modificarEpisodio = function(){
        let currentEpisodio = this.historial.find(episodio => episodio.id === idSelected);
        if(currentEpisodio){
            currentEpisodio.fecha = fechaNew;
            currentEpisodio.diagnostico = diagnosticoNew;
            currentEpisodio.tratamiento = tratamientoNew;
            currentEpisodio.medico = medicoNew;
        }else {
            console.log("No se encontraron historiales con ese ID");
        }
    };

    this.mostrarHistorial = function(){
        console.log(this.historial);
    };
}

