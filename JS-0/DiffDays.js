function daysDiff(dt1, dt2) { 
    
    var diffTime =(dt2.getTime() - dt1.getTime()); 
    
    var daysDiff = diffTime / (1000 * 3600 * 24); 

    return daysDiff; 

    
}

dt1 = new Date('2019-11-27'); 
dt2 = new Date('2017-11-29'); 
var days = daysDiff(dt1, dt2); 
console.log( `calculate difference between two dates in days javascript : ` + days );
