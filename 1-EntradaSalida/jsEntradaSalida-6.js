/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
     var numero1;
    numero1= document.getElementById("numeroUno").value;
    numero1=parseInt(numero1);
     var numero2;
    numero2= document.getElementById("numeroDos").value;
    numero2=parseInt(numero2);
    var resultado;
    resultado= numero1 + numero2;
    alert("el resultado de la suma es: "+resultado);
}