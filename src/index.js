module.exports = function solveEquation(equation) {
  const arrayStr = equation.split(/ \* x\^2| \* x/);
  const arrayNum = arrayStr.map(item => {
    return +item.replace(/\s+/g, '');
  });

  const D = arrayNum[1] ** 2 - 4*arrayNum[0]*arrayNum[2];

  results = [
    Math.round(
      (-arrayNum[1] - Math.sqrt(D)) / (2 * arrayNum[0])
      ),
    Math.round(
      (-arrayNum[1] + Math.sqrt(D)) / (2 * arrayNum[0])
      ),
  ]

  if (arrayNum[0] < 0) return results.reverse();
  return results;
}
