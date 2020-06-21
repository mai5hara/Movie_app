import React from 'react';
import ReviewCancelBtn from '../atoms/ReviewCancelBtn';
import ReviewPublishBtn from '../atoms/ReviewPublishBtn';

const ReviewBtns = ({ movieId }) => {
  return (
    <div>
      <ReviewCancelBtn movieId={movieId} />
      <ReviewPublishBtn />
    </div>
  )
}

export default ReviewBtns;