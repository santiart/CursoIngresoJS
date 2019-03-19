function mostrar()
{
    var letra;
   var numero;
   var respuesta;
   var numPar=0;
   var numImp=0;
   var numCero=0;
   var promedioPos;
   var acumuladorPos=0;
   var acumuladorNeg=0;
   var numMax;
   var numMin;
   var letraMin;
   var letraMax;
   var bandera=0;
   var numeroPos=0;
   var numeroNeg=0;
   var contador=0;




    do
    {

        letra=prompt("ingrese una letra");

        numero=parseInt(prompt("ingrese un numero"));

        while(isNaN(numero) || numero<-100 || numero>100)

        {
            numero=parseInt(prompt("error.ingrese un numero"));
        }


        if(numero%2==0)

        {
            numPar++;
        }
        else
        {
            numImp++;
        }

        if(numero==0)

        {
            numCero++;
        }

        if(numMax<=numero || bandera ==0)
        {
            numMax=numero;

            letraMax=letra;
        }

        if( numMin>=numero || bandera==0) 

        {
            numMin=numero;
            letraMin=letra;
        }

        if (0<numero)
        {
            numeroPos=numero;

            acumuladorPos+=numeroPos;
            
        }
        else
        {
            numeroNeg=numero;

            acumuladorNeg+=numeroNeg;
        }

        bandera++;

        contador++;

        respuesta=confirm("desea continuar?");

    }while(respuesta)

    promedioPos=acumuladorPos/contador;
    

    document.write(" cantidad de números pares: " + numPar +"<\p>" + "cantidad de números impares : "+ numImp + "<\p>" + "La cantidad de ceros :" +numCero + "<\p>" + " El promedio de todos los números positivos ingresados : "+promedioPos + "<\p>" + "suma de todos los números negativos : "+ acumuladorNeg + "<\p>"+"número y la letra del máximo : " + numMax +letraMax +"<\p>" + "número y la letra del minimo : " + numMin + letraMin);

}
