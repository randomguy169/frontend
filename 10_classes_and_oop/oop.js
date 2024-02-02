// const user = {
//   username: "amaan",
//   loginCount: 32,
//   signIn: true,
//   getUserDetails: function () {
//     // console.log("Got user details");
//     // console.log(`Username: ${this.username}`);
//     console.log(this);
//   },
// };
// console.log(user["username"]);
// console.log(user.getUserDetails());

// console.log(this); // no GEC in node environment, in browser things are prototypes.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  // return this; optional
}
//getter and setter functions are obtained
const userOne = new User("amaan", 12, true);
const userTwo = new User("chai aur code", 11, false);

// console.log(userOne);
// console.log(userTwo);

