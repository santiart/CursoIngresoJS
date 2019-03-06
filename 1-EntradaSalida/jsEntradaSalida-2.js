/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var dato=parseInt(prompt("ingrese un numero"));
    while(isNaN(dato)){
        dato=parseInt(prompt("error, ingrese nuevamente un numero"));
    }
    alert("su dato es: "+dato);
}

