const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function([...args]) {
  return args.reduce((arg1,arg2) => arg1 + arg2, 0);
};

const multiply = function([...args]) {
  return args.reduce((arg1,arg2) => arg1 * arg2, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let total = 1;
  for (let i=2; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
