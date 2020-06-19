import React from 'react';

const ShowReview = (review) => {
  return (
    <div>
      <p>{review.review.authorName}</p>
      <p>{review.review.score}</p>
      <p>{review.review.comment}</p>
      <hr></hr>
    </div>
  );
};

export default ShowReview;
