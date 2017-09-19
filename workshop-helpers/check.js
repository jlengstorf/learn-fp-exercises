/**
 * Returns a BEM-compliant set of classes to determine success/failure state.
 * @param  {String}  targetClass  base class for the element
 * @param  {Boolean} isCorrect    whether or not the given solution is correct
 * @return {String}               the generated classes
 */
function getClasses(targetClass, isCorrect) {
  const modifier = isCorrect ? 'success' : 'error';
  return `${targetClass} ${targetClass}--${modifier}`;
}

/**
 * Encodes HTML entities for a base level of XSS protection.
 *
 * This function is adapted from Chris Baker’s Stack Overflow answer.
 * @see https://stackoverflow.com/a/18750001/463471
 *
 * @param  {String} rawString  the string to escape
 * @return {String}            the escaped string
 */
function escape(rawString) {
  return rawString.replace(
    /[\u00A0-\u9999<>\&]/gim,
    i => `&#${i.charCodeAt(0)};`
  );
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
  const answerEl = document.querySelector(`.${targetClass}`);
  const expectedEl = document.querySelector(`.${expectedClass}`);

  // Format and stringify the answer and expected output.
  const answer = JSON.stringify(currentValue, null, 2);
  const expected = JSON.stringify(expectedValue, null, 2);

  // Not exactly sophisticated, but it’ll do the trick for this workshop.
  const isAnswerCorrect = answer === expected;

  // Show the expected output.
  expectedEl.textContent = escape(expected);

  // Show the current solution’s output.
  answerEl.className = getClasses(targetClass, isAnswerCorrect);
  answerEl.textContent = escape(answer);
}

// To avoid the need for a build pipeline, attach to the window.
window.FPWorkshop = {
  check,
};
