const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 11,
};
const numbers = [];

Object.keys(object).forEach((item) => {
    if (typeof object[item] === 'number') {
        numbers.push(object[item]);
    }
});

console.log(numbers);
// expected output: Array [42, 11]
