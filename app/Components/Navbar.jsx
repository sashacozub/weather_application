import Image from 'next/image';
import { MdOutlineLocationOn } from 'react-icons/md';
import Switch from 'react-switch';
import SearchBox from './SearchBox';

/**
 * Navbar component for the weather application.
 *
 * @param {Function} props.handleCurrentLocation - The function to handle fetching the user's current location.
 * @param {Function} props.onSubmit - The function to handle form submission.
 * @param {boolean} props.isMetric - A boolean indicating whether the temperature is in metric units.
 * @param {Function} props.handleTemperatureUnitsChange - The function to handle changing the temperature units.
 * @returns {JSX.Element} The rendered Navbar component.
 */

const Navbar = ({
  handleCurrentLocation,
  onSubmit,
  isMetric,
  handleTemperatureUnitsChange,
}) => {
  return (
    <nav className='flex flex-col sm:flex-row w-full items-center gap-4 justify-center py-10'>
      <div className='flex justify-between items-center gap-4 w-[250px] sm:w-[150px]'>
        {/* Website logo */}
        <a href='/'>
          <Image
            src='/assets/logo.png'
            height={40}
            width={40}
            alt='weather application logo'
            priority={true}
          />
        </a>

        {/* Button for switching temperature format */}
        <Switch
          aria-label='Switch temperature units'
          className='border border-gray-300'
          checked={isMetric}
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

        {/* Button for fetching user's current location */}
        <button
          aria-label='Get current location'
          className='cursor-pointer hover:opacity-80 hover:text-accent-color text-3xl transition duration-200 ease-in-out'
          onClick={handleCurrentLocation}
        >
          <MdOutlineLocationOn />
        </button>
      </div>

      <SearchBox onSubmit={onSubmit} />
    </nav>
  );
};

export default Navbar;
