const students = [
  { name: 'Jessica', score: 92 },
  { name: 'Kim', score: 67 },
  { name: 'Fran', score: 85 },
];

/**
 * Composes an array of functions into a single function.
 *
 * Example:
 *   const yell = compose(addExclamation, toUppercase);
 *   yell('hello');
 *   //=> "HELLO!"
 *
 * This is the same as:
 *   addExclamation(toUppercase('hello'));
 *   //=> "HELLO!"
 *
 * @param  {Array}    functions  functions to compose
 * @return {Function}            a function that calls the composed functions
 */
const compose = (...functions) =>
  functions.reduce((prevFns, fn) => (...args) => prevFns(fn(...args)));

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const getStatus = student => ({
  ...student,
  status: student.score >= 70 ? 'passed' : 'failed',
});

const getGrade = student => {
  const grades = [
    { letter: 'A', minimum: 90 },
    { letter: 'B', minimum: 80 },
    { letter: 'C', minimum: 70 },
    { letter: 'D', minimum: 60 },
    { letter: 'F', minimum: 0 },
  ];

  return {
    ...student,
    grade: grades.find(grade => student.score >= grade.minimum).letter,
  };
};

const getArticle = student => ({
  ...student,
  article: student.grade === 'A' ? 'an' : 'a',
});

const getSentence = ({ name, status, article, grade }) =>
  `${name} ${status} with ${article} ${grade}.`;

// Compose all the single-purpose functions together.
const processGrades = compose(getSentence, getArticle, getGrade, getStatus);

const results = students.map(processGrades);

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [
  'Jessica passed with an A.',
  'Kim failed with a D.',
  'Fran passed with a B.',
];

window.FPWorkshop.check(results, expected);
