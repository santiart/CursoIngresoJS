function mostrar()

{
 var precio=parseInt(prompt("ingrese el precio"));
 var porcentaje=parseInt(prompt("ingrese el porcentaje de descuento"));
 var preciofinal=(precio % porcentaje);
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
