// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let name = new Date();

let month = undefined;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log(months[name.getMonth()]);
    break;
}
