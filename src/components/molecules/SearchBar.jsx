import React from 'react';
import BtnStyle from '../atoms/BtnStyle';
import SearchInput from '../atoms/SearchInput';

const SearchBar = ({ handleChange }) => {
  const searchBtnText = 'Search';

  return (
    <div>
      <SearchInput handleChange={handleChange} />
      <BtnStyle btnText={searchBtnText} />
    </div>
  )
}

export default SearchBar;