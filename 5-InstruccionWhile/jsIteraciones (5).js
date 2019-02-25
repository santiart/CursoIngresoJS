function mostrar() {

    var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();
    while (!(sexo == "f" ||sexo == "m")) {
        sexo = prompt("error; ingrese f o m").toLocaleLowerCase();
    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN