const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = students.sort((a, b) => {
  if (a.score === b.score) {
    return 0;
  }

  return a.score > b.score ? 1 : -1;
});

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
  { name: 'Jessica', score: 92 },
];

window.FPWorkshop.check(results, expected);
