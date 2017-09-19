const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = students.map(
  student => `${student.name}: ${student.score >= 70 ? 'PASS' : 'FAIL'}`
);

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = ['Jessica: PASS', 'Kim: FAIL', 'Fran: PASS'];

window.FPWorkshop.check(results, expected);
