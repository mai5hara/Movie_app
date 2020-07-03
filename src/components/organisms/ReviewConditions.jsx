/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReviewSelect from '../molecules/ReviewSelect';
import ReviewSpoiler from '../molecules/ReviewSpoiler';
import ReviewRadioBtn from '../molecules/ReviewRadioBtn';

const ReviewConditions = ({ review, handleChangeRadio, handleChangeCheck, handleChange }) => {
  return (
    <div>
      <ReviewSelect review={review} handleChange={handleChange} />
      <ReviewSpoiler review={review} handleChangeCheck={handleChangeCheck} />
      <ReviewRadioBtn review={review} handleChangeRadio={handleChangeRadio} />
    </div>
  )
}

export default ReviewConditions;