const object = {
    a: 'somestring',
    b: 42,
    c: false,
    k: 'k',
    yay: 'yay',
};
const same = [];

Object.entries(object).forEach(([key, value]) => {
    if (key === value) {
        same.push([key, value]);
    }
});

const obj = Object.fromEntries(new Map(same));

console.log(`${obj.yay}${obj.k}`);
// expected output: String 'yayk'
