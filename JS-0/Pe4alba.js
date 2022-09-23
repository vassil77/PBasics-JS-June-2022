function dayprofit([N,Mus,usd]){
dayNeto=(N*Mus*usd*(12+2.5)*0.750)/365;
console.log(dayNeto.toFixed(2));
}

dayprofit([21,75,1.59]);   //Comment
dayprofit([15,105,1.71]);
dayprofit([22,199.99,1.50]);