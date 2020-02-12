const arr = [1, 2, 3, 4, 5, 6];

// at least one element is greater than 4?
const largeNum = arr.some((num) => num >= 4);

console.log(largeNum); // output: true

// at least one element is less than or equal to 0?
const smallNum = arr.some((num) => num <= 0);

console.log(smallNum); // output: false
