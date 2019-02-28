function mostrar()
/*
{

	// declarar variables
	var acumulador;
	var num1;
	var max;
	var min;
	var contador=0;
	var respuesta;
	do{
		num1=parseInt(prompt("ingrese un numero"));
		while(isNaN(num1)){
			num1=parseInt(prompt("error, el numero es invalido, por favor ingrese un numero nuevamente"));
		}
		if(num1>max||contador==0){
			max=num1;
		}
		if(num1<min||contador==0){
			min=num1;
		}
		contador=1
		respuesta=confirm("¿quiere ingresar otro numero?");
	}while(respuesta==true)
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;

}//FIN DE LA FUNCIÓN
*/


{
  // declarar variables
	var acumulador;
	var num1;
	var max;
	var min;
	var bandera=true;
  var respuesta;
	do{
		num1=parseInt(prompt("ingrese un numero"));
		while(isNaN(num1)){
			num1=parseInt(prompt("error, el numero es invalido, por favor ingrese un numero nuevamente"));
    }
    if(bandera){
      bandera=false;
      max=num1;
      min=num1;
    }
    else{
		if(num1>max){
			max=num1;
		}
		if(num1<min){
			min=num1;
    }
   }
		respuesta=confirm("¿quiere ingresar otro numero?");
	}while(respuesta==true)
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;
}
