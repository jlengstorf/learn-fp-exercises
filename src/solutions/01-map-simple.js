const scores = [92, 67, 85];
const results = scores.map(score => (score >= 70 ? 'PASS' : 'FAIL'));
const expected = ['PASS', 'FAIL', 'PASS'];

window.FPWorkshop.check(results, expected);
