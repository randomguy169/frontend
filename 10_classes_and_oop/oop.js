const User = {
  username: "Amaan",
  loginCount: 8,
  signIn: true,
  getUserDetails: function () {
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// // console.log(User.username);
// console.log(User.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("idk", 12, true);
console.log(userOne);

// new is a constructor function
