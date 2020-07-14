/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const Styles = {
  input: css`
    border-radius: 30px;
    height: 2.6rem;
    width: 60%;
    border-style: none;
    padding: 0 1rem;
  `,
}

const SearchBar = ({ handleChange }) => {

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