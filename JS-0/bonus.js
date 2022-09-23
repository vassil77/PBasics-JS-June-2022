function bonus(p){
    let n=parseInt(p);
    let b1=0;
    if(n<=100){
    b1=5;
    } else if (n<=1000){
    b1=0.2*n;
    } else {
    b1=0.1*n;
    }
    let b2=0;
    if(n%2===0){
    b2=1;
    }
    let b3=0;
    if(n%10===5){
    b3=2;
    }
    console.log(b1+b2+b3);
    console.log(n+b1+b2+b3);
}

bonus(20);
bonus(175);
bonus(2703);
bonus(15875);