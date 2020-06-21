import React from 'react';
import { Link } from 'react-router-dom';

const ReviewBtn = ({ id }) => {
  return (
    <button>
      <Link to={'/' + id + '/review'} key={id}>
        Review
      </Link>
    </button>
  )
}

export default ReviewBtn;