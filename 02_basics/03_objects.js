//singleton objects
//object literals

const mySymbol = "abc123";

const user = {
  [mySymbol]: "abc123",
  "full name": "Amaan Hussain",
  name: "Amaan",
  age: 18,
  location: "Punjab",
  email: "amaanhussain1210@gmail.com",
  isLoggedIn: false,
};

// ways to access objects
user.email = "hhh.mcsd@gmail.com";
// Object.freeze(user); // makes the object read-only
user.name = "coems";
user.greeting = function() {
    console.log(`hello, ${this.name}`);
}
user.greeting(); //doesn't change
// console.log(user.email); //no need for string
// console.log(user["email"]); //string required
// console.log(user["full name"]); //only this method works incase string is there in properties
