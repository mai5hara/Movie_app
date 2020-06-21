import React from 'react';

const ViewBtn = ({ viewHandleClick, totalView }) => {
  return (
    <button id="viewCount" onClick={viewHandleClick}>
      View {totalView}
    </button>
  )
}

export default ViewBtn;