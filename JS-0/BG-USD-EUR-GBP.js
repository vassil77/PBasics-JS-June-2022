function conv([p, v1, v2]){
    if (v1==="BGN"){ 
        pbg=p;
    }
   

    if (v1==="USD"){
        pbg=p*1.79549;
    }
    
    if (v1==="EUR"){ 
        pbg=p*1.95583;
    }
    
    if (v1==="GBP"){ 
        pbg=p*2.53405;
    }



    if (v2==="BGN") {
        console.log(pbg.toFixed(2)+` ${v2}`);
    }
    
    if (v2==="USD") {
        console.log((pbg/1.79549).toFixed(2)+` ${v2}`);
    }
    
    if (v2==="EUR") {
        console.log((pbg/1.95583).toFixed(2)+` ${v2}`);
    }

    if (v2==="GBP") {
        console.log((pbg/2.53405).toFixed(2)+` ${v2}`);
    }
}
conv([150.35, "USD", 'EUR']);