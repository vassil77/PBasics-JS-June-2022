function sumseconds([s11,s22,s33]){
let s1=parseInt(s11);
let s2=parseInt(s22);
let s3=parseInt(s33);
let sum=s1+s2+s3;
let min=Math.floor(sum/60);
let sec=sum%60;
if(sec<10){
    console.log(`${min}:0${sec}`);
} else {
    console.log(`${min}:${sec}`);
}
}

sumseconds([35,45,44]);
sumseconds([50,50,49]);
sumseconds([22,7,34]);
sumseconds([14,12,10]);