function fun1(a0) {
    let a=parseInt(a0);
    let l="";
    let r="";

    if(a===100){
        console.log("one hundred");
    }
    else if(a===0){
        console.log("zero");
    }
    else if(a===10){
        console.log("ten");
    }
    else if(a===11){
        console.log("eleven");
    }
    else if(a===12){
        console.log("twelve");
    }
    else if(a===13){
        console.log("thirteen");
    }
    else if(a===14){
        console.log("fourteen");
    }
    else if(a===15){
        console.log("fifteen");
    }
    else if(a===16){
        console.log("sixteen");
    }
    else if(a===17){
        console.log("seventeen");
    }
    else if(a===18){
        console.log("eighteen");
    }
    else if(a===19){
        console.log("nineteen");
    }
    else {
        if(a<10){
             l="";
        }
        else if(a<30){
             l="twenty";
        }
        else if(a<40){
             l="thirty";
        }
        else if(a<50){
             l="forty";
        }
        else if(a<60){
             l="fifty";
        }
        else if(a<70){
             l="sixty";
        }
        else if(a<80){
             l="seventy";
        }
        else if(a<90){
             l="eighty";
        }
        else if(a<100){
             l="ninety";
        }
        if((a+10)%10===0){
             r="";
        }
        if((a+10)%10===1){
             r="one";
        }
        if((a+10)%10===2){
             r="two";
        }
        if((a+10)%10===3){
             r="three";
        }
        if((a+10)%10===4){
             r="four";
        }
        if((a+10)%10===5){
             r="five";
        }
        if((a+10)%10===6){
             r="six";
        }
        if((a+10)%10===7){
             r="seven";
        }
        if((a+10)%10===8){
             r="eight";
        }
        if((a+10)%10===9){
             r="nine";
        }
        if(l===""){
            console.log(`${r}`);
        }
        else if(r===""){
            console.log(`${l}`);
        }
        else {
            console.log(`${l} ${r}`);
        }
        
    }
}


for(i=0;i<=100;i++){
    fun1([i]);
}

