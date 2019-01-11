// calc.js
//
// node calc.js 1 'plus' 2
//  0     1     2   3    4
//
let firstInt = parseInt(process.argv[2]);
let operator = process.argv[3].toString();
let secondInt = parseInt(process.argv[4]);
let result = firstInt + secondInt;
console.log(result);
