import React from 'react';
import ShowReview from '../molecules/ShowReview';

const ScoreReviews = ({ reviews }) => {
  return (
    <div>
      <h2>Score ・ Review</h2>
      {reviews &&
        reviews.map((review) => {
          return <ShowReview review={review} />;
        })}
    </div>
  )
}

export default ScoreReviews;