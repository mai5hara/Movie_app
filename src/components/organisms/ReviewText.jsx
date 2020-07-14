/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import ReviewInputStyle from '../molecules/ReviewInputStyle';
import ReviewTextArea from '../molecules/ReviewTexarea';
import ReviewSpoiler from '../molecules/ReviewSpoiler';
import ReviewScore from '../molecules/ReviewScore';

const Styles = {
  reviewtext: css`
    text-align: left;
  `,
}

const pStyle = css({
  color: '#777777',
  paddingBottom: 0,
})

const inputCommentStyle = css({
  width: '100%',
  height: '200px',
  boxSizing: 'border-box',
  padding: '1rem',
  outlineStyle: 'none',
  userSelect: 'none',
  background: '#f5f5f5',
  borderRadius: '10px',
  borderStyle: 'none'
})

const inputTagStyle = css(
  inputCommentStyle, {
  height: '10px',
})

const ReviewText = ({ handleChange, review, handleChangeCheck, selectReview }) => {
  console.log(selectReview)
  console.log(selectReview.comment)

  return (
    <div css={Styles.reviewtext}>
      <ReviewScore inputTitle="Score" inputFunc={handleChange} review={review} selectReview={selectReview} type="range" id="score" />
      <ReviewInputStyle pStyle={pStyle} inputStyle={inputCommentStyle} review={review} selectReview={selectReview} inputTitle="Review Comment" inputFunc={handleChange} type="text" id="comment" />
      <ReviewSpoiler review={review} handleChangeCheck={handleChangeCheck} selectReview={selectReview} />
      <ReviewInputStyle pStyle={pStyle} inputStyle={inputTagStyle} review={review} selectReview={selectReview} inputTitle="Tags" inputFunc={handleChange} type="text" id="tag" />
    </div>
  )
}

export default ReviewText;