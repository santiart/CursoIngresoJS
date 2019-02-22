function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while((sexo="f")||(sexo="m")){
    alert("la respuesta es incorrecta");
    sexo=prompt("ingrese f o m");
}
alert("su sexo es: ")
document.getElementById('Sexo').value=sexo

}//FIN DE LA FUNCIÓN