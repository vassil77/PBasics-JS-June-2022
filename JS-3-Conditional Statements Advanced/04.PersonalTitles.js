function PersonalTitles(params) {

    let age = Number(params[0]);
    let sex = params[1];


    if (sex === "m") {
        if (age < 16) {
            console.log(`Master`);
        } else {
            console.log(`Mr.`);
        }
    } else {
        if (age < 16) {
            console.log(`Miss`);
        } else {
            console.log(`Ms.`);
        }

    }

}




    PersonalTitles(["12", "f"]);