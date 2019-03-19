function mostrar()
/*
{
    var planeta=prompt("ingrese un planeta");
    switch(planeta){
        case "tierra":{
        alert("aca vivimos");
        break;
    }
    case "mercurio":
    case "venus":{
        alert("aca hace mas calor");
        break;
    }
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":{
        alert("aca hace mas frio");
        break;
    }
    default:{
        alert("el planeta no existe");
        break;
    }
}
}
*/



{
    var dia=parseInt(prompt("ingrese la cantidad de dias para viajar"));
    var precio=dia*100;
    var continente=document.getElementById("Continente").value;
    var descuento;
    var MedioDePago=document.getElementById("MedioDePago").value;
    var precioFinal;
    var recargo;


    switch(continente)
    {
        case "América":

        descuento=0.5;

        switch(MedioDePago)
        {
            case "Débito":

            descuento=descuento+0.10;

            break;
            case "Efectivo":
            break;
            case "MercadoPago":
            break;
        }
        break;
        case "Europa":

        descuento=0.20;

        switch(MedioDePago)
        {
            case "Débito":

            descuento=descuento+0.15;

            break;
            case "Efectivo":

            descuento=descuento+0.05;
            
            break;
            case "MercadoPago":

            descuento=descuento+0.10; 

            break;
        }
        break;

        case "África":

        descuento=0.60;

        switch(MedioDePago)
        {
            case "Débito":
            break;
            case "Efectivo":
            case "MercadoPago":

            descuento=descuento+0.15;
            break;
        }
        break;
        case "Oceanía":
        case "Asia":

        recargo=0.20;
        break;
    }

    precioFinal=precio*recargo;

    switch(continente)

    {
        case "Oceania":
        case "Asia":

        precioFinal=precio*descuento;

        alert("Precio sin descuento : "+precio + "\n" + "porcentaje de descuento : "+descuento + "\n" + "precio con descuento : "+ precioFinal );

        break;

        default:

        precioFinal=precio*recargo;

        alert("Precio sin recargo : "+precio + "\n" + "porcentaje de recargo : "+descuento + "\n" + "precio con recargo : "+ precioFinal );
    }
}