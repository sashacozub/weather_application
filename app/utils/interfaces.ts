export interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface ForecastData {
  dt: number;
  main: MainData;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface City {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastData[];
  city: City;
}

// interface MainData {
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   sea_level: number;
//   grnd_level: number;
//   humidity: number;
//   temp_kf: number;
// }

// interface Weather {
//   id: number;
//   main: string;
//   description: string;
//   icon: string;
// }

// interface Clouds {
//   all: number;
// }

// interface Wind {
//   speed: number;
//   deg: number;
//   gust: number;
// }

// interface Sys {
//   pod: string;
// }

// interface ForecastData {
//   dt: number;
//   main: MainData;
//   weather: Weather[];
//   clouds: Clouds;
//   wind: Wind;
//   visibility: number;
//   pop: number;
//   sys: Sys;
//   dt_txt: string;
// }

// interface City {
//   id: number;
//   name: string;
//   coord: {
//     lat: number;
//     lon: number;
//   };
//   country: string;
//   population: number;
//   timezone: number;
//   sunrise: number;
//   sunset: number;
// }

// interface WeatherData {
//   cod: string;
//   message: number;
//   cnt: number;
//   list: ForecastData[];
//   city: City;
// }
