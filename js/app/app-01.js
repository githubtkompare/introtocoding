/* app.js
node app.js 1 'plus' 2    <-- Argument values
 [0] [1]   [2] [3]  [4]   <-- Argument addresses

process.argv is an array!
*/
let firstInt = process.argv[2];
let operator = process.argv[3];
let secondInt = process.argv[4];
console.log(firstInt+' '+operator+' '+secondInt);

/*
Try: 1 'plus' 2
*/
