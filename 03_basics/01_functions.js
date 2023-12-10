//Functions in JavaScript
function sayName() {
  console.log("A");
  console.log("m");
  console.log("a");
  console.log("a");
  console.log("n");
}

// sayName();
function twoNumbers(number1, number2) {
  // console.log(number1 + number2); don't do this, use return instead
  let sum = number1 + number2;
  return sum;
  // let abc= 10; || will not work becuase code after return is not executed
}
var functionVar = twoNumbers(10, 20);
// console.log("Sum = " + functionVar);

function loginMessage(username) {
  if (username===undefined) {
    return
  }
  return `${username} logged in`;
}

// console.log(loginMessage("Amaan"));

function calcCartPrice(...num1) {
  return num1;
}

// console.log(calcCartPrice(10, 20, 30, 40, 50));

const user = {
  name: "Amaan",
  price: 299
};

function handleObject(anyobject){
  console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user);

const myArray = [10, 20, 30, 40, 50];

function returnSecondValue(getArray) {
  return getArray[1];  
}

console.log(returnSecondValue(myArray));