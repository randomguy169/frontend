// for of

// ["", "", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}
const greetings = "imma destroy u all"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', 'India');
map.set('US', 'United States of America');
map.set('FR', 'France');
map.set('IN', 'India')
console.log(map);

for (const key of map) {
    console.log(key);
}


//an easy example of for of

const array = [1, 2, 3, 4, 5];    //array
const string = "explode bom"    //string
const iterator = new Map()         //map
map.set('IN', 'India');
map.set('US', 'United States of America');
map.set('FR', 'France');
map.set('IN', 'India');
