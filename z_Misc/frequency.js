function getFrequencies(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    console.log(element);

    // check if key exists in object already

    // if it exists, add 1 to the value
    if (obj[element] !== undefined) {
      obj[element] += 1;
    }

    // if it does not exist, add 1 to setup future elements
    else {
      obj[element] = 1;
    }
  }
  return obj;
}

console.log(
  getFrequencies([
    7, 10, 8, 16, 13, 14, 15, 11, 18, 11, 15, 10, 7, 14, 20, 19, 15, 16, 14, 20,
    10, 11, 14, 17, 13, 12, 15, 14, 16, 17,
  ])
);
