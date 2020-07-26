/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import BtnStyle from '../atoms/BtnStyle';
import SearchInput from '../atoms/SearchInput';

const SearchBar = ({ handleChange }) => {

  return (
    <div>
      <SearchInput style="inputDefault" handleChange={handleChange} />
      <BtnStyle btnText="Search" />
    </div>
  )
}

export default SearchBar;