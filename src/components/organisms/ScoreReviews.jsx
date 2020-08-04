/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import ShowReview from '../molecules/ShowReview';

const Styles = {
  scoreWrap: css`
    width: 70%;
    margin: 3rem auto 6rem auto;
  `,
}

const ScoreReviews = ({ review, userId, movieId, getSelectReview, getLikeCount, ownLikeCount, totalLikeCount, history }) => {
  return (
    <div css={Styles.scoreWrap}>
      <h2>Score ・ Review</h2>
      {review && Object.values(review).map((review) => {
        return (
          <ShowReview
            key={review.authorId}
            review={review}
            userId={userId}
            ownLikeCount={ownLikeCount}
            totalLikeCount={totalLikeCount}
            movieId={movieId}
            getSelectReview={getSelectReview}
            getLikeCount={getLikeCount}
            history={history}
          />)
      })}
    </div>
  )
}

export default ScoreReviews;