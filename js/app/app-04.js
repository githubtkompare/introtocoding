/* app.js
IF the operator is 'plus', THEN add the integers
ELSE IF the operator is 'minus' THEN subtract the integers
*/
let result;
let firstInt = parseInt(process.argv[2]);
let operator = process.argv[3].toString();
let secondInt = parseInt(process.argv[4]);

if(operator === 'plus'){
  result = firstInt + secondInt;
} else if (operator === 'minus') {
  result = firstInt - secondInt;
}
console.log(result);

/*
Try: 1 'minus' 2
Try: 1 'times' 2
*/
