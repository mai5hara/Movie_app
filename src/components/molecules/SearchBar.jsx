/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import BtnStyle from '../atoms/BtnStyle';
import SearchInput, { searchBar } from '../atoms/SearchInput';

// const Styles = {
//   btn: css`
//   ${btnStyle}
//   `
//   input: css`
//     border-radius: 10px;
//   `,
// }

const SearchBar = ({ handleChange }) => {

  return (
    <div>
      <SearchInput inputStyle={searchBar} handleChange={handleChange} />
      <BtnStyle btnText="Search" />
    </div>
  )
}

export default SearchBar;