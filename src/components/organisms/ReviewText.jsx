import React from 'react';
import ReviewInputStyle from '../molecules/ReviewInputStyle';

const ReviewText = ({ handleChange }) => {

  return (
    <div>
      <ReviewInputStyle inputTitle="Score" handleChange={handleChange} type="text" id="score" />
      <ReviewInputStyle inputTitle="Review Comment" handleChange={handleChange} type="comment" id="text" />
      <ReviewInputStyle inputTitle="Tags" handleChange={handleChange} type="text" id="tag" />
    </div>
  )
}

export default ReviewText;