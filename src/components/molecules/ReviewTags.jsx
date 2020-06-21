import React from 'react';

const ReviewTags = ({ handleChange }) => {
  return (
    <div>
      <p>Tags</p>
      <input input type="text" id="tag" onChange={handleChange} />
    </div>
  )
}

export default ReviewTags;