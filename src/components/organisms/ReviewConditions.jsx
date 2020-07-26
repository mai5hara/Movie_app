/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReviewSelect from '../molecules/ReviewSelect';
import ReviewRadioBtn from '../molecules/ReviewRadioBtn';

const wrap = css({
  display: 'flex'
})

const ReviewConditions = ({ review, handleChangeRadio, handleChange }) => {
  return (
    <div>
      <ReviewSelect review={review} handleChange={handleChange} />
      <ReviewRadioBtn review={review} handleChange={handleChange} handleChangeRadio={handleChangeRadio} />
    </div>
  )
}

export default ReviewConditions;