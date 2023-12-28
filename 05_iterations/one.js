// youtube.com/clip/Ugkx3zkdnBuqf4kg4VvBCD27W_XamOiL2ivv?si=3DOZRTt_z5qHRVSl

//for
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("element is 5");
//   }
//   console.log(element);
// }

//console.log(element);// not accessible outside the loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

let myHeroes = ["Superman", "Batman", "Spiderman", "Ironman"];
// console.log(myHeroes.length);
// for (let i = 0; i <= myHeroes.length; i++) {
//     const element = myHeroes[i];
//     console.log(element);
// }

//break and continue

// for (let index = 0; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break;
//     }
//   console.log(`Value of index is ${index}`);
// }
for (let index = 0; index <= 20; index++) {

    if (index == 5) {
        console.log(`Detected ${index}`);
        console.log('value of index is 5');
        continue;
    }
  console.log(`Value of index is ${index}`);
}


