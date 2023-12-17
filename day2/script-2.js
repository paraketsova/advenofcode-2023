// PARSING
const fs = require("fs");
const data = fs.readFileSync("input-2.txt", { encoding: "utf8" });
// const data = fs.readFileSync("input-test-2.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n/);
console.log(chunks);

// PROCESSING
const limit = new Map;
limit.set('red', 12);
limit.set('green', 13);
limit.set('blue', 14);
console.log('limit', limit)

let sumId = 0;
let sumPower = 0;

const chunksSlice = chunks.map((el) => {
  let index = el.indexOf(': ');
  return el.slice(index + 2);
});

const maids = chunksSlice.map((el) => el.split(' '));
console.log('maids: ', maids);

// divide on pairs
const pairs = [];
maids.map((el) => {
  let pair = []
  for (let i = 0; i < el.length; i++) {
    if (!(i % 2)) {
      pair.push([el[i], el[i + 1]]);
    }
  }
  pairs.push(pair);
})
console.log('pairs: ', pairs);

// find max for each color in one game and compare with required limit
pairs.map((el) => {
  let red = [];
  let green = [];
  let blue = [];
  let gameId = pairs.indexOf(el)+1;
  console.log('pair element: ', (pairs.indexOf(el)+1), el);

  el.map((pair) => {
    console.log('pair', pair);
    if (pair[1].includes('red')) {
      red.push(+pair[0]);
    } else if (pair[1].includes('green')) {
      green.push(+pair[0]);
    } else if (pair[1].includes('blue')) {
      blue.push(+pair[0]);
    }
  })

  if ((Math.max.apply(null, red) <= limit.get('red'))
    && (Math.max.apply(null, green) <= limit.get('green'))
    && (Math.max.apply(null, blue) <= limit.get('blue'))) {
      console.log('this game Ok', gameId);
    sumId += gameId;
  }

  let localSumPower = (Math.max.apply(null, red))*(Math.max.apply(null, green))*(Math.max.apply(null, blue));
  sumPower += localSumPower;

})

// console.log(sumId);
console.log(sumPower);