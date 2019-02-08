function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
var estadocivil;
estadocivil=document.getElementById("estadoCivil").value;
if((edad<18) && (estadocivil!="Soltero")){
    alert("es muy pequeño para no estar soltero");
}
}//FIN DE LA FUNCIÓN