function seats([l1,w1]){
    let l=parseFloat(l1);
    let w=parseFloat(w1);
    let red=Math.trunc((w-1)/0.7);
    let kol=Math.trunc((l)/1.2);
    let nseats=red*kol-3;
    console.log(nseats);
}

seats([15,8.9])
seats([8.4,5.2])
seats([3,3])
