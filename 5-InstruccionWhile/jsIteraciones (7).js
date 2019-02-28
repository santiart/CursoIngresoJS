function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;

	do
	{
		numero=parseInt(prompt("ingrese un numero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("error!,el numero ingresado no es valido, por favor ingrese otro numero"));
		}
		acumulador=acumulador+numero;
		contador++
		respuesta=confirm("¿desea agregar otro numero?");
	}while(respuesta==true)
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
document.getElementById("contador").value=contador;

}//FIN DE LA FUNCIÓN