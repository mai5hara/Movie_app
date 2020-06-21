import React from 'react';
import ViewBtn from '../atoms/ViewBtn';
import ClipBtn from '../atoms/ClipBtn';
import ReviewBtn from '../atoms/ReviewBtn';

const MovieDetailBtns = ({
  viewHandleClick,
  clipHandleClick,
  totalView,
  clipToggle,
  id }) => {

  return (
    <div>
      <ViewBtn viewHandleClick={viewHandleClick} totalView={totalView} />
      <ClipBtn clipHandleClick={clipHandleClick} clipToggle={clipToggle} />
      <ReviewBtn id={id} />
    </div>
  )
};

export default MovieDetailBtns;