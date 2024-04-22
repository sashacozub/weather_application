'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WeatherData } from './utils/interfaces';
import Navbar from './Components/Navbar';
import Loading from './Components/Loading';
import Container from './Components/Container';
import { converterKelvinToCelcius } from './utils/temperatureConverter';

export default function Home() {
  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=oslo&appid=${process.env.NEXT_PUBLIC_API_KEY}&cnt=40`
      );

      return data;
    },
  });

  const dataForToday = data?.list[0];
  const temp = data?.list[0].weather[0].description;
  console.log(data?.list[0].weather[0].description);

  if (isPending)
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Loading height={100} width={100} />
      </div>
    );

  return (
    <div className='flex flex-col min-h-screen'>
      <div
        className='custom-bg flex flex-col items-center justify-around py-5 min-h-screen'
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <Navbar />
        <section className='flex flex-col'>
          <h4 className='flex justify-center'>
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </h4>
          <h3 className='text-2xl'>Oslo, NO</h3>
          <h1 className='text-8xl font-medium'>
            {converterKelvinToCelcius(dataForToday?.main.temp)}&deg;
          </h1>
          <div className='flex flex-row gap-2'>
            <h4>Cloudy</h4>
            <p>icon</p>
          </div>
        </section>
        <div>
          <section>
            <Container className='gap-10 px-6 items-center'>
              <div className='flex flex-col px-4'></div>
            </Container>
          </section>
          {/*Hourly forecast*/}
          <section>Daily</section> {/*Daily forecast*/}
        </div>
      </div>
    </div>
  );
}
