/** @jsx jsx */

import { jsx, css } from '@emotion/core'

// export const movieListStyle = css(
//   movieDetailClickedStyle, {
//   borderRadius: '0px',
// })

const BtnStyle = ({ btnText, onClick, btnType, submit, id, style, active }) => {

  const countBtn = css({
    width: '30%',
    background: !active ? '#d3d3d3' : '#c71585',
    color: '#ffffff',
    borderStyle: 'none',
    borderRadius: '10px',
    height: '3rem',
    userSelect: 'none',
    fontSize: '1rem',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s linear',
    '&:hover': {
      background: !active ? '#ffc0cb' : '#c71585',
    }
  })

  const publishBtnStyle = css(
    countBtn, {
    background: '#c71585',
    width: '25%',
    '&:hover': {
      backgroundColor: '#A30076',
    }
  })

  const cancelBtnStyle = css(
    countBtn, {
    background: '#d3d3d3',
    width: '100%',
    '&:hover': {
      backgroundColor: '#c2c2c2',
    }
  })

  const reviewLinkBtn = css(
    countBtn, {
    width: '100%',
  })

  const signBtn = css({
    display: 'flex',
    padding: '0.8rem 1.8rem',
    borderRadius: '30px',
    borderStyle: 'none',
    backgroundColor: '#e249a2',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '3rem'
  })


  const map = {
    countDefault: countBtn,
    reviewDefault: reviewLinkBtn,
    signDefault: signBtn,
    publishBtn: publishBtnStyle,
    cancelBtn: cancelBtnStyle,
  }

  const btnStyle = map[style]

  return (
    <button type={btnType} id={id} onClick={onClick} disabled={submit} css={btnStyle}>
      {btnText}
    </button>
  )
}

export default BtnStyle;