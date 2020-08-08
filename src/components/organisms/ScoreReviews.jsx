/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import ShowReview from '../molecules/ShowReview';

const Styles = {
  scoreWrap: css`
    width: 70%;
    margin: 3rem auto 6rem auto;
  `,
}

const ScoreReviews = ({ review }) => {
  return (
    <div css={Styles.scoreWrap}>
      <h2>Score ・ Review</h2>
      {review && Object.values(review).map((review) => {
        return <ShowReview key={review.movieid} review={review} />;
      })}
    </div>
  )
}

export default ScoreReviews;