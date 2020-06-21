import React from 'react';

const BtnStyle = ({ btnText, btnFunc, btnCount, btnType, submit, id }) => {

  return (
    <button type={btnType} id={id} onClick={btnFunc} disabled={submit}>
      {btnText} {btnCount}
    </button>
  )
}

export default BtnStyle;