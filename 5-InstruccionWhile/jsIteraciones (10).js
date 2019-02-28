function mostrar()
{

  //declarar contadores y variables
  var sumaneg=0;
  var sumapos=0;
  var cantpos=0;
  var cantneg=0;
  var cant0=0;
  var cantpar=0;
  var prompos=0;
  var promneg=0;
  var difposneg=0;
  var numero;
  var respuesta=true;
  do{
    numero=parseInt(prompt("ingrese un numero"));
    while(isNaN(numero)){
      numero=parseInt(prompt("error, ingrese nuevamente el numero"));
    }
    if(numero<0){
			sumaneg=sumaneg+numero;
      cantneg++
    }
    else if(numero>0){
			sumapos=sumapos+numero;
      cantpos++
    }
    else{
      cant0++
    }
    if(numero%2==0){
      cantpar++
    }
    respuesta=confirm("¿desea ingresar otro numero?");
  }while(respuesta==true)
  prompos=sumapos/cantpos;
  promneg=sumaneg/cantneg;
  difposneg=sumapos-sumaneg;
  document.write("1-Suma de los negativos: " + sumaneg + "<br>");
  document.write("2-Suma de los positivos: " + sumapos + "<br>");
  document.write("3-Cantidad de positivos: " + cantpos + "<br>");
  document.write("4-Cantidad de negativos: " + cantneg + "<br>");
  document.write("5-Cantidad de ceros: " + cant0 + "<br>");
  document.write("6-Cantidad de números pares: " + cantpar + "<br>");
  document.write("7-Promedio de positivos.: " + prompos + "<br>");
  document.write("8-Promedios de negativos: " + promneg + "<br>");
  document.write("9-Diferencia entre positivos y negativos, (positvos-negativos): " + difposneg + "<br>");

}//FIN DE LA FUNCIÓN

/*
{
  if(numero<0){
    sumaneg=sumaneg+numero;
    cantneg++
  }
  else{
    if(numero>0){
      sumapos=sumapos+numero;
      cantpos++
    }
    else{
      cant0++
    }
    if(numero%2==0){
      cantpar++
    }
  }
}
*/ //codigo sin else if//
