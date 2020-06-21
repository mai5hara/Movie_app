import React, { useState } from 'react';
import ReviewText from '../components/organisms/ReviewText';
import ReviewBtns from '../components/molecules/ReviewBtns';
import ReviewConditions from '../components/organisms/ReviewConditions';

const Review = ({ match, postReview }) => {
  const movieId = match.params.id;

  const [review, setReview] = useState({
    movieId: movieId,
    score: 0,
    comment: '',
    tag: '',
    condition: 'public',
    spoiler: false,
    record: '',
  });

  const handleChangeCheck = () => {
    setReview({
      ...review,
      spoiler: !review.spoiler,
    });
  };

  const handleChangeRadio = (e) => {
    setReview({
      ...review,
      [e.target.id]: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log(review.record);
    e.preventDefault();
    setReview({
      ...review,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(review);
    setReview('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ReviewText handleChange={handleChange} />
        <p>Conditions</p>
        <ReviewConditions
          review={review}
          handleChangeRadio={handleChangeRadio}
          handleChangeCheck={handleChangeCheck}
          handleChange={handleChange}
        />
        <ReviewBtns movieId={movieId} />
      </form>
    </div>
  );
};

export default Review;
