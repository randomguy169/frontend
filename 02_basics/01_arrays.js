//arrays

//declaring an array:
const myArray = [0, 1, 2, 3, 4, 5];
// myArray[7] = 7; // appending elements into an array.
// console.log(myArray[7]);//undefined error
// console.log(myArray);

//array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop(6);

// myArray.unshift(1);//Appends to the start of Array
// myArray.shift(); // un-appends the unshift() method
// console.log(myArray);

// console.log(myArray.includes(9));

// console.log(myArray.indexOf(3));

// const newArray = myArray.join();
// console.log(typeof newArray);//object
// console.log(typeof myArray); //string

//slice, splice

console.log("A, ", myArray);

const myna1 = myArray.slice(1, 3);

console.log(myna1);
console.log("B ", myArray);

const myna2 = myArray.splice(1, 3);
console.log(myna2);

