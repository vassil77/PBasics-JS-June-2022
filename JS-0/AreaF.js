function areaf([t,a,b]){
    if(t=="square"){
        A=(a*a);
    }
    else if(t=="rectangle"){
        A=(a*b);
    }
    else if(t=="circle"){
        A=(Math.PI*a*a);
    }
    else if(t=="triangle"){
        A=(a*b/2);
    }

    console.log(Math.round(A*1000)/1000);
}

areaf(["square",5]);
areaf(["rectangle",7, 2.5]);
areaf(["circle",6]);
areaf(["triangle",4.5,20]);
