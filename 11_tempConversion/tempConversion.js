const convertToCelsius = function(param) {
  const result = (param - 32) * 5 / 9
  return parseFloat(result.toFixed(1))
};

const convertToFahrenheit = function(param) {
  const result = (param * (9/5) + 32)
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
