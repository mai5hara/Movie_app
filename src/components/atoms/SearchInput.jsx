/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const searchBar = css({
  borderRadius: '30px',
  height: '2.6rem',
  width: '60%',
  borderStyle: 'none',
  padding: '0 1rem',
  outline: 'none',
})

const SearchBar = ({ handleChange, inputStyle }) => {

  const Styles = {
    input: css`
      ${inputStyle}
    `,
  }

  return (
    <input
      type="text"
      placeholder="search with movie title"
      onChange={handleChange}
      css={Styles.input}
    />
  )
}

export default SearchBar;