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
  pass: student.scores.every(score => score >= 70),
}));

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Jessica', pass: true },
  { name: 'Kim', pass: false },
  { name: 'Fran', pass: false },
];

window.FPWorkshop.check(results, expected);
