/** @jsx jsx */

import { useState } from 'react';
import { jsx, css } from '@emotion/core'
import SearchInput from '../atoms/SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchBar = css({
  marginTop: '3rem'
})

const searchIcon = css({
  background: '#777777',
  color: '#ffffff',
  width: '42px',
  height: '42px',
  borderRadius: '30px',
  marginLeft: '0.5rem',
  fontsize: '1rem',
  outline: 'none'
})

const inputWrap = css({
  display: 'flex',
  justifyContent: 'center'
})

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
    <div css={searchBar}>
      <form onSubmit={callSearchFunction} css={inputWrap}>
        <SearchInput style="inputDefault" handleChange={handleChange} />
        <button css={searchIcon}><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  )
}

export default SearchBar;