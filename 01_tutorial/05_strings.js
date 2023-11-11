const name = 'amaan';
const repoCount = 2;

// console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const randomStr = new String('Amaan')
console.log(typeof randomStr); // this is an object

console.log(randomStr.charAt(4)); //number index
console.log(randomStr.indexOf('A')); // character index

//sibidi params

if (typeof randomStr==Object) {
console.log('this is an object');    
} else {
    console.log('not an object');
}