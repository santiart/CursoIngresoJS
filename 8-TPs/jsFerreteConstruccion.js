/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{var largo;
    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);
var ancho;
ancho=document.getElementById("Ancho").value;
ancho=parseInt(ancho);
var alambre;
alambre= (largo + ancho) * 3;
alert("la cantidad de alambre a usar es de:"  + alambre);
}
function Circulo () 
{var radio;
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
var cantidadalambre;
cantidadalambre= (radio*2) * 3;
alert("la cantidad de alambre a usar es:" + cantidadalambre); 
	
}
function Materiales () 

{var largo;
    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);
var ancho;
ancho=document.getElementById("Ancho").value;
ancho=parseInt(ancho);
var area;
area= largo + ancho;
var cemento;
cemento= area * 2;
var cal;
cal= area*3;
alert("usted necesita" + cemento+ "bolsas de cemento"  +  " y ademas,usted necesita"+cal+"bolsas de cal");
	
}