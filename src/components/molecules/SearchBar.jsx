/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Button from '../atoms/Button';
import SearchInput from '../atoms/SearchInput';

const SearchBar = ({ handleChange }) => {

  return (
    <div>
      <SearchInput style="inputDefault" handleChange={handleChange} />
      <Button btnText="Search" />
    </div>
  )
}

export default SearchBar;