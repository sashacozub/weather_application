import Image from 'next/image';
import SearchBox from './Components/SearchBox';
import { MdOutlineLocationOn } from 'react-icons/md';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div
        className='custom-bg flex flex-col items-center justify-around py-5 min-h-screen'
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className='flex flex-row items-center gap-4'>
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
          <SearchBox />
        </div>
        <div>
          <h3 className='text-2xl'>Oslo, NO</h3>
          <h1 className='text-8xl font-medium'>5&deg;</h1>
          <div className='flex flex-row gap-2'>
            <h4>Cloudy</h4>
            <p>icon</p>
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
