/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchBar = css({
  borderRadius: '30px',
  height: '2.6rem',
  width: '60%',
  borderStyle: 'none',
  padding: '0 1rem',
  outline: 'none',
})

const map = {
  inputDefault: searchBar
}

const SearchBar = ({ handleChange, style }) => {

  const inputStyle = map[style]

  return (
    <input
      type="text"
      placeholder="search with movie title"
      onChange={handleChange}
      css={inputStyle}
    />
  )
}

export default SearchBar;