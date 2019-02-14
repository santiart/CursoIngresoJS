function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Julio":
    case "Agosto":{
        alert("abrigate que hace frio");
        break;
    }
    default:{
         alert("falta para el invierno");
        break;
    }
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":{
        alert("ya paso el invierno");
        break;
    }
    }





}//FIN DE LA FUNCIÓN