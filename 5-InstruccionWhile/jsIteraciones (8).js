function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var contadorn=0;
	var numero;
	var respuesta;
	do{
		numero=parseInt(prompt("ingrese un numero"));
		while(isNaN(numero)){
			numero=parseInt(prompt("error!,el numero que ha ingresado es incorrecto, por favor ingrese nuevamente un numero"));
		}
		if (numero>0){
			positivo=positivo+numero;
		}
		else{
			negativo=negativo*numero;
			contadorn++;
		}
		contador++;
		if(contadorn==0){
			negativo=0;
		}
		respuesta=confirm("¿desea ingresar otro numero?");
	}while(respuesta==true)


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
document.getElementById("contador").value=contador;
}//FIN DE LA FUNCIÓN