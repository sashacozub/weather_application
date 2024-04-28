// Function for converting Kelvin temperature to Celcius or Fahrenheit
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
