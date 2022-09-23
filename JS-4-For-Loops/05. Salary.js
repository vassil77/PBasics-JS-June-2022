function Salary(params) {

    let nTabs = Number(params[0]);
    let salary = Number(params[1]);

    for (let i = 0; i < nTabs; i++) {
        switch (params[i + 2]) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary<=0) {
            console.log(`You have lost your salary.`);
            break;
        }

       
    }
    if (salary>0) {
        console.log(salary.toFixed(0));
    }



}

Salary
    (["10",
        "750",
        "Facebook",
        "Dev.bg",
        "Instagram",
        "Facebook",
        "Reddit",
        "Facebook",
        "Facebook"
    ]);



console.log(`-----------------`);

Salary
(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
;
