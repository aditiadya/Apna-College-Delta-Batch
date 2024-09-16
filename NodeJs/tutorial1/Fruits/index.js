//we are exporting apple, banana, orange file from this directory to a different directory.
//for this, we need to make an index.js file, which will require all the files from this directory.
//the name strictly should be index.js and not anything else.

const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];

module.exports = fruits;