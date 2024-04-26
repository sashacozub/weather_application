'use client';

import { useState, useEffect } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import axios from 'axios';

const SearchBox = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [citiesFound, setCitiesFound] = useState(0);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
    if (inputValue.length > 0) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${e.target.value}&appid=${API_KEY}`
        );

        const results = response.data.count;
        setCitiesFound(results);
      } catch (error) {
        console.log('Input error: ' + error);
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (citiesFound > 0) {
      onSubmit(inputValue);
      setErrorMessage('');
      setInputValue('');
    } else {
      setErrorMessage('Location not found');
    }
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className='flex relative items-center justify-center h-10'
    >
      <input
        type='text'
        placeholder='Search...'
        value={inputValue}
        onChange={handleInputChange}
        className='px-4 py-2 w-[250px] h-full border border-gray-300 rounded-l-3xl focus:outline-none focus:border-2 focus:border-accent-color hover:border-accent-color transition ease-in-out duration-200'
      ></input>
      <>
        {errorMessage != '' && (
          <div className='position: absolute top-14 bg-white text-red-400 px-10 py-3'>
            <p>Location not found</p>
          </div>
        )}
      </>
      <button className='px-4 py-[9px] h-full border border-gray-300 rounded-r-3xl text-white bg-accent-color focus:outline-none focus:border-accent-color hover:border hover:border-gray-300 hover:text-black hover:bg-white transition ease-in-out duration-200'>
        <MdOutlineSearch className='text-lg' />
      </button>
    </form>
  );
};

export default SearchBox;
