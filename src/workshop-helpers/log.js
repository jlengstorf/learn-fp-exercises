function checkSolution(answer, expected) {
  return answer === expected;
}

function getClasses(targetClass, isCorrect) {
  const modifier = isCorrect ? 'success' : 'error';
  return `${targetClass} ${targetClass}--${modifier}`;
}

/**
 * Prints a value as text in a target element.
 * 
 * NOTE: This is only for demo purposes. Probably don’t use this in production.
 * 
 * @param  {Mixed}  currentValue   the value to be logged
 * @param  {Mixed}  expectedValue  the expected value
 * @param  {String} targetClass    element class to show current output
 * @param  {String} expectedClass  element class to show expected output
 * @return {void}
 */
function check(
  currentValue,
  expectedValue,
  targetClass = 'log',
  expectedClass = 'expected'
) {
  const answer = JSON.stringify(currentValue, null, 2);
  const expected = JSON.stringify(expectedValue, null, 2);
  const answerEl = document.querySelector(`.${targetClass}`);
  const expectedEl = document.querySelector(`.${expectedClass}`);

  // Show the expected output.
  expectedEl.textContent = expected;

  // Show the current solution’s output.
  answerEl.className = getClasses(targetClass, checkSolution(answer, expected));
  answerEl.textContent = answer;
}

window.FPWorkshop = {
  check,
};
