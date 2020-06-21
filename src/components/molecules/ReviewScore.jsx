import React from 'react';

const ReviewScore = ({ handleChange }) => {
  return (
    <div>
      <p>Score</p>
      <input input type="text" id="score" onChange={handleChange} />
    </div>
  )
}

export default ReviewScore;