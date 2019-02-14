function mostrar()
{
 var precio;
 precio=prompt(" ingrese el precio");
 precio=parseInt(precio);
 var porcentaje;
 porcentaje=prompt("ingrese el porcentaje");
 porcentaje=parseInt(porcentaje);
 var preciofinal;
 preciofinal=precio / porcentaje;
 document.getElementById("elPrecioFinal").value=preciofinal;
}
