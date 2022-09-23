function GreaterNumber(params) {

   let num1=Number(params[0]);
   let num2=Number(params[1]);

    if (num1>num2) {
        console.log(num1);
    } else {
        console.log(num2);
  
    }


}

GreaterNumber
(["5", "3"])
;
GreaterNumber
(["3", "5"])
;
GreaterNumber
(["10", "10"])
;
GreaterNumber
(["-5", "5"])
;