function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
var esatdocivil;
estadocivil=document.getElementById("estadoCivil").value;
if((edad>18) && (esatdocivil!=Soltero)){
}
else{
alert("es soltero y no es menor");
}
}//FIN DE LA FUNCIÓN