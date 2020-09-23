/** @jsx jsx */

import { jsx, css } from '@emotion/core';

let countBtn = ({ active }) => css({
  width: '30%',
  background: active ? '#c71585' : '#d3d3d3',
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
    background: active ? '#c71585' : '#ffc0cb',
  }
})

const publishBtnStyle = ({ active }) => css(
  countBtn({ active }), {
  background: '#c71585',
  width: '25%',
  '&:hover': {
    backgroundColor: '#A30076',
  }
})

const cancelBtnStyle = ({ active }) => css(
  countBtn({ active }), {
  background: '#d3d3d3',
  width: '100%',
  '&:hover': {
    backgroundColor: '#c2c2c2',
  }
})

const reviewLinkBtn = ({ active }) => css(
  countBtn({ active }), {
  width: '100%',
  backgroung: active ? '#c71585' : '#d3d3d3',
})

const signBtn = () => css({
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
  cancelBtn: cancelBtnStyle
}

const Button = ({ text, onClick, btnType, submit, id, style, active }) => {

  const btnStyle = map[style]({ active })

  return (
    <button type={btnType} id={id} onClick={onClick} disabled={submit} css={btnStyle}>
      {text}
    </button>
  )
}

export default Button;