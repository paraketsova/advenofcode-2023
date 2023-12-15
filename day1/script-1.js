// PARSING
const fs = require("fs");
const data = fs.readFileSync("input-1.txt", { encoding: "utf8" });
// const data = fs.readFileSync("input-test-1-2.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n/);

// PROCESSING
const numString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const hybridsString = new Map();

  numString.map((substr) => {
    numString.forEach((el)=> {
      if (substr[substr.length - 1] === el[0]) {
        hybridsString.set((substr.slice(0, -1) + el), (substr + el)); // create hybrid string and remove repeated letter between numbers
      }
    })
  })

const sum = chunks
  .map((el) => {
    hybridsString.forEach((value, key, map) => {
        el = el.replace(key, value);
    })
    return el;
  })
  .map((el) => {
    numString.forEach((num) => {
        el = el.replaceAll(num, (numString.indexOf(num)+1)); //replace strings for numbers
    })
    return el;
  })
  .map(el => el.replace(/\D/g,''))
  .map(el => (+(el.slice(0,1) + +el.slice(-1))))
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
