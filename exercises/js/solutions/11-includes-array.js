const classArray = [
  ['input', 'input--name', 'input--active'],
  ['input', 'input--email'],
];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = classArray.filter(classes => classes.includes('input--active'));

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [['input', 'input--name', 'input--active']];

window.FPWorkshop.check(results, expected);
