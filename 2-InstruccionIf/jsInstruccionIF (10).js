function mostrar()
{//Genero el número RANDOM entre 1 y 10 
 var nota;
nota=alert(Math.floor(Math.random()*(0,10)));
if(nota>=9){
	alert("excelente");
}
else if(nota>=4){
	alert("aprobó");
}
else{
	alert("vamos, la próxima se puede");
}
}
//FIN DE LA FUNCIÓN