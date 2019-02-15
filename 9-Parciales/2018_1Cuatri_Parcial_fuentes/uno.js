function mostrar()
/*
{ var ancho;
    ancho=prompt("ingrese el ancho");
    ancho=parseInt(ancho);
 var largo;
 largo=prompt("ingrese el largo");
 largo=parseInt(largo);
 var perimetro;
 perimetro= 2* (largo + ancho),
 alert("el resultado del perimetro es:"+ perimetro);
}
*/
{
    var nombre1;
    nombre1=prompt("ingrese el nombre de su mascota");
    var peso1;
    peso1= prompt("ingrese el peso de la primera mascota");
    peso1=parseInt(peso1);
    var nombre2;
    nombre2=prompt("ingrese el nombre de su mascota");
    var peso2;
    peso2= prompt("ingrese el peso de la segunda mascota");
    peso2=parseInt(peso2);
    var suma;
    suma= peso1 + peso2;
    alert("tenes dos mascotas"+nombre1+"  y  "+ nombre2+" , que pesan"+ peso1 +"  y  "+ peso2 +",la suma de de los kilos es" +suma);
}