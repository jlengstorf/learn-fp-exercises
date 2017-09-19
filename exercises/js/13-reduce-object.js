const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 65, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.reduce (see https://mzl.la/2xe0nPv)
let results = {};
for (let index = 0; index < students.length; index++) {
  const student = students[index];
  let status = 'FAIL';

  for (let i = 0; i < student.scores.length; i++) {
    if (student.scores[i] >= 70) {
      status = 'PASS';
    }
  }

  results[student.name] = status;
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = { Jessica: 'PASS', Kim: 'FAIL', Fran: 'PASS' };

window.FPWorkshop.check(results, expected);
