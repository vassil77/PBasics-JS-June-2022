function Stars(n) {


    var a="*"
    for (let i=1;i<n;i++){
        var a=a.concat("*");
    };
    console.log(a);
    var b='*';
    l=n-1;
    for (let k=1;k<l;k++){
        var b=b.concat(" ");
    };
    var b=b.concat("*");
    for (let r=1;r<l;r++){
        console.log(b);
    };
    console.log(a);
}

Stars(3)