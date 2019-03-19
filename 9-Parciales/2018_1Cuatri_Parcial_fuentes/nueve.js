function mostrar()
{
    var pais;
    var habitantes;
    var temperatura;
    var respuesta;
    var temp_par=0;
    var hab_min;
    var cont_pais_40g=0;
    var pais_min;
    var temp_min;
    var flag=0;
    var prome_habit=0;
    var cont_habit=0;
 
 
 
     do
     {
 
         pais=prompt("ingrese una pais");
 
         habitantes=parseInt(prompt("ingrese la cantidad de habitantes en ese pais en millones"));
 
         while(isNaN(habitantes) || habitantes<1 || habitantes>7000)
 
         {
            habitantes=parseInt(prompt("error ,cantidad no valida.ingrese la cantidad de habitantes en ese pais en millones"));
         }

         temperatura=parseInt(prompt("ingrese la temperatura minima registrada del lugar"));

         while(isNaN(temperatura) || temperatura<-50 || temperatura>50)
 
         {
            temperatura=parseInt(prompt("error,esa temperatura no es valida.ingrese la temperatura minima registrada del lugar"));
         }
 
 
         if(temperatura%2==0)
 
         {
             temp_par++;
         }
 
         if(temperatura>40)
         {
           cont_pais_40g++;
         }
 
         if( hab_min>=habitantes || flag==0) 
 
         {
             hab_min=habitantes;
             pais_hab_min=pais;
         }
 
         if (temperatura<temp_min || flag==0)
         {
             temp_min=temperatura;

             pais_min=pais;
             
         }
 
         flag++;

         cont_habit++;

         prome_habit+=habitantes;         
 
         respuesta=confirm("desea continuar?");
 
     }while(respuesta)


     prome_habit=prome_habit/cont_habit;
 
     
     
 
     document.write("La cantidad de temperaturas pares: "+ temp_par + "<\p>" + "El nombre del pais con menos habitantes: " + pais_hab_min + "<\p>" + "cantidad de paises que superan los 40 grados : " +cont_pais_40g + "<\p>" + "el promedio de habitantes entre los paises ingresados	 "+prome_habit + "<\p>" +  "la temperatura minima ingresada fue en:" + pais_min + " de : " + temp_min );
 
}
