/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const reviewWrap = css({
  display: 'flex',
  margin: '1.5rem 0'
})

const acountImage = css({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#777777'
})

const reviewDetail = css({
  width: '100%',
  marginLeft: '1rem'
})

const nameWrap = css({
  height: '60px',
  marginbottom: '0.8rem'
})

const authorName = css({
  fontSize: '1.3rem',
  margin: '0'
})

const accountName = css({
  fontSize: '1.1rem',
  margin: '0.4rem 0 0 0'
})

const scores = css({
  display: 'flex',
  marginBottom: '0.8rem'
})

const buttons = css({
  padding: '0',
  margin: '0'
})

const ShowReview = ({ review }) => {

  return (
    <section>
      <div css={reviewWrap}>
        <div css={acountImage}></div>
        <div css={reviewDetail}>
          <div css={nameWrap}>
            <p css={authorName}>{review.authorName}</p>
            <p css={accountName}>@Mai</p>
          </div>
          <div css={scores}>
            <p css={buttons}>{review.score}</p>
            <p css={buttons}>❤︎ 2</p>
            <p css={buttons}>■ 2</p>
          </div>
          <p css={buttons}>{review.comment}</p>
        </div>
      </div>
      <hr></hr>
    </section>
  )
};

export default ShowReview;
