// if (true) {
//   let a = 10; // let and const are block scoped
//   const b = 20;
//   var c = 30; // var is function scoped
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Amaan";
  function two() {
    const website = "amaan.io"; // this line is throwing an error
    console.log(username); //scope of username is inside the function one() and hence it is accessible inside the function two()
  }
  // console.log(website);
  two();
}

// one()

// the error in the above lines is that the variable website is not defined in the function one() but it is defined in the function two() which is inside the function one() so the variable website is not accessible outside the function two() and hence the error is thrown

// if (true) {
//   const username = "Amaan";
//   if (username === "Amaan") {
//     const website = "amaan.io";
//     console.log(username + " " + website);
//     }
//     console.log(website)
// }

// scope errors in the above lines

// console.log(username);



// ++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++
addOne(5); // this works because the function is defined using function keyword and function keyword is hoisted
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

addTwo(5)// this line is throwing an error because the function is defined using const and const is not hoisted

const addTwo = function(num) {
    return num + 2;
}