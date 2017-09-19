const scoresArray = [[96, 65, 67, 72, 91], [97, 78, 85, 83, 79]];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.every (see https://mzl.la/1eN9HNy)
let results = [];
for (let index = 0; index < scoresArray.length; index++) {
  const scores = scoresArray[index];
  let allPass = true;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 70) {
      allPass = false;
    }
  }

  results[index] = allPass;
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [false, true];

window.FPWorkshop.check(results, expected);
