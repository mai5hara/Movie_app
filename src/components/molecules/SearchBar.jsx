/** @jsx jsx */

import { useState } from 'react';
import { jsx, css } from '@emotion/core'
import SearchInput from '../atoms/SearchInput';

const SearchBar = ({ fetchMovies }) => {

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    fetchMovies(searchValue);
    setSearchValue('');
  };

  return (
    <div>
      <form onSubmit={callSearchFunction}>
        <SearchInput style="inputDefault" handleChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchBar;