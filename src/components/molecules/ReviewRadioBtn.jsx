import React from 'react';

const ReviewRadioBtn = ({ review, handleChangeRadio }) => {
  return (
    <div>
      <input
        type="radio"
        name="radio"
        id="condition"
        value="public"
        defaultChecked={review.condition === 'public'}
        onChange={handleChangeRadio}
      />
      <label>Public</label>
      <input
        type="radio"
        name="radio"
        id="condition"
        value="private"
        defaultChecked={review.condition === 'private'}
        onChange={handleChangeRadio}
      />
      <label>Private</label>
    </div>
  )
}

export default ReviewRadioBtn;