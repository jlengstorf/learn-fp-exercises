const numbers = [100, 10, 1];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

// TODO refactor to use Array.prototype.reduce (see https://mzl.la/2xe0nPv)
let results = 1000;
for (let index = 0; index < numbers.length; index++) {
  results += numbers[index];
}

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = 1111;

window.FPWorkshop.check(results, expected);
