/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var dato;
    dato=prompt("su nombre es");
    document.getElementById("elNombre").value = dato;  
    var dato2;
    dato2=prompt("su edad es");
    document.getElementById("laEdad").value = dato2;	
}

