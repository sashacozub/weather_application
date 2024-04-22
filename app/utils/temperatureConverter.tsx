export const converterKelvinToCelcius = (
  temperatureInKelvin: number
): number => {
  const temperatureInCelcius = temperatureInKelvin - 273.15;
  return Math.floor(temperatureInCelcius);
};

export const converterKelvinToFahrenheit = (
  temperatureInKelvin: number
): number => {
  const temperatureInFahrenheit = ((temperatureInKelvin - 273.15) * 9) / 5 + 32;
  return Math.floor(temperatureInFahrenheit);
};
