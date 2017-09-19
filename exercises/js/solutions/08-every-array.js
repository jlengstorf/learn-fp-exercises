const scoresArray = [[96, 65, 67, 72, 91], [97, 78, 85, 83, 79]];

// -----------------------------------------------------------------------------
// Don’t edit above this line.
// -----------------------------------------------------------------------------

const results = scoresArray.map(scores => scores.every(score => score >= 70));

// -----------------------------------------------------------------------------
// Don’t edit below this line.
// -----------------------------------------------------------------------------

const expected = [false, true];

window.FPWorkshop.check(results, expected);
