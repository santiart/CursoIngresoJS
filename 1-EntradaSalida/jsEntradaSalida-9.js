/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{
    var sueldo;
    sueldo=document.getElementById("sueldo").value;
    sueldo=parseInt(sueldo);
    var resultado;
    resultado=document.getElementById("resultado").value;
    resultado=parseInt(resultado);
   resultado= sueldo * 1.1 ;
   document.getElementById("resultado").value=resultado;
}
