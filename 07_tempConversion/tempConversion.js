const convertToCelsius = function(fah) {
  result = (fah -32) * 5 / 9;
  result = Math.floor(result * 100) / 10;
  result = Math.round(result) / 10;
  return result;
};

const convertToFahrenheit = function(cel) {
  result = (cel * 9 / 5) + 32
  result = Math.floor(result * 100) / 10;
  result = Math.round(result) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
