const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.sort (see https://mzl.la/19buNlz)
let results = [...students]; // Clone the array
let done = false;
while (!done) {
  done = true;

  for (let index = 1; index < results.length; index++) {
    if (results[index - 1].score > results[index].score) {
      const temp = results[index - 1];

      results[index - 1] = results[index];
      results[index] = temp;
      done = false;
    }
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  {
    name: 'Kim',
    score: 67,
  },
  {
    name: 'Fran',
    score: 85,
  },
  {
    name: 'Jessica',
    score: 92,
  },
];

window.FPWorkshop.check(results, expected);
