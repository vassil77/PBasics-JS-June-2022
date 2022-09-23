function AP([x1, y1, x2, y2]){
    let w=Math.max(x1, x2)-Math.min(x1, x2);
    let h=Math.max(y1, y2)-Math.min(y1, y2);
    console.log(w*h);
    console.log(2*(w+h));
}

AP([60, 20, 10, 50]);