/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReviewSelect from '../molecules/ReviewSelect';
import ReviewSpoiler from '../molecules/ReviewSpoiler';
import ReviewRadioBtn from '../molecules/ReviewRadioBtn';

const wrap = css({
  display: 'flex'
})

const ReviewConditions = ({ review, handleChangeRadio, handleChangeCheck, handleChange, selectReview }) => {
  return (
    <div>
      <ReviewSelect review={review} handleChange={handleChange} selectReview={selectReview} />
      {/* <ReviewSpoiler review={review} handleChangeCheck={handleChangeCheck} /> */}
      <ReviewRadioBtn review={review} handleChangeRadio={handleChangeRadio} selectReview={selectReview} />
    </div>
  )
}

export default ReviewConditions;