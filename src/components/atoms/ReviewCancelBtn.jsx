import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCancelBtn = ({ movieId }) => {
  return (
    <Link to={'/movie/' + movieId}>
      <button>Cancel</button>
    </Link>
  )
}

export default ReviewCancelBtn;