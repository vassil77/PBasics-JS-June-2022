function interval(n){
    let p=parseInt(n);
    if(p<100){
        console.log("Less than 100");
    } 
    else if(p<=200){
        console.log("Between 100 and 200");
    }
    else {
        console.log("Greater than 200");
    } 
}


interval(95);
interval(120);
interval(210);