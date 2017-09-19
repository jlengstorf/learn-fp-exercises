const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 75, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = students.map(student => ({
  name: student.name,
  scores: student.scores.map(score => (score >= 70 ? 'PASS' : 'FAIL')),
}));

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Jessica', scores: ['PASS', 'PASS', 'PASS'] },
  { name: 'Kim', scores: ['FAIL', 'PASS', 'FAIL'] },
  { name: 'Fran', scores: ['PASS', 'FAIL', 'PASS'] },
];

window.FPWorkshop.check(results, expected);
