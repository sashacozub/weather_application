/**
 * Converts temperature from Kelvin to Celcius or Fahrenheit.
 * @param {number} temperatureInKelvin - The temperature in Kelvin.
 * @param {string} format - The desired format for the converted temperature ('celcius' or 'fahrenheit').
 * @returns {number} - The converted temperature.
 */

export const convertTemperature = (temperatureInKelvin, format) => {
  if (format === 'celcius') {
    const temperatureInCelcius = temperatureInKelvin - 273.15;
    return Math.floor(temperatureInCelcius);
  } else if (format === 'fahrenheit') {
    const temperatureInFahrenheit =
      ((temperatureInKelvin - 273.15) * 9) / 5 + 32;
    return Math.floor(temperatureInFahrenheit);
  }
};
