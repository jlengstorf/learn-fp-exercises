const students = [
  {
    name: 'Jessica',
    score: 92,
  },
  {
    name: 'Kim',
    score: 67,
  },
  {
    name: 'Fran',
    score: 85,
  },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO: Refactor to use Array.prototype.map (see https://mzl.la/1xVEqhz)
let results = [];
for (let index = 0; index < students.length; index++) {
  const student = students[index];

  if (student.score >= 70) {
    results[index] = `${student.name}: PASS`;
  } else {
    results[index] = `${student.name}: FAIL`;
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = ['Jessica: PASS', 'Kim: FAIL', 'Fran: PASS'];

window.FPWorkshop.check(results, expected);
