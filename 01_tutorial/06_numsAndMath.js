// const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance.toString() + 3);
// //concatenation of string + number
// console.log(balance.toFixed(2));


const otherBalance = 23.237684
// console.log(otherBalance.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'));// International System of Numeration


const thousands = 1000000
// console.log(thousands.toLocaleString('en-IN'));// Indian System of Numeration



//***********************maths********************************************** */
/*
console.log(Math.abs(-4));//converts negative to positive, not positive to negative
console.log(Math.round(4.6));//rounds decimal value to nearest integer
console.log(Math.ceil(4.1));//rounds decimal value to nearest integer above the given value
console.log(Math.floor(4.9));//rounds decimal value to nearest integer below the given value

const plate = [2, 3, 4, 6, 7];
console.log(Math.min(...plate)); // smallest element of an array

console.log(Math.max(5,2,234,6,6445645,234));//prints highest value in a series.
*/

console.log(Math.random().toFixed(0));// only 0 and 1

console.log(Math.floor((Math.random() * 10)) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
