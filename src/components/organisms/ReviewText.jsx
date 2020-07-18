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

const ReviewText = ({ handleChange, review, handleChangeCheck, selectReview, spoilerValue }) => {
  console.log(selectReview)
  console.log(review)
  // console.log(selectReview.comment)

  return (
    <div css={Styles.reviewtext}>
      <ReviewScore inputTitle="Score" type="range" id="score" review={review} selectReview={selectReview} handleChange={handleChange} />
      <ReviewInputStyle inputTitle="Review Comment" type="text" id="comment" pStyle={pStyle} inputStyle={inputCommentStyle} review={review} selectReview={selectReview} handleChange={handleChange} />
      <ReviewSpoiler review={review} handleChange={handleChange} handleChangeCheck={handleChangeCheck} selectReview={selectReview} spoilerValue={spoilerValue} />
      <ReviewInputStyle inputTitle="Tags" type="text" id="tag" pStyle={pStyle} inputStyle={inputTagStyle} review={review} selectReview={selectReview} handleChange={handleChange} />
    </div>
  )
}

export default ReviewText;