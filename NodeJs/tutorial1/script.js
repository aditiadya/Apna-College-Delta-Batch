//process: This object provides information about, and control over, the current Node.js process.
//process.argv : returns an array containing the command-line arguments passed when the Node.js process was launched.

//module.exports : requiring files
//require() a built-in function to include external modules that exist in separate files.
//module.exports (a special object)

// const math=require("./math");

// console.log(math);
// console.log(math.sum(2,5));
// console.log(math.PI);

//importing module from another directory
const info=require("./Fruits");
console.log(info);