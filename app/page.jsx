'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { convertTemperature } from './utils/temperatureConverter';
import { capitalizeString } from './utils/capitalizeString';
import Loading from './Components/Loading';
import ErrorPage from './Components/ErrorPage';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { useWeatherQuery } from './api/weather';

/**
 * Home component for the weather application.
 * Renders the main page with weather information and forecast.
 */

export default function Home() {
  const [isMetric, setIsMetric] = useState(true);
  const [searchQuery, setSearchQuery] = useState('oslo');
  const [loading, setLoading] = useState(false);
  const [fiveDaysForecastData, setFiveDaysForecastData] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  /**
   * Function for converting temperature units between metric and imperial.
   */
  const handleTemperatureUnitsChange = () => {
    setIsMetric(!isMetric);
  };

  /**
   * Function for getting user's current location and fetching weather data.
   */
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
          }, 500);
        } catch (error) {
          setLoading(false);
          throw new Error(error);
          console.log(error);
        }
      });
    }
  };

  /**
   * Function for handling search query on form submission.
   * @param {string} query - The search query entered by the user.
   */
  const onSubmit = (query) => {
    setLoading(true);
    setTimeout(() => {
      setSearchQuery(query);
      setLoading(false);
    }, 500);
  };

  // Fetch weather data based on search query using react-query
  const { isPending, error, data, refetch } = useWeatherQuery(searchQuery);

  useEffect(() => {
    refetch(); // Refetch the weather data when search query changes
  }, [searchQuery, refetch]);

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
    }
  }, [data]);

  if (isPending) return <Loading height={100} width={100} />;

  if (error) return <ErrorPage />;

  // Destructure fetched data
  const {
    city: { name: cityName, country },
    list: [
      {
        main: { temp: currentTemperature },
        weather: [{ icon, description }],
        wind: { deg: degrees, speed: windSpeed },
      },
    ],
  } = data;

  return (
    <div className='flex flex-col min-h-screen'>
      {loading ? (
        <Loading height={100} width={100} />
      ) : (
        <div className='custom-bg flex flex-col items-center justify-around min-h-screen min-w-screen px-5 py-10 w-full'>
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

              {/* Wind speed */}
              <IoIosArrowRoundUp
                size={30}
                style={{ transform: `rotate(${degrees}deg)` }}
              />
              <p className='text-sm'>{windSpeed} m/s</p>
            </div>
          </div>

          <div className='flex flex-col w-full justify-center items-center max-w-7xl'>
            {/* Container with hourly weather */}
            <Container
              dataToIterate={data.list.slice(0, 9)}
              timestampFormat={'time'}
              isMetric={isMetric}
            />

            {/* Container with 5-day forecast */}
            <Container
              dataToIterate={fiveDaysForecastData}
              timestampFormat={'day'}
              isMetric={isMetric}
            />
          </div>
        </div>
      )}
    </div>
  );
}
