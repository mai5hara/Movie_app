import React from 'react';

const ReviewSelect = ({ review, handleChange }) => {
  return (
    <select
      name="record"
      id="record"
      value={review.record}
      onChange={handleChange}
    >
      <option value="-----">--- Select ---</option>
      <option value="theater">Theater</option>
      <option value="DVD/Blueray">DVD/Blueray</option>
      <option value="Netflix">Netflix</option>
    </select>
  )
}

export default ReviewSelect;