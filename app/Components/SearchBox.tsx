import { cn } from '@/app/utils/cn';
import { MdOutlineSearch } from 'react-icons/md';

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const SearchBox = (props: Props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        'flex relative items-center justify-center h-10',
        props.className
      )}
    >
      <input
        type='text'
        placeholder='Search...'
        value={props.value}
        onChange={props.onChange}
        className='px-4 py-2 w-[250px] h-full border border-gray-300 rounded-l-3xl focus:outline-none focus:border-2 focus:border-accent-color hover:border-accent-color transition ease-in-out duration-200'
      ></input>
      <button className='px-4 py-[9px] h-full border border-gray-300 rounded-r-3xl text-white bg-accent-color focus:outline-none focus:border-accent-color hover:border hover:border-gray-300 hover:text-black hover:bg-white transition ease-in-out duration-200'>
        <MdOutlineSearch className='text-lg' />
      </button>
    </form>
  );
};

export default SearchBox;
