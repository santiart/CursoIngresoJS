/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
*/
function CalcularPrecio ()
{
  /*
var cantlamparas;
    cantlamparas=document.getElementById("Cantidad").value;
    cantlamparas=parseInt(cantlamparas);
    if(cantlamparas>=6){
        document.getElementById("precioDescuento").value=((cantlamparas*35)*0.5);
   }
   else{
    document.getElementById("precioDescuento").value=((cantlamparas*35)*0.5);
      if
     if((cantlamparas==4)&&(document.getElementById("Marca").value=="ArgentinaLuz"||"FelipeLamparas")){
       document.getElementById("precioDescuento").value=((cantlamparas*35)*0.75);
     }
     else{
       document.getElementById("precioDescuento").value=((cantlamparas*35)*0.8);
     }
   }
}
*/

  var cantlamparas;
  cantlamparas=document.getElementById("Cantidad").value;
  cantlamparas=parseInt(cantlamparas);
  var marca;
  marca=document.getElementById("Marca").value;
  var precio=35;
  var descuento;
  switch(cantlamparas){
    case 6:{
      descuento=0.5;
      break;
    }
    case 5:{
      switch(marca){
        case "ArgentinaLuz":{
          descuento=0.6;
          break;
        }
        default:{
          descuento=0.7;
        }
      }
    }
    case 4:{
      switch(marca){
        case "ArgentinaLuz":
        case "FelipeLamparas":{
          descuento=0.75;
          break;
        }
        default:{
          descuento=0.8;
          break;
        }
      }
    }
    case 3:{
      switch(marca){
        case "ArgentinaLuz":{
          descuento=0.85;
          break;
        }
        case "FelipeLamparas":{
          descuento=0.9;
          break;
        }
        default:{
          descuento=0.95;
          break;
        }
      }
    }
  }
  document.getElementById("precioDescuento").value=((cantlamparas*precio)*descuento);
}
