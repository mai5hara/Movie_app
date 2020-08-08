/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import ReviewInputStyle from '../molecules/ReviewInputStyle';
import ReviewSpoiler from '../molecules/ReviewSpoiler';
import ReviewScore from '../molecules/ReviewScore';

const textArea = css({
  textAlign: 'left'
})

const ReviewText = ({ handleChange, review, handleChangeCheck }) => {

  return (
    <div css={textArea}>
      <ReviewScore
        inputTitle="Score"
        type="range"
        id="score"
        review={review}
        handleChange={handleChange}
      />
      <ReviewInputStyle
        inputTitle="Review Comment"
        type="text"
        id="comment"
        style="commentStyle"
        multiline={true}
        review={review}
        handleChange={handleChange}
      />
      <ReviewSpoiler
        review={review}
        handleChange={handleChange}
        handleChangeCheck={handleChangeCheck}
      />
      <ReviewInputStyle
        inputTitle="Tags"
        type="text"
        id="tag"
        style="tagStyle"
        multiline={false}
        review={review}
        handleChange={handleChange}
      />
    </div>
  )
}

export default ReviewText;