import Image from 'next/image';
import SearchBox from './SearchBox';
import { MdOutlineLocationOn } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center gap-4'>
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
    </nav>
  );
};

export default Navbar;

// import Image from 'next/image';
// import SearchBox from './SearchBox';
// import { MdOutlineLocationOn } from 'react-icons/md';

// const Navbar = () => {
//   return (
//     <nav className='shadow-md sticky top-0 left-0 bg-white z-20'>
//       <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-5 mx-auto'>
//         <a href='/'>
//           <Image
//             src='/assets/logo.png'
//             height={64}
//             width={64}
//             alt='weather application logo'
//             priority={true}
//           />
//         </a>
//         <div className='flex gap-2 items-center'>
//           <MdOutlineLocationOn className='cursor-pointer hover:opacity-80 hover:text-accent-color text-3xl transition duration-200 ease-in-out' />
//           <div>
//             <SearchBox />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
