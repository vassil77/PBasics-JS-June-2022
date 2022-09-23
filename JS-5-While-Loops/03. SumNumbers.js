function SumNumbers(params) {
    
    let max=params[0];

    let sum=0;
    let currentNumber=Number(params[1]);
    let i=2;

    while (sum<max) {
        sum+=currentNumber;

        currentNumber=Number(params[i++]);
    }

    if (sum>=max) {
        console.log(sum);
    }





}
SumNumbers
(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;

console.log(`-----------------`);




