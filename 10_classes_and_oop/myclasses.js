// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  capitalize() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User("Chacha", "coemskiChai.com", "123");
console.log(user.encryptPassword());
console.log(user.capitalize());

//behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.capitalize = function () {
  return `${this.username.toUpperCase()}`;
};


const tea = new User("tea", "coemskitea.com", "123");
console.log(tea.encryptPassword());
console.log(tea.capitalize());
