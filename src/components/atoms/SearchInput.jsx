import React from 'react';

const SearchBar = ({ handleChange }) => {

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  )
}

export default SearchBar;