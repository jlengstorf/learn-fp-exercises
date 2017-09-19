const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 75, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.map (see https://mzl.la/1xVEqhz)
// Hint: This solution requires two uses of `.map()`
let results = [];
for (let index = 0; index < students.length; index++) {
  const student = students[index];

  results[index] = { name: student.name, scores: [] };
  for (let i = 0; i < student.scores.length; i++) {
    if (student.scores[i] >= 70) {
      results[index].scores[i] = 'PASS';
    } else {
      results[index].scores[i] = 'FAIL';
    }
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Jessica', scores: ['PASS', 'PASS', 'PASS'] },
  { name: 'Kim', scores: ['FAIL', 'PASS', 'FAIL'] },
  { name: 'Fran', scores: ['PASS', 'FAIL', 'PASS'] },
];

window.FPWorkshop.check(results, expected);
