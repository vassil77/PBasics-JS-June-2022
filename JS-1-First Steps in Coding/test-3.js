

const set22 = [2*56, 2*36.66, 2*42.10, 2*20];
const set55 = [5*28.7, 5*19.6, 5*24.8, 5*15.2];

set2 = set22.map(myFunction);
set5 = set55.map(myFunction);

function myFunction(num) {
    return num * 1;
}
console.log(set5);
