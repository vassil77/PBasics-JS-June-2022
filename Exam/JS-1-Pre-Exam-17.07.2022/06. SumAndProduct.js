function SumAndProduct(params) {

    let n = Number(params[0]);

    let isFound=false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {

                    if ((a + b + c + d) === a * b * c * d && n % 10 === 5) {
                        console.log(a*1000+b*100+c*10+d);
                        isFound=true;
                        break;
                    }

                    if (Math.floor(a * b * c * d/(a + b + c + d)) ===3  && n % 3 === 0) {
                        console.log(d*1000+c*100+b*10+a);
                        isFound=true;
                        break;
                    }



                }

                if (isFound) {
                    break;
                }
        

               

            }

            if (isFound) {
                break;
            }
    
           

        }

        if (isFound) {
            break;
        }

    }

    if (!isFound) {
        console.log(`Nothing found`);
    }


}

SumAndProduct

    (["123"])


;



//console.log(`-----------------`);