/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import React from 'react';

const Styles = {
  reviewWrap: css`
    display: flex;
    margin: 1.5rem 0;
  `,
  acountImage: css`
    width:60px;
    height: 60px;
    border-radius: 50%;
    background-color: #777777;
  `,
  reviewDetail: css`
    width: 100%;
    margin-left: 1rem;
  `,
  nameWrap: css`
    height: 60px;
    margin-bottom: 0.8rem;
  `,
  name: css`
    font-size: 1.3rem;
    margin: 0;

  `,
  nameBottom: css`
    font-size: 1.1rem;
    margin: 0.4rem 0 0 0;

  `,
  scores: css`
    display: flex;
    margin-bottom: 0.8rem;
  `,
  p: css`
    padding: 0;
    margin: 0;
  `,
}

const ShowReview = ({ review, id }) => {
  // console.log(review)
  // console.log(id)

  const reviewFilter = () => {
    if (review.movieId === id) {
      return (
        <section>
          <div css={Styles.reviewWrap}>
            <div css={Styles.acountImage}></div>
            <div css={Styles.reviewDetail}>
              <div css={Styles.nameWrap}>
                <p css={Styles.name}>{review.authorName}</p>
                <p css={Styles.nameBottom}>@Mai</p>
              </div>
              <div css={Styles.scores}>
                <p css={Styles.p}>★★★★★{review.score}</p>
                <p css={Styles.p}>❤︎ 2</p>
                <p css={Styles.p}>■ 2</p>
              </div>
              <p css={Styles.p}>{review.comment}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum do</p>
            </div>
          </div>
          <hr></hr>
        </section>
      )
    }
  }

  return (
    <div>
      {reviewFilter()}
    </div>
  );
};

export default ShowReview;
