function Time15Minutes(params) {
    
let hour1=parseInt(params[0]);
let min1=parseInt(params[1]);

let hour2=hour1;
let min2=min1+15;

if (min2>59) {
    min2-=60;
    hour2+=1;
} 

if (hour2>23) {
    hour2-=24;
}

if (min2<=9) {
    console.log(`${hour2}:0${min2}`);
} else {
    console.log(`${hour2}:${min2}`);

}




}

Time15Minutes
(["1", "46"])
;
Time15Minutes
(["0", "01"])
;
Time15Minutes
(["23", "59"])

;
Time15Minutes
(["11", "08"])

;

