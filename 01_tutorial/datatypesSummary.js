// #primitive data types

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, bigInt

const score = null;
const scoreVal = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
const id = Symbol('123')
const id2 = Symbol('123')

// data type in regExp() function etc. 

console.log(id===id2);

const bigInteger= 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n
// #referenceTypes or non primitive

// Array, Objects, Functions

const averageArray = ['cameraman', 'speakerman', 'tvman']
const myObj = {
    name: 'amaan',
    phone: 123123123123
}

function myFunction() {
    console.log('Hello World!');
}

console.log(typeof bigInteger);    


//********************************************************************** */
// types of memories are stack and heap memories