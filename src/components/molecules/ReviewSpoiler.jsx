import React from 'react';

const ReviewSpoiler = ({ review, handleChangeCheck }) => {
  return (
    <div>
      <input
        type="checkbox"
        name="spoiler"
        id="spoiler"
        defaultChecked={review.spoiler}
        onChange={handleChangeCheck}
      />
      <label>Spoiler</label>
    </div>
  )
}

export default ReviewSpoiler;