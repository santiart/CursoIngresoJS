/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()


{
    var dividendo;
    dividendo= document.getElementById("numeroDividendo").value;
    dividendo=parseInt(dividendo);
     var divisor;
    divisor= document.getElementById("numeroDivisor").value;
    divisor=parseInt(divisor);
    var  resto;
     resto= dividendo % divisor;
    alert(resto);	
}
