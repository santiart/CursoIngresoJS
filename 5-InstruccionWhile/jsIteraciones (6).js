function mostrar()
{

	var contador=0;
	var acumulador=0;
  var suma=0;;
	while(contador<5){
		suma=parseInt(prompt("ingrese el numero"));
		while(isNaN(suma)){
			suma=parseInt(prompt("error; ingrese nuevamente el numero"));
		}
		acumulador=acumulador+suma;
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
