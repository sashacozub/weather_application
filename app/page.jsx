'use client';

import { useState, useEffect, useReducer } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SearchBox from './Components/SearchBox';
import { MdOutlineLocationOn } from 'react-icons/md';
import Loading from './Components/Loading';
import {
  convertKelvinToCelcius,
  convertKelvinToFahrenheit,
} from './utils/temperatureConverter';
import Switch from 'react-switch';
import { capitalizeString } from './utils/capitalizeString';

export default function Home() {
  const [isCelcius, setIsCelcius] = useState(true);
  const [searchQuery, setSearchQuery] = useState('oslo');

  const handleTemperatureUnitsChange = () => {
    isCelcius ? setIsCelcius(false) : setIsCelcius(true);
  };

  const onSubmit = (query) => {
    setSearchQuery(query);
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${process.env.NEXT_PUBLIC_API_KEY}&cnt=25`
      );

      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, [searchQuery, refetch]);

  if (isPending)
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loading height={100} width={100} />
      </div>
    );

  if (error)
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <h3>{error.response.status}</h3>
      </div>
    );

  const currentCity = data.city;
  const currentWeather = data.list[0];

  const temperatureInCelcius = convertKelvinToCelcius(currentWeather.main.temp);
  const temperatureInFahrenheit = convertKelvinToFahrenheit(
    currentWeather.main.temp
  );
  console.log(data);

  return (
    <div className='flex flex-col min-h-screen'>
      <div
        className='custom-bg flex flex-col items-center justify-around py-5 min-h-screen min-w-screen'
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className='flex flex-row items-center gap-4 w-full justify-center'>
          <a href='/'>
            <Image
              src='/assets/logo.png'
              height={40}
              width={40}
              alt='weather application logo'
              priority={true}
            />
          </a>
          <MdOutlineLocationOn className='cursor-pointer hover:opacity-80 hover:text-accent-color text-3xl transition duration-200 ease-in-out' />
          <SearchBox onSubmit={onSubmit} />
          <Switch
            className='border border-gray-300'
            checked={isCelcius}
            onChange={handleTemperatureUnitsChange}
            onColor='#fff'
            offColor='#fff'
            onHandleColor='#6D00A0'
            offHandleColor='#6D00A0'
            checkedIcon={
              <p className='flex justify-center items-center h-full pl-1'>
                C&deg;
              </p>
            }
            uncheckedIcon={
              <p className='flex justify-center items-center h-full'>F&deg;</p>
            }
            activeBoxShadow='0 0 2px 3px #6D00A0'
          />
        </div>

        <div className='flex flex-col items-center'>
          <h3 className='text-2xl'>
            {currentCity.name}, {currentCity.country}
          </h3>
          <h1 className='text-8xl font-medium'>
            {isCelcius ? temperatureInCelcius : temperatureInFahrenheit}&deg;
          </h1>
          <div className='flex flex-row items-center gap-2'>
            <h4>{capitalizeString(currentWeather.weather[0].description)}</h4>
            <img
              className='bg-sky-300 rounded-full'
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
            />
          </div>
        </div>
        <div>
          <h4>Forecast Hourly</h4>
          <h4>Forecast Daily</h4>
        </div>
      </div>
    </div>
  );
}
