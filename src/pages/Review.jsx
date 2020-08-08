/** @jsx jsx */

import { useEffect, useReducer } from 'react';
import { jsx, css } from '@emotion/core'
import ReviewText from '../components/organisms/ReviewText';
import ReviewBtns from '../components/molecules/ReviewBtns';
import ReviewConditions from '../components/organisms/ReviewConditions';

const Styles = {
  formwrap: css`
    width: 60%;
    margin: 0 auto;
  `,
}

const initialState = {}

const reducer = (state = initialState, action) => {

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


const Review = ({ match, postReview, getReview }) => {

  const movieId = match.params.id;

  const [reviewDetail, dispatch] = useReducer(reducer, initialState);

  const handleChangeCheck = (key) => (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE', payload: { key, value: !reviewDetail.spoiler } })

  };

  const handleChange = (key) => (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE', payload: { key, value: e.target.value } })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(reviewDetail);
  };

  useEffect(() => {
    const init = async () => {
      const review = await getReview(movieId);
      dispatch({ type: 'INITIALVALUE', payload: { ...review, movieId } })
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
        />
        <p>Conditions</p>
        <ReviewConditions
          review={reviewDetail}
          handleChange={handleChange}
        />
        <ReviewBtns movieId={movieId} postReview={postReview} />
      </form>
    </div>

  );
};

export default Review;
