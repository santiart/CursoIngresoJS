/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;
    fahrenheit=document.getElementById("Temperatura").value;
    fahrenheit=parseInt(fahrenheit);
    var centigrados;
    centigrados= (fahrenheit - 32)/1.8;
    alert("la temperaura en centigrados es:"  + centigrados);
}

function CentigradosFahrenheit () 
{ var centigrados;
    centigrados=document.getElementById("Temperatura").value;
    centigrados=parseInt(centigrados);
    var fahrenheit;
    fahrenheit= (centigrados*1.8) + 32;
    alert("la temperatura en fahrenheit es:"  +fahrenheit);
	
}
