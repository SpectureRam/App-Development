import React from 'react';
import { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="relative flex items-center">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search products..."
        className="block w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 sm:rounded-md"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 bottom-0 mr-4 text-gray-500 focus:ring-primary-500 focus:text-primary-500"
        onClick={handleSubmit}
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
