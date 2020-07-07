/** @jsx jsx */

import React, { useState } from 'react';
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

const Review = ({ match, postReview, auth, reviews }) => {
  console.log(reviews)

  const movieId = match.params.id;

  const [reviewDetail, setReview] = useState({
    movieId: movieId,
    score: 0,
    comment: '',
    tag: '',
    condition: 'public',
    spoiler: false,
    record: '',
    date: ''
  });

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

  // const showReview = reviews && reviews.map((review) => {
  //   // if (auth.uid === review.id) {
  //   //   console.log(review)
  //   // }
  //   return review
  // })

  // console.log(showReview)

  // if (auth.uid === review.id && movieId === review.movieId) {
  //   console.log(review)
  // }

  /* <form onSubmit={handleSubmit}>
          <ReviewText handleChange={handleChange} />
          <p>Conditions</p>
          <ReviewConditions
            review={review}
            handleChangeRadio={handleChangeRadio}
            handleChangeCheck={handleChangeCheck}
            handleChange={handleChange}
          />
          <ReviewBtns movieId={movieId} postReview={postReview} />
        </form> */
  const showReview = () => {
    reviews && reviews.map((review) =>
      (auth.uid === review.authorId && movieId === review.movieId ? true : false))
    return
  }

  const filteredShowReview = showReview();

  console.log(showReview())

  return (
    <div>
      {reviews && reviews.map((review) => {
        // const matchMovie = reviews.filter((item) => {
        //   if (auth.uid === item.authorId && movieId === item.movieId) return true
        // })
        // console.log(matchMovie)
        //   if (item.authorId === auth.uid && movieId === item.movieId) return true;
        if (auth.uid === review.authorId && movieId === review.movieId) {
          const matchMovie = review;
          // console.log(matchMovie)
        };

        if (auth.uid === review.authorId && movieId === review.movieId) {
          // return (
          //   <div>
          //     {/* <p>{review.score}</p>
          //     <p>{review.comment}</p>
          //     <p>{review.tag}</p>
          //     <p>{review.record}</p> */}
          //   </div>
          // )
        } else {
          return (
            <div css={Styles.formwrap}>
              <form onSubmit={handleSubmit}>
                <ReviewText handleChange={handleChange} review={reviewDetail} handleChangeCheck={handleChangeCheck} />
                <p>Conditions</p>
                <ReviewConditions
                  review={reviewDetail}
                  handleChangeRadio={handleChangeRadio}
                  handleChangeCheck={handleChangeCheck}
                  handleChange={handleChange}
                />
                <ReviewBtns movieId={movieId} postReview={postReview} />
              </form>
            </div>
          )
        }
      }
      )}
    </div>
  );
};

export default Review;
