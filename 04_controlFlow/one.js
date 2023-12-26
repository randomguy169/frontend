const userLoggedIn = true;
const temperature = 31;
// if (temperature > 30) {
//   console.log("It's hot outside");
// }
// else {
//     console.log("It's cold outside");
// }
// <, >, <=, >=, ==, ===, !=, !==

const score = 200;
// if (score>100) {
//     const power = "Superman";
//     console.log(`User power is ${power}`);
// }

const balance = 1000;

// if (balance > 500) console.log('test'); // implicit scope, not adv

// if (balance>500) {
//     console.log('more than 500');
// } else if(balance>750){
//     console.log('more than 750');
// }
// else {
//     console.log('less than 500');
// }

//*************************************************************

const userIsLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromFacebook = true;


// if (userLoggedIn && debitCard && 2==3) {
//   console.log("User is logged in and has debit card");
// }

if (loggedInFromGoogle || loggedInFromFacebook) {
  console.log("User is logged in from Google or Facebook");
    
}