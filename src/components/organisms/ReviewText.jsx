/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import ReviewInputStyle from '../molecules/ReviewInputStyle';
import ReviewTextArea from '../molecules/ReviewTexarea';

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

const ReviewText = ({ handleChange }) => {

  return (
    <div css={Styles.reviewtext}>
      <ReviewInputStyle inputTitle="Score" inputFunc={handleChange} type="text" id="score" />
      <ReviewInputStyle pStyle={pStyle} inputStyle={inputCommentStyle} inputTitle="Review Comment" inputFunc={handleChange} type="text" id="comment" />
      <ReviewInputStyle pStyle={pStyle} inputStyle={inputTagStyle} inputTitle="Tags" inputFunc={handleChange} type="text" id="tag" />
    </div>
  )
}

export default ReviewText;