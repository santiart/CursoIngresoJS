/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{    var preciouno;
    preciouno=document.getElementById("PrecioUno").value;
    preciouno=parseInt(preciouno);
    var preciodos;
    preciodos=document.getElementById("PrecioDos").value;
    preciodos=parseInt(preciodos);
    var preciotres;
    preciotres=document.getElementById("PrecioTres").value;
    preciotres=parseInt(preciotres);
    var suma;
    suma= preciouno + preciodos + preciotres;
    alert("el resultado de la suma es:" + suma);
}
function Promedio () 
{    var preciouno;
     preciouno=document.getElementById("PrecioUno").value;
     preciouno=parseInt(preciouno);
     var preciodos;
     preciodos=document.getElementById("PrecioDos").value;
     preciodos=parseInt(preciodos);
     var preciotres;
     preciotres=document.getElementById("PrecioTres").value;
     preciotres=parseInt(preciotres);
     var resultado;
     resultado=preciouno + preciodos + preciotres / 3;
     alert("el promedio es:" + resultado);

	
}
function PrecioFinal () 
{ var preciouno;
    preciouno=document.getElementById("PrecioUno").value;
    preciouno=parseInt(preciouno);
    var preciodos;
    preciodos=document.getElementById("PrecioDos").value;
    preciodos=parseInt(preciodos);
    var preciotres;
    preciotres=document.getElementById("PrecioTres").value;
    preciotres=parseInt(preciotres);
    var preciofinal;
    preciofinal= (preciouno + preciodos + preciotres)* 1.21;
    alert("el precio final es:"  + preciofinal);
}