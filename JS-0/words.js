function word([a1,b1]){
    let a=a1.toLowerCase();
    let b=b1.toLowerCase();
    if(a===b){
        console.log("yes");
    }
    else{
        console.log("no");

    }


}
word(["Hello","Hello"]);
word(["Softuni","softuni"]);
word(["Soft","Uni"]);
word(["beer","vodka"]);
