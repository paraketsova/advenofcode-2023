// PARSING
const fs = require("fs");
// const data = fs.readFileSync("input-1.txt", { encoding: "utf8" });
const data = fs.readFileSync("input-test-1-2.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n/);

// PROCESSING

const numString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const hybridNumString = [];

const hybrid = () => {
  numString.map((substr) => {
    numString.forEach((el)=> {
      if (substr[substr.length - 1] === el[0]) {
        hybridNumString.push(substr+el);
      }
    })
    return hybridNumString;
  })
}

hybrid();
console.log(hybridNumString);


const chunksPlus = chunks
  .map(el => el.replaceAll('oneight', '18'))
  .map(el => el.replaceAll('twone', '21'))
  .map(el => el.replaceAll('fiveight', '58'))
  .map(el => el.replaceAll('eighthree', '83'))
  .map(el => el.replaceAll('eightwo', '82'))
  .map(el => el.replaceAll('threeight', '38'))
  .map(el => el.replaceAll('nineight', '98'))
  .map(el => el.replaceAll('sevenine', '79'))
  .map(el => el.replaceAll('one', '1'))
  .map(el => el.replaceAll('two', '2'))
  .map(el => el.replaceAll('three', '3'))
  .map(el => el.replaceAll('four', '4'))
  .map(el => el.replaceAll('five', '5'))
  .map(el => el.replaceAll('six', '6'))
  .map(el => el.replaceAll('seven', '7'))
  .map(el => el.replaceAll('eight', '8'))
  .map(el => el.replaceAll('nine', '9'))

console.log(chunksPlus)

const sum = chunksPlus.map(el => el.replace(/\D/g,''))
  .map(el => (+(el.slice(0,1) + el.slice(-1))))
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

console.log(sum);
