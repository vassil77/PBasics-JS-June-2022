function projects(input) {
    let name=input[0];
    let projectNumbers=Number(input[1]);
    let hours=projectNumbers*3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projectNumbers} project/s.`);
}

projects(["George","4"]);
projects(["Sanya","9"]);