/** @jsx jsx */

import React, { useState, useEffect, useReducer } from 'react';
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

const initialState = {}

const reducer = (state = initialState, action) => {
  console.log(action)
  console.log(state.review)
  console.log(state)
  console.log(action)

  switch (action.type) {
    case 'INITIALVALUE':
      return action.payload
    case 'UPDATE':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
  }
}


const Review = ({ match, postReview, auth, reviews, selectReview, getReview }) => {

  const movieId = match.params.id;

  const [reviewDetail, dispatch] = useReducer(reducer, initialState);
  // const { review } = reviewDetail;

  // const test = ({initialCount}) => {  
  //   const [state, dispatch] = useReducer(reducer, test, init);

  console.log(reviewDetail)

  // const handleChangeCheck = () => {
  //   setReview({
  //     ...reviewDetail,
  //     spoiler: !reviewDetail.spoiler,
  //   });
  // };

  const handleChangeCheck = (key) => (e) => {
    //   setReview({
    //     ...reviewDetail,
    //     spoiler: !reviewDetail.spoiler,
    //   });
    e.preventDefault();
    dispatch({ type: 'UPDATE', payload: { key, value: !reviewDetail.spoiler } })

  };

  // const handleChangeRadio = (e) => {
  //   setReview({
  //     ...reviewDetail,
  //     condition: e.target.value,
  //   });
  // };

  const handleChange = (key) => (e) => {
    console.log(e.target)
    e.preventDefault();
    dispatch({ type: 'UPDATE', payload: { key, value: e.target.value } })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(reviewDetail);
  };

  useEffect(() => {
    console.log('hey')
    const init = async () => {
      const { review } = await getReview(movieId);
      dispatch({ type: 'INITIALVALUE', payload: review })
      console.log(review)
    }
    init()
  }, [])

  return (
    <div css={Styles.formwrap}>
      <form onSubmit={handleSubmit}>
        <ReviewText
          handleChange={handleChange}
          review={reviewDetail}
          handleChangeCheck={handleChangeCheck}
          selectReview={selectReview}
          spoilerValue={!reviewDetail.spoiler}
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
