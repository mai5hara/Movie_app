import React from 'react';
import BtnStyle from '../atoms/BtnStyle'
import { Link } from 'react-router-dom';

const MovieDetailBtns = ({
  viewHandleClick,
  clipHandleClick,
  totalView,
  clipToggle,
  id }) => {

  return (
    <div>
      <BtnStyle btnText="View" btnCount={totalView} btnFunc={viewHandleClick} id="viewCount" />
      <BtnStyle btnText="Clip" btnFunc={clipHandleClick} id="clipCount" />
      <Link to={'/' + id + '/review'} key={id}>
        <BtnStyle btnText="Review" />
      </Link>
    </div>
  )
};

export default MovieDetailBtns;