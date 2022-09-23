function Vacation(params) {
    let neededMoney = Number(params[0]);
    let money = Number(params[1]);

    let dayCounter = 0;
    let serialCounter = 0;

    for (let i = 2; i < params.length; i += 2) {
        let command = params[i];
        dayCounter++;

        switch (command) {
            case "spend":
                money -= Number(params[i + 1]);
                if (money<0) {
                    money=0;
                }
                serialCounter++;
                break;
            case "save":
                money += Number(params[i + 1]);
                serialCounter = 0;

                break;

        }

        if (serialCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            break;
        }

        if (money >= neededMoney) {
            console.log(`You saved the money for ${dayCounter} days.`);
            break;
        }

    }





}
Vacation
(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
;



console.log(`-----------------`);