const add = function(arg1, arg2) {
	return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
	return arg1 - arg2;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0
  }
  return array.reduce((acc, curr) => acc + curr)
};

const multiply = function(array) {
  return array.reduce((acc, curr)=> acc * curr, 1)
};

const power = function(arg1, arg2) {
	return arg1 ** arg2;
};

const factorial = function(arg) {
	const array = []
  for(i = 1; i <= arg ; i++){
    array.push(i)
  }
  return array.reduce((acc, curr) => acc * curr, 1)

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
