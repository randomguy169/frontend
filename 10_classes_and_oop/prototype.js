// let myName = "Amaan     ";
// let myChannel = "Amblox   ";

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};
Object.prototype.amaan = function () {
  console.log(`Amaan is present in all objects`);
};
Array.prototype.coems = function () {
  console.log("Amaan says hi");
};
// heroPower.amaan()
myHeroes.amaan(); // even array has it lol
myHeroes.coems();
// heroPower.coems(); only array gets the power

// console.log(Object.prototype); // can see the function now good

//inhertiance

const user = {
  name: "chai",
  email: "chai@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingAssistant = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: teachingAssistant,
};

teacher.__proto__ = user;

//MODERN syntax

Object.setPrototypeOf(teachingAssistant, teacher);

let anotherUserName = "chaiAurCode          ";

String.prototype.trueLength = function () {
  // console.log(`${this}`);
  console.log(`true length is : ${this.trim().length}`);
};

anotherUserName.trueLength();
"amaan".trueLength();
"icetea".trueLength();

// console.log(this); nothing 