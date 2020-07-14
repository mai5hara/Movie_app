/** @jsx jsx */

import React, { useState, useEffect, useReducer } from 'react';
import { jsx, css } from '@emotion/core'
import ReviewText from '../components/organisms/ReviewText';
import ReviewBtns from '../components/molecules/ReviewBtns';
import ReviewConditions from '../components/organisms/ReviewConditions';
import MyReview from '../components/organisms/MyReview';
import ReviewForm from '../components/organisms/ReviewForm';
import ReviewReducer from '../store/reducers/movieReducer'

const Styles = {
  formwrap: css`
    width: 60%;
    margin: 0 auto;
  `,
}

const Review = ({ match, postReview, auth, reviews, selectReview, getReview }) => {

  const movieId = match.params.id;

  // const [reviewDetail, setReview] = useState({
  //   movieId: movieId,
  //   score: selectReview.score || 0,
  //   comment: selectReview.comment || '',
  //   tag: selectReview.tag || '',
  //   condition: selectReview.condition || 'public',
  //   spoiler: selectReview.spoiler || false,
  //   record: selectReview.record || '',
  //   date: ''
  // });
  console.log(reviews)

  const test = [{ test1: 1, review: { test2: 2, test3: 1 } }, { test1: 3, review: { test2: 4, test3: 1 } }, { test1: 1, review: { test2: 3, test3: 1 } }]
  const filteredReview = test.filter((item) => item.review.test2 === 2);
  const filteredReview1 = reviews && reviews.filter((item) => item.review.authorId === auth.uid);

  console.log(filteredReview1)
  // console.log(filteredReview1['id'])


  console.log(reviews, auth)

  // setTimeout(() => { const score = selectReview.score ? selectReview.score : 0 }, 10)

  const initialState = {
    movieId: movieId,
    score: selectReview.score,
    comment: selectReview.comment || 'aaaa',
    tag: selectReview.tag || '',
    condition: selectReview.condition || 'public',
    spoiler: selectReview.spoiler || false,
    record: selectReview.record || '',
    date: ''
  }

  console.log(selectReview.score)
  console.log(initialState.score)

  const [reviewDetail, dispatch] = useReducer(ReviewReducer, initialState);


  console.log(dispatch)
  console.log(reviewDetail)

  // const handleChangeCheck = () => {
  //   setReview({
  //     ...reviewDetail,
  //     spoiler: !reviewDetail.spoiler,
  //   });
  // };

  // const handleChangeRadio = (e) => {
  //   setReview({
  //     ...reviewDetail,
  //     condition: e.target.value,
  //   });
  // };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e)
    dispatch({ type: e.target.id, payload: e.target.value })
    // setReview({
    //   ...reviewDetail,
    //   [e.target.id]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getReview(reviewDetail));
    // setReview('');
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
    <div css={Styles.formwrap}>
      {/* {selectReview ? <p>{selectReview.comment}</p> : <p></p>


      } */}
      <form onSubmit={handleSubmit}>
        <ReviewText
          handleChange={handleChange}
          review={reviewDetail}
          // handleChangeCheck={handleChangeCheck}
          selectReview={selectReview}
        />
        <p>Conditions</p>
        <ReviewConditions
          review={reviewDetail}
          // handleChangeRadio={handleChangeRadio}
          // handleChangeCheck={handleChangeCheck}
          handleChange={handleChange}
          selectReview={selectReview}
        />
        <ReviewBtns movieId={movieId} postReview={postReview} />
      </form>
    </div>

  );
};

export default Review;
