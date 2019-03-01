function mostrar()

{
  var acumulador=0;
  var nota=0;
  var sexo;
  var contador=0;
  var promnotas=0;
  var cantnotas=0;
  var sumanotas=0;
  var nmin;
  var nmax;
  var bandera=true;
  while(contador<5){
    nota=parseInt(prompt("ingrese la calificacion"));
    while(isNaN(nota)){
      nota=parseInt(prompt("error, ingrese nuevamente la calificacion"));
    }
    sexo=prompt("ingrese f o m").toLocaleLowerCase();
    while((sexo =="f")&&(sexo=="m")){
      sexo=prompt("error, ingrese f o m").toLocaleLowerCase();
    }
    acumulador+=nota;
    contador++;
  } 
      if(nota<0||nota>10){
        sumanotas+=nota;
        cantnotas++
      }
      if(bandera){
        nmax=nota;
        nmin=nota;
      }
      else{
        if(nota>nmax){
          nmax=nota;
        }
        else{
          nmin=nota;
        }
      }
      promnotas=sumanotas/cantnotas;
      document.write("el promedio de las notas es: "+promnotas);
    
}

