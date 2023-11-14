const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "batman", "flash"];

const allHeroes = marvel_heroes.concat(dc_heroes); //merge arrays

// console.log(allHeroes);//logs the array inside an array

//there is another method for doing the same

const newAllHeroes = [...marvel_heroes, ...dc_heroes]; //the three dots spread an array, an inbuilt function

// console.log(newAllHeroes);//concats both the arrays into a single array with the triple dots

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usableArray = anotherArray.flat(Infinity);
// console.log(usableArray);

// console.log(Array.isArray(anotherArray));
// console.log(Array.from('Ayaan is noob'));

const name = Array.from("Ayaan");
name.reverse();
const palindrome = name.join("");
console.log(palindrome);
