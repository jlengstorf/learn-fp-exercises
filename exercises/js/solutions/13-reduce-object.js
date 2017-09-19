const students = [
  { name: 'Jessica', scores: [92, 98, 80] },
  { name: 'Kim', scores: [67, 65, 63] },
  { name: 'Fran', scores: [85, 68, 91] },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = students.reduce(
  (status, student) => ({
    ...status,
    [student.name]: student.scores.some(score => score >= 70) ? 'PASS' : 'FAIL',
  }),
  {}
);

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = { Jessica: 'PASS', Kim: 'FAIL', Fran: 'PASS' };

window.FPWorkshop.check(results, expected);
