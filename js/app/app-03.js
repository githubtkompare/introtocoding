/* app.js
IF the operator is 'plus', THEN add the integers
ELSE subtract the integers
*/
let result;
let firstInt = parseInt(process.argv[2]);
let operator = process.argv[3].toString();
let secondInt = parseInt(process.argv[4]);

if(operator === 'plus'){
  result = firstInt + secondInt;
} else {
  result = firstInt - secondInt;
}
console.log(result);

/*
Try: 1 'plus' 2
Try: '1' 'orange' '2'
*/
