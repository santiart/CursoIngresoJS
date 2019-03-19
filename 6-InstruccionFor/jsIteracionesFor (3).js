function mostrar()
{
    var repeticiones=parseInt(prompt("ingrese el numero de respeticiones"));
    var i;

    while(isNaN(repeticiones))
    {
        repeticiones=parseInt(prompt("error.ingrese el numero de respeticiones"));
    }

    var i;

    for(i=repeticiones;i>0;i--)
    {
        alert("Hola UTN FRA");
    }
}
//FIN DE LA FUNCIÓN