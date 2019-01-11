// calc.js
//
// node calc.js 1 'plus' 2
//  0     1     2   3    4
//
let firstInt = process.argv[2];
let operator = process.argv[3];
let secondInt = process.argv[4];
console.log(firstInt+' '+operator+' '+secondInt);
