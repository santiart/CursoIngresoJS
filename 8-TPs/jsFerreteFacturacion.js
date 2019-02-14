/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{    var preciouno;
    preciouno=document.getElementById("precioUno").nodeValue;
    preciouno=parseInt(preciouno);
    var preciodos;
    preciodos=document.getElementById("precioDos").value;
    preciodos=parseInt(preciodos);
    var preciotres;
    preciotres=document.getElementById("precioTres").value;
    preciotres=parseInt(preciotres);
    var suma;
    suma= preciouno + preciodos + preciotres;
    suma=alert("el resultado de la suma es:" + suma);
}
function Promedio () 
{    var preciouno;
     preciouno=document.getElementById("precioUno").value;
     preciouno=parseInt(preciouno);
     var preciodos;
     preciodos=document.getElementById("precioDos").value;
     preciodos=parseInt(preciodos);
     var preciotres;
     preciotres=document.getElementById("precioTres").value;
     preciotres=parseInt(preciotres);
     var resultado;
     resultado=preciouno + preciodos + preciotres / 3;
     resultado=alert("el promedio es:" + resultado);

	
}
function PrecioFinal () 
{ var preciouno;
    preciouno=document.getElementById("precioUno").value;
    preciouno=parseInt(preciouno);
    var preciodos;
    preciodos=document.getElementById("precioDos").value;
    preciodos=parseInt(preciodos);
    var preciotres;
    preciotres=document.getElementById("precioTres").value;
    preciotres=parseInt(preciotres);
    var resultado;
    resultado=(preciouno + preciodos + preciotres) + 21%;
}