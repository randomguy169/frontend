class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}
class teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}
const chai = new teacher("chai", "chai@teacher.com", "123");
chai.addCourse();
const masalaChai = new User("masalaChai");
masalaChai.logMe()