import { convertTemperature } from '../utils/temperatureConverter';
import { formatTimestamp } from '../utils/formatTimestamp';

/**
 * Renders a container component that displays weather data.
 *
 * @param {Array} props.dataToIterate - The array of weather data to iterate over.
 * @param {string} props.timestampFormat - The format of the timestamp to display.
 * @param {boolean} props.isMetric - Indicates whether the temperature is in metric units.
 * @returns {JSX.Element} The rendered container component.
 */

const Container = ({ dataToIterate, timestampFormat, isMetric }) => {
  return (
    <div className='bg-white border border-gray-300 rounded-md px-2 py-2 w-full my-2 shadow-md'>
      <div className='flex justify-between py-3 overflow-x-auto overflow-hidden'>
        {dataToIterate.map((item) => {
          if (item !== undefined) {
            return (
              <div
                key={item.dt}
                className='flex flex-col justify-between items-center px-3 gap-2 min-w-32'
              >
                <h3 className='font-thin'>
                  {formatTimestamp(item.dt, timestampFormat)}
                </h3>
                <img
                  alt='weather icon'
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
          }
        })}
      </div>
    </div>
  );
};

export default Container;
