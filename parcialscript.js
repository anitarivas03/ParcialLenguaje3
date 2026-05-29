// funcion principal
function registrar(){

    // validaciones
    var nombreVal = validarNombre();
    var dniVal = validarDni();
    var fechaVal = validarFecha();
    // verificar formulario
    if(nombreVal && dniVal && fechaVal){

        document.getElementById("mensajeExito").innerHTML =
        "<p class='exito'>Formulario enviado correctamente</p>";

    }else{

        document.getElementById("mensajeExito").innerHTML = "";
    }
    document.getElementById("btnPreguntas").style.display ="block";
}

// validar nombre
function validarNombre(){
    var nombre = document.getElementById("nombre").value.trim();
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    if(nombre.length < 3 || !regexNombre.test(nombre)){
        document.getElementById("errorNombre").innerHTML =
        "Ingrese un nombre valido";
        return false;
    }
    document.getElementById("errorNombre").innerHTML = "";

    return true;
}

// validar dni
function validarDni(){
    var dni = document.getElementById("dni").value;
    if(isNaN(dni) || dni.length != 8){
        document.getElementById("errorDni").innerHTML ="El DNI debe tener 8 numeros";
        return false;
    }

    document.getElementById("errorDni").innerHTML = "";
    return true;
}

// validar fecha
function validarFecha(){
    var fecha = document.getElementById("fecha").value;
    var fechaNac = new Date(fecha);
    var fechaAct = new Date();
    var edad = fechaAct.getFullYear() -
    fechaNac.getFullYear();
    if(edad < 18){
        document.getElementById("errorFecha").innerHTML ="Debe ser mayor de 18 años";
        return false;
    }

    document.getElementById("errorFecha").innerHTML = "";

    return true;
}

// preguntas
function hacerPreguntas(){
    var nacionalidad =
    prompt("¿Cual es tu nacionalidad?");
    var nivel =
    prompt("¿Cual es tu nivel de programacion?");
    var carrera =
    prompt("¿Por que elegiste esta carrera?");

    // verificar respuestas vacias
    if(nacionalidad == null){
        nacionalidad = "No respondio esta pregunta";
    }

    if(nivel == null){
        nivel = "No respondio esta pregunta";
    }

    if(carrera == null){
        carrera = "No respondio esta pregunta";
    }

    // mostrar rtas
    document.getElementById("respuestas").innerHTML =

    "<h3>Respuestas del jugador</h3>" +"<p><strong>Nacionalidad:</strong> "
    + nacionalidad + "</p>" +"<p><strong>Nivel:</strong> "
    + nivel + "</p>" +"<p><strong>Carrera:</strong> "
    + carrera + "</p>";
}