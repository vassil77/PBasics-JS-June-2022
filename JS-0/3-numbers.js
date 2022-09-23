function fun1([a0,b0,c0]) {
    let a=parseFloat(a0);
    let b=parseFloat(b0);
    let c=parseFloat(c0);
    if(a===b && b===c){
        console.log("yes");
    }
    else {
        console.log("no");
    }
}



fun1([5,5,5]);
fun1([5,4,5]);
fun1([1,2,3]);