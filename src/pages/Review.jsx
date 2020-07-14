/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core'
import ReviewText from '../components/organisms/ReviewText';
import ReviewBtns from '../components/molecules/ReviewBtns';
import ReviewConditions from '../components/organisms/ReviewConditions';
import MyReview from '../components/organisms/MyReview';
import ReviewForm from '../components/organisms/ReviewForm';

const Styles = {
  formwrap: css`
    width: 60%;
    margin: 0 auto;
  `,
}

const Review = ({ match, postReview, auth, reviews, selectReview, getReview }) => {
  // console.log(match.params.id)
  // console.log(reviews)
  console.log(selectReview.comment)
  // console.log(getReview)

  const movieId = match.params.id;

  const [reviewDetail, setReview] = useState({
    movieId: movieId,
    score: 0,
    comment: getReview.comment || '',
    tag: '',
    condition: getReview.condition || 'public',
    spoiler: false,
    record: '',
    date: ''
  });

  console.log(reviewDetail)

  const handleChangeCheck = () => {
    setReview({
      ...reviewDetail,
      spoiler: !reviewDetail.spoiler,
    });
  };

  const handleChangeRadio = (e) => {
    setReview({
      ...reviewDetail,
      condition: e.target.value,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setReview({
      ...reviewDetail,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(reviewDetail);
    setReview('');
  };

  const eachReview = () => {
    let shoeReview = ''
    reviews && reviews.map((review) =>
      (auth.uid === review.authorId && movieId === review.movieId && !review.movieId.length === 0 ? shoeReview : <ReviewForm />))
  }

  // const filteredShowReview = showReview();

  const filterReview = () => {
    const muchReview = auth.uid === reviews.authorId && movieId === reviews.movieId;
    reviews.filter((muchReview) => {
      console.log(muchReview)
    })
  }

  useEffect(() => {
    getReview(movieId)
  }, [])




  return (
    <div css={Styles.formwrap} {...selectReview}>
      {selectReview ? <p>{selectReview.comment}</p> : <p></p>


      }
      <form onSubmit={handleSubmit}>
        <ReviewText
          handleChange={handleChange}
          review={reviewDetail}
          handleChangeCheck={handleChangeCheck}
          selectReview={selectReview}
        />
        <p>Conditions</p>
        <ReviewConditions
          review={reviewDetail}
          handleChangeRadio={handleChangeRadio}
          handleChangeCheck={handleChangeCheck}
          handleChange={handleChange}
          selectReview={selectReview}
        />
        <ReviewBtns movieId={movieId} postReview={postReview} />
      </form>
    </div>

  );
};

export default Review;
