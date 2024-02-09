class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username:${this.username}`);
  }
  #createId() {
    return `123`;
  }
  abc() {
    return this.#createId();
  }
}

// console.log(User.createId());
// const amaan = new User('Amaan');
const userTwo = new User("Amaan");
console.log(userTwo.abc());
