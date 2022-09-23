function metric([s11,m11,m22]){
let s1=parseFloat(s11);
let m1=m11.toLowerCase();
let m2=m22.toLowerCase();
if(m1==="mm"){ // Входяща
    s1=s1/1000;
}  
if(m1==="cm"){
    s1=s1/100;
}
if(m1==="mi"){
    s1=s1/0.000621371192;
}
if(m1==="in"){
    s1=s1/39.3700787;
}
if(m1==="km"){
    s1=s1/0.001;
}
if(m1==="ft"){
    s1=s1/3.2808399;
}
if(m1==="yd"){
    s1=s1/1.0936133;
}



if(m2==="mm"){     // Изходяща
    s1=s1*1000;
}  
if(m2==="cm"){
    s1=s1*100;
}
if(m2==="mi"){
    s1=s1*0.000621371192;
}
if(m2==="in"){
    s1=s1*39.3700787;
}
if(m2==="km"){
    s1=s1*0.001;
}
if(m2==="ft"){
    s1=s1*3.2808399;
}
if(m2==="yd"){
    s1=s1*1.0936133;
}

console.log(s1);

}

metric([12,"km","ft"]);
metric([150,"mi","in"]);
metric([450,"yd","km"]);