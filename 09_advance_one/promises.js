// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async two resolved");
// });

// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "coems", email: "abc@coems.com" });
//   }, 1000);
// });
// promise3.then(function (user) {
//   console.log(user);
// });

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "coems", password: "1234" });
//     } else {
//       reject("ERROR! Something went wrong");
//     }
//   }, 1000);
// });

// const username = promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise has been resolved or rejected");
//   });

// console.log(username);

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "kellan", password: "123" });
//     } else {
//       reject("ERROR! JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const data = await response.json();
//     // const data = response.json();
//   } catch (error) {
//     console.log('Error:',error);
//   }
// }

// getAllUsers();


fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    return response.json();
   
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
  console.log(error);
})
