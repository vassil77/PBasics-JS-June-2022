function fun1([h1,m1]) {
    let m2=parseInt(m1)+15;
    if(m2>59){
        m2=m2-60;
        h2=parseInt(h1)+1;
        if(h2>23){
            h2=h2-24;
        }
    } 
    else {
        h2=parseInt(h1);
    }
    if(m2>9){
        console.log(`${h2}:${m2}`);
    }
    else {
        console.log(`${h2}:0${m2}`);
    }

}



fun1([1,46]);
fun1([0,01]);
fun1([23,59]);
fun1([11,08]);