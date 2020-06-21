import React from 'react';

const ClipBtn = ({ clipHandleClick, clipToggle }) => {

  return (
    <button id="clipCount" onClick={clipHandleClick}>
      {/* Clip {clipToggle.clipCount} */}
      Clip
    </button>
  )
}

export default ClipBtn;