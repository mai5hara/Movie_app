import React from 'react';
import SearchBtn from '../atoms/SearchBtn';
import SearchInput from '../atoms/SearchInput';

const SearchBar = ({ handleChange }) => {

  return (
    <div>
      <SearchInput handleChange={handleChange} />
      <SearchBtn />
    </div>
  )
}

export default SearchBar;