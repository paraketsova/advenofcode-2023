// PARSING
const fs = require("fs");
const data = fs.readFileSync("input-1.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n/);
const numbers = [];

// PROCESSING
const sum = chunks.map(el => el.replace(/\D/g,''))
  .map(el => (+(el.slice(0,1) + el.slice(-1))))
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

console.log(sum);
