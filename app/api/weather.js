import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Fetch weather data based on search query using react-query
export const useWeatherQuery = (searchQuery) => {
  return useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${API_KEY}&cnt=40`
      );

      return data;
    },
  });
};
