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

/*
{
    var preciofinal;
    preciofinal=prompt("ingrese el precio final");
    var totalpago;
    totalpago= preciofinal*  1.1;
    totalpago=parseInt(totalpago);
    alert("el precio final mas el 10% de propina, sin incluir el iva es:" +totalpago) ;
}*/
