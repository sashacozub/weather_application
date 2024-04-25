export const convertKelvinToCelcius = (temperatureInKelvin) => {
  const temperatureInCelcius = temperatureInKelvin - 273.15;
  return Math.floor(temperatureInCelcius);
};

export const convertKelvinToFahrenheit = (temperatureInKelvin) => {
  const temperatureInFahrenheit = ((temperatureInKelvin - 273.15) * 9) / 5 + 32;
  return Math.floor(temperatureInFahrenheit);
};
