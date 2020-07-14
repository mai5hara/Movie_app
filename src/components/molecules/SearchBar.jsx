/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import BtnStyle from '../atoms/BtnStyle';
import SearchInput from '../atoms/SearchInput';

const Styles = {
  input: css`
    border-radius: 10px;
  `,
}

const SearchBar = ({ handleChange }) => {
  const searchBtnText = 'Search';

  return (
    <div>
      <SearchInput handleChange={handleChange} css={Styles.input} />
      <BtnStyle btnText={searchBtnText} />
    </div>
  )
}

export default SearchBar;