function mostrar()


{
    var imp1;
    imp1=prompt("ingrese el primer importe");
    imp1=parseInt(imp1);
    var imp2;
    imp2=prompt("ingrese el segundo importe");
    imp2=parseInt(imp2);
    var imp3;
    imp3=prompt("ingrese el tercer importe");
    imp3=parseInt(imp3);
    var imp4;
    imp4=prompt("ingrese el cuarto importe");
    imp4=parseInt(imp4);
    var imptotal;
    imptotal=imp1+imp2+imp3+imp4;
    var impmayor;
    if((imp1>imp2)&&(imp1>imp3)&&(imp1>imp4)){
        impmayor=imp1;
    }
    else{
        if((imp2>imp3)&&(imp2>imp4)){
            impmayor=imp2;
        }
        if(imp3>imp4){
            impmayor=imp3;
        }
        else{
            impmayor=imp4;
        }
        if(imptotal>=100){
            imptotal=(imptotal*0.90);
        }
        else{
            if(imptotal>=50){
                imptotal=(imptotal*0.95);
            }
        else{
            if(imptotal<50){
                imptotal=(imptotal*1.15);
            }
        }
    }
}
alert("el precio final es de  :"+imptotal + "el mayor importe es  :"+impmayor );
}