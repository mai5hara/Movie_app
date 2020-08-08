/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import SearchInput from '../atoms/SearchInput';

const SearchBar = ({ handleChange }) => {

  return (
    <div>
      <SearchInput style="inputDefault" handleChange={handleChange} />
    </div>
  )
}

export default SearchBar;