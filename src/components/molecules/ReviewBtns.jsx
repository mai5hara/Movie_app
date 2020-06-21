import React from 'react';
import { Link } from 'react-router-dom';
import BtnStyle from '../atoms/BtnStyle';

const ReviewBtns = ({ movieId }) => {

  return (
    <div>
      <Link to={'/movie/' + movieId}>
        <BtnStyle btnText="Publish" />
      </Link>
      <BtnStyle btnText="Cancel" />
    </div>
  )
}

export default ReviewBtns;