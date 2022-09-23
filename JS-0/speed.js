function speed(a){
    if(a<=10){
        console.log("slow");
    }
    else if(a<=50) {
        console.log("average");
    }
    else if(a<=150) {
        console.log("fast");
    }
    else if(a<=1000) {
        console.log("ultra fast");
    }
    else  {
        console.log("extremely fast");
    }
    

}

speed(8);
speed(49.5);
speed(126);
speed(160);
speed(3500);
