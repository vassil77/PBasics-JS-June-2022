function euro([Nbc,Nku,com]){
eur=(Nbc*1168+Nku*0.15*1.760)/1.95*(1-com/100);
console.log(eur.toFixed(2));
}
euro([1,5,5]);
euro([20,5678,2.4]);
euro([7,50200.12,3]);
a=5;
a+=2;
console.log(a);