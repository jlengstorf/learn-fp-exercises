const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 75, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.every (see https://mzl.la/1eN9HNy)
const results = [];
for (let index = 0; index < students.length; index++) {
  const student = students[index];
  let allPass = true;

  for (let i = 0; i < student.scores.length; i++) {
    if (student.scores[i] < 70) {
      allPass = false;
    }
  }

  results[index] = { name: student.name, pass: allPass };
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Jessica', pass: true },
  { name: 'Kim', pass: false },
  { name: 'Fran', pass: false },
];

window.FPWorkshop.check(results, expected);
