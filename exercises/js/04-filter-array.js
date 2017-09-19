const scores = [100, 65, 67, 72, 91];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.filter (see https://mzl.la/1dDn8fQ)
let results = [];
for (let index = 0; index < scores.length; index++) {
  if (scores[index] >= 70) {
    results.push(scores[index]);
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [100, 72, 91];

window.FPWorkshop.check(results, expected);
