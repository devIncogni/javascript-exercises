const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...args]) {
  return args.reduce((sum, currentElement) => (sum += currentElement), 0);
};

const multiply = function ([...args]) {
  return args.reduce(
    (product, currentElement) => (product *= currentElement),
    1
  );
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a == 0) return 1;
  else return factorial(a - 1) * a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
