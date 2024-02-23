const convertToCelsius = function(tempF=0) {
  // (32°F − 32) × 5/9 = 0°C
  return Math.round(((tempF - 32)*5/9) * 10)/10;
};

const convertToFahrenheit = function(tempC=0) {
  //(0°C × 9/5) + 32 = 32°F
  return Math.round((tempC * 1.8 + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
