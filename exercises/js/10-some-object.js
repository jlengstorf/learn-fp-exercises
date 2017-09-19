const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 65, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.some (see https://mzl.la/1AhWtg0)
const results = [];
for (let index = 0; index < students.length; index++) {
  const student = students[index];
  let somePass = false;

  for (let i = 0; i < student.scores.length; i++) {
    if (student.scores[i] > 70) {
      somePass = true;
    }
  }

  results[index] = { name: student.name, pass: somePass };
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Jessica', pass: true },
  { name: 'Kim', pass: false },
  { name: 'Fran', pass: true },
];

window.FPWorkshop.check(results, expected);
