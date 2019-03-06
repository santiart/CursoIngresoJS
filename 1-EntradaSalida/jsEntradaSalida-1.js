//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
/*
{
	alert("esto funciona de maravilla");
	
}
*/

{

	var a;
	var b;
	var c;
	var cuadratica;
	var solucion1;
	var solucion2;
	
	a=parseInt(prompt("ingrese un numero"));
	while (isNaN(a))
	{
		a=parseInt(prompt("error.ingrese un numero"));
	}
	
	b=parseInt(prompt("ingrese un numero"));
	while (isNaN(b))
	{
		b=parseInt(prompt("error.ingrese un numero"));
	}
	
	c=parseInt(prompt("ingrese un numero"));
	while (isNaN(c))
	{
		c=parseInt(prompt("error.ingrese un numero"));
	}
	
	cuadratica=Math.sqrt(b*b-4*a*c);
	
	solucion1=(-(b)+cuadratica)/(2*a);
	
	solucion2=(-(b)-cuadratica)/(2*a);
	
	if (isNaN(solucion1))
	{
		alert("solucion 1 : no existe");
	}
	else
	{
		alert("la solucion 1 es: "+solucion1);
	}
	if(isNaN(solucion2))
	{
		alert("solucion 2 : no existe");
	}
	else
	{
		alert("la solucion 2 es: "+solucion2);
	}
	
	

}
