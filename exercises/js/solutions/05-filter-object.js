const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = students.filter(student => student.score >= 70);

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [{ name: 'Jessica', score: 92 }, { name: 'Fran', score: 85 }];

window.FPWorkshop.check(results, expected);
