import { MdOutlineSearch } from 'react-icons/md';

const SearchBox = () => {
  return (
    <form className='flex relative items-center justify-center h-10'>
      <input
        type='text'
        placeholder='Search...'
        className='border border-gray-300 rounded-l-3xl px-4 py-2 w-[250px] focus:outline-none focus:border-accent-color hover:border-accent-color h-full transition ease-in-out duration-200'
      ></input>
      <button>
        <MdOutlineSearch />
      </button>
    </form>
  );
};

export default SearchBox;
