const fbUser = {}; //declaring blank object

fbUser.name = "jane"; // appending properties into an object.
fbUser.password = "ohOppGganganmStaal";
fbUser.isLoggedIn = false;

// console.log(fbUser);

const regularUser = {
  email: "abc@xyz.com",
  fullname: {
    userFullName: {
      firstName: "Amaan",
      lastName: "Hussain",
    },
  },
};
// console.log(regularUser.fullname.userFullName.firstName);

const myObj1 = { 1: "a", 2: "b" };
const myObj2 = { 3: "a", 4: "b" };
const myObj3 = Object.assign({}, myObj1,myObj2)

// console.log(myObj3);

const users = [
    {
        name: "Amaan",
        email: "coems@kellanbigmoeney.coem",
        phone: 2375234533
    }
]

// console.log(users[0].name);

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));x
// console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty('name'));