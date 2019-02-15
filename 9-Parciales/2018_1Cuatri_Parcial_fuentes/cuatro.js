function mostrar()
{
    var precio;
    precio=prompt("ingrese el precio de la compra");
    var preciodesc;
    var preciotarjeta;
    var tarjeta;
    tarjeta=prompt("ingrese si el pago se hara con tarjeta");
    if(libros>2){
        var libros;
        libros=prompt("ingrese la cantidad de libros");
    preciodesc= precio * 0.9;
    alert("el precio con descuento es de:" + preciodesc);
    }
    else if (precio>=2000){
        preciodesc= precio * 0.85;
        alert("el precio con descuento es de:" + preciodesc);
    }
    else if(tarjeta=si){
            preciotarjeta=precio * 1.1;
            alert("el precio final con recargo por tarjeta es de" + preciotarjeta);
        }

}
