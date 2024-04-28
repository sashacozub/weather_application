import Image from 'next/image';
import { MdOutlineLocationOn } from 'react-icons/md';
import Switch from 'react-switch';
import SearchBox from './SearchBox';

const Navbar = ({
  handleCurrentLocation,
  onSubmit,
  isMetric,
  handleTemperatureUnitsChange,
}) => {
  return (
    <nav className='flex flex-row items-center gap-4 w-full justify-center py-10'>
      <a href='/'>
        <Image
          src='/assets/logo.png'
          height={40}
          width={40}
          alt='weather application logo'
          priority={true}
        />
      </a>

      {/* Button for fetching user's current location */}
      <MdOutlineLocationOn
        className='cursor-pointer hover:opacity-80 hover:text-accent-color text-3xl transition duration-200 ease-in-out'
        onClick={handleCurrentLocation}
      />

      <SearchBox onSubmit={onSubmit} />

      {/* Button for switching temperature format */}
      <Switch
        className='border border-gray-300'
        checked={isMetric}
        onChange={handleTemperatureUnitsChange}
        onColor='#fff'
        offColor='#fff'
        onHandleColor='#6D00A0'
        offHandleColor='#6D00A0'
        checkedIcon={
          <p className='flex justify-center items-center h-full pl-1'>C&deg;</p>
        }
        uncheckedIcon={
          <p className='flex justify-center items-center h-full'>F&deg;</p>
        }
        activeBoxShadow='0 0 2px 3px #6D00A0'
      />
    </nav>
  );
};

export default Navbar;
