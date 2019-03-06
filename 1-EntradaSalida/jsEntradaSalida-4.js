/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
   var dato=prompt("su nombre es");
   document.getElementById("elNombre").value = dato;  
}

