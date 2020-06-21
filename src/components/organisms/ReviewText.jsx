import React from 'react';
import ReviewScore from '../molecules/ReviewScore';
import ReviewComment from '../molecules/ReviewComment';
import ReviewTags from '../molecules/ReviewTags';

const ReviewText = ({ handleChange }) => {
  return (
    <div>
      <ReviewScore handleChange={handleChange} />
      <ReviewComment handleChange={handleChange} />
      <ReviewTags handleChange={handleChange} />
    </div>
  )
}

export default ReviewText;