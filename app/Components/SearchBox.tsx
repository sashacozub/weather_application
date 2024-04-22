import { MdOutlineSearch } from 'react-icons/md';

const SearchBox = () => {
  return (
    <form className='flex relative items-center justify-center h-10'>
      <input
        type='text'
        placeholder='Search...'
        className='px-4 py-2 w-[250px] h-full border border-gray-300 rounded-l-3xl focus:outline-none focus:border-2 focus:border-accent-color hover:border-accent-color transition ease-in-out duration-200'
      ></input>
      <button className='px-4 py-[9px] h-full border border-gray-300 rounded-r-3xl text-white bg-accent-color focus:outline-none focus:border-accent-color hover:border hover:border-gray-300 hover:text-black hover:bg-white transition ease-in-out duration-200'>
        <MdOutlineSearch className='text-lg' />
      </button>
    </form>
  );
};

export default SearchBox;
