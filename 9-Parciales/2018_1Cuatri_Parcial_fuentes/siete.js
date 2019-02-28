function mostrar()
{
  var numero;
  var nota;
  var sexo;
  var contador=0;
  var promnotas=0;
  var cantnotas=0;
  var sumanotas=0;
  var nmin;
  var nmax;
  var bandera=true;

    while(contador>5){
      nota=parseInt(prompt("ingrese la calificacion"));
      contador++
    do{
      while(isNaN(nota)){
      nota=parseInt(prompt("error, ingrese la calificacion"));
    }
    sexo=parseInt(prompt("ingrese f o m").toLocaleLowerCase());
    while(!(sexo =="F"||sexo=="M")){
      sexo=parseInt(prompt("error, ingrese f o m").toLocaleLowerCase());
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
}
