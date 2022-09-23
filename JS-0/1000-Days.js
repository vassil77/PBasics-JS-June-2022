function Date1000([DMY1]){ 
    dateElements = DMY1.split("-");
    dayString = dateElements[0]; 
    monthString = dateElements[1];
    yearString = dateElements[2];
    day = parseInt(dayString);
    month = parseInt(monthString); 
    year = parseInt(yearString);
    var BDate = new Date(year,month-1,day,1,1,1,1); 
    let ms1=BDate.getTime(); 
        ms2=ms1+1000*24*3600*1000
    finalDate= new Date(ms2); 
    D2=finalDate.getDate(); 
    M2=finalDate.getMonth()+1;
    Y2=finalDate.getFullYear();
    if (D2<=9 && M2<=9){
        console.log(`0${D2}-0${M2}-${Y2}`);
    } 
    else if (D2<=9 && M2>9) {
        console.log(`0${D2}-${M2}-${Y2}`);
    }
    else if (D2>9 && M2<=9) {
        console.log(`${D2}-0${M2}-${Y2}`);
    }
    else if (D2>9 && M2>9) {
        console.log(`${D2}-${M2}-${Y2}`);
    }
}
Date1000(['25-02-1995']);
Date1000(['07-11-2003']);
Date1000(['14-06-1980']);
Date1000(['01-01-2012']);
Date1000(['30-12-2002']);

