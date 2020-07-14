/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { v4 as uuidv4 } from 'uuid';
import ShowReview from '../molecules/ShowReview';

const Styles = {
  scoreWrap: css`
    width: 70%;
    margin: 3rem auto 6rem auto;
  `,
}

const ScoreReviews = ({ reviews, id }) => {

  return (
    <div css={Styles.scoreWrap}>
      <h2>Score ・ Review</h2>
      {reviews &&
        reviews.map((review) => {
          return <ShowReview key={uuidv4()} review={review} id={id} />;
        })}
    </div>
  )
}

export default ScoreReviews;