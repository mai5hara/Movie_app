import React from 'react';

const ReviewInputStyle = ({ inputFunc, inputTitle, id, type }) => {
  return (
    <div>
      <p>{inputTitle}</p>
      <input type={type} id={id} onChange={inputFunc} />
    </div>
  )
}

export default ReviewInputStyle;