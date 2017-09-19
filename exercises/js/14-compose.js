const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO convert this complex loop into smaller, composable functions
let results = [];

for (index = 0; index < students.length; index++) {
  const student = students[index];

  let status;
  if (student.score >= 70) {
    status = 'passed';
  } else {
    status = 'failed';
  }

  let letterGrade;
  if (student.score >= 90) {
    letterGrade = 'A';
  } else if (student.score >= 80) {
    letterGrade = 'B';
  } else if (student.score >= 70) {
    letterGrade = 'C';
  } else if (student.score >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  const article = letterGrade === 'A' ? 'an' : 'a';

  results[index] = `${student.name} ${status} with ${article} ${letterGrade}.`;
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  'Jessica passed with an A.',
  'Kim failed with a D.',
  'Fran passed with a B.',
];

window.FPWorkshop.check(results, expected);
