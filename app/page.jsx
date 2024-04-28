'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { convertTemperature } from './utils/temperatureConverter';
import { capitalizeString } from './utils/capitalizeString';
import { formatTimestamp } from './utils/formatTimestamp';
import Loading from './Components/Loading';
import ErrorPage from './Components/ErrorPage';
import Navbar from './Components/Navbar';

import { useWeatherQuery } from './api/weather';

export default function Home() {
  const [isMetric, setIsMetric] = useState(true);
  const [searchQuery, setSearchQuery] = useState('oslo');
  const [loading, setLoading] = useState(false);
  const [fiveDaysForecastData, setFiveDaysForecastData] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  // Function for converting temperature from metric to imperial and vice versa
  const handleTemperatureUnitsChange = () => {
    setIsMetric(!isMetric);
  };

  // Function for getting user's current location
  const handleCurrentLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        // Get weather data based on user's current location
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
          );
          setTimeout(() => {
            setLoading(false);
            setSearchQuery(response.data.name);
            console.log(fiveDaysForecastData);
          }, 500);
        } catch (error) {
          setLoading(false);
          throw new Error(error);
          console.log(error);
        }
      });
    }
  };

  // Function for handling search query on form submission
  const onSubmit = (query) => {
    console.log(fiveDaysForecastData);
    setLoading(true);
    setTimeout(() => {
      setSearchQuery(query);
      setLoading(false);
    }, 500); //
  };

  // Fetch weather data based on search query using react-query
  const { isPending, error, data, refetch } = useWeatherQuery(searchQuery);

  useEffect(() => {
    refetch(); // Refetch the weather data when search query changes
  }, [searchQuery, refetch]);

  // Fetch weather forecast data on initial page load
  useEffect(() => {
    if (data) {
      // Extract forecast dates from fetched data
      const forecastDates = [
        ...new Set(
          data.list.map(
            (entry) => new Date(entry.dt * 1000).toISOString().split('T')[0]
          )
        ),
      ];

      // Filter forecast data for the next 5 days at 9:00 AM
      const fiveDaysData = forecastDates.map((date) => {
        return data.list.find((entry) => {
          const entryDate = new Date(entry.dt * 1000)
            .toISOString()
            .split('T')[0];
          const entryTime = new Date(entry.dt * 1000).getHours();
          return entryDate === date && entryTime >= 9;
        });
      });
      setFiveDaysForecastData(fiveDaysData);
      console.log(fiveDaysData);
    }
  }, [data]);

  // Display loading screen while the data is being fetched
  if (isPending) return <Loading height={100} width={100} />;

  // Display error message in case of an error
  if (error) return <ErrorPage />;

  // Desctructure the JSON response from weather API
  const {
    city: { name: cityName, country },
    list: [
      {
        main: { temp: currentTemperature },
        weather: [{ icon, description }],
      },
    ],
  } = data;

  return (
    <div className='flex flex-col min-h-screen'>
      {loading ? (
        <Loading height={100} width={100} />
      ) : (
        <div
          className='custom-bg flex flex-col items-center justify-around min-h-screen min-w-screen px-5 py-10 w-full'
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          <Navbar
            handleCurrentLocation={handleCurrentLocation}
            onSubmit={onSubmit}
            isMetric={isMetric}
            handleTemperatureUnitsChange={handleTemperatureUnitsChange}
          />

          <div className='flex flex-col items-center py-10'>
            <h3>
              {cityName}, {country}
            </h3>

            <h1>
              {isMetric
                ? convertTemperature(currentTemperature, 'celcius')
                : convertTemperature(currentTemperature, 'fahrenheit')}
              &deg;
            </h1>

            <div className='flex flex-row items-center gap-2'>
              <h4>{capitalizeString(description)}</h4>
              <img
                className='bg-sky-300 rounded-full'
                src={`https://openweathermap.org/img/wn/${icon}.png`}
              />
            </div>
          </div>

          <div className='flex flex-col w-full justify-center items-center max-w-7xl'>
            <div className='bg-white border border-gray-300 rounded-md px-2 py-2 w-full my-2'>
              <div className='flex justify-between py-3 overflow-x-auto overflow-hidden gap-5'>
                {data.list.slice(0, 9).map((item) => {
                  return (
                    <div
                      key={item.dt}
                      className='flex flex-col justify-between items-center px-3 gap-2'
                    >
                      <h3 className='font-thin'>{formatTimestamp(item.dt)}</h3>
                      <img
                        className='bg-sky-300 rounded-full'
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      />
                      <h3 className='font-medium'>
                        {isMetric
                          ? convertTemperature(item.main.temp, 'celcius')
                          : convertTemperature(item.main.temp, 'fahrenheit')}
                        &deg;
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='bg-white border border-gray-300 rounded-md px-2 py-2 w-full my-2'>
              <div className='flex justify-between py-3 overflow-x-auto overflow-hidden gap-5'>
                {data.list.slice(0, 9).map((item) => {
                  return (
                    <div
                      key={item.dt}
                      className='flex flex-col justify-between items-center px-3 gap-2'
                    >
                      <h3 className='font-thin'>{formatTimestamp(item.dt)}</h3>
                      <img
                        className='bg-sky-300 rounded-full'
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      />
                      <h3 className='font-medium'>
                        {isMetric
                          ? convertTemperature(item.main.temp, 'celcius')
                          : convertTemperature(item.main.temp, 'fahrenheit')}
                        &deg;
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
