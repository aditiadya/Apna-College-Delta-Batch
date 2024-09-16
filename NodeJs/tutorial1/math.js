const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

let obj = {
    sum : sum,
    mul : mul,
    g : g,
    PI : PI
};

module.exports = obj;


//another way to export
// module.exports = {
//     sum : sum,
//     mul : mul,
//     g : g,
//     PI : PI
// };

//another way to export
// exports.const sum = (a, b) => a + b;
// exports.const mul = (a, b) => a * b;
// exports.const g = 9.8;
// exports.const PI = 3.14;

//another way to export
// module.exports.const sum = (a, b) => a + b;
// module.exports.const mul = (a, b) => a * b;
// module.exports.const g = 9.8;
// module.exports.const PI = 3.14;