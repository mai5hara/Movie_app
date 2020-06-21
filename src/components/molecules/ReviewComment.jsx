import React from 'react';

const ReviewComment = ({ handleChange }) => {
  return (
    <div>
      <p>Review Comment</p>
      <input input type="text" id="comment" onChange={handleChange} />
    </div>
  )
}

export default ReviewComment;