function mostrar()

{
  var contador=0;
  var nota=0;
  var notai=0;
  var nota6=0;
  var notamin=0;
  var sexo;
  var sexonotam=0;
  var promnotas=0;
  var bandera=true;
  while(contador<5){
    notai=parseInt(prompt("ingrese la calificacion"));
    while(notai>10||notai<0||isNaN(notai)){
      notai=parseInt(prompt("error, ingrese nuevamente la calificacion"));
    }
    nota=nota+notai;
    sexo=prompt("ingrese f o m");
    while(sexo!="f"&&sexo!="m"){
      sexo=prompt("sexo invalido, ingrese el sexo nuevamente");
    }
    if(bandera){
      bandera=false;
      notamin=notai;
    }
    else{
      if(notamin>notai){
        notamin=notai;
      }
    }
    if(notamin==notai&&sexo=="f"){
      sexonotam=sexo;
    }
    if(notamin==notai&&sexo=="m"){
      sexonotam=sexo;
    }
    if(notai>=6&&sexo=="m"){
      nota6++;
    }
    contador++;
  }
  promnotas=nota/contador;
  alert("el promedio de las notas es: "+ promnotas);
  alert(nota6 + "varones tienen una calificaion de 6 o mas");
  alert("la nota mas baja es " + notamin + "y su sexo es " + sexonotam);
}
