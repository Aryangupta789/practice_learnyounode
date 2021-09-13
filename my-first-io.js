const fs = require('fs');

const read =fs.readFileSync(process.argv[2]);
const noOfLines= read.toString().split("\n").length -1;
console.log(noOfLines)
