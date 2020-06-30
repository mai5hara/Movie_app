import React from 'react';
import ReviewConditions from '../organisms/ReviewConditions';
import ReviewText from '../organisms/ReviewText';
import ReviewBtns from '../molecules/ReviewBtns';

const ReviewFrom = ({ handleSubmit, handleChange, review, handleChangeRadio, handleChangeCheck, movieId, postReview }) => {
  return (
    <form onSubmit={handleSubmit}>
      <ReviewText handleChange={handleChange} />
      <p>Conditions</p>
      <ReviewConditions
        review={review}
        handleChangeRadio={handleChangeRadio}
        handleChangeCheck={handleChangeCheck}
        handleChange={handleChange}
      />
      <ReviewBtns movieId={movieId} postReview={postReview} />
    </form>
  )
}

export default ReviewFrom;