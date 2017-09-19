const scores = [92, 67, 85];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.map (see https://mzl.la/1xVEqhz)
let results = [];
for (let index = 0; index < scores.length; index++) {
  if (scores[index] >= 70) {
    results[index] = 'PASS';
  } else {
    results[index] = 'FAIL';
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = ['PASS', 'FAIL', 'PASS'];

window.FPWorkshop.check(results, expected);
