const classArray = [
  ['input', 'input--name', 'input--active'],
  ['input', 'input--email'],
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.includes (see https://mzl.la/2pE5Eg5)
const results = [];
for (let index = 0; index < classArray.length; index++) {
  if (classArray[index].includes('input--active')) {
    results[index] = classArray[index];
  }
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [['input', 'input--name', 'input--active']];

window.FPWorkshop.check(results, expected);
