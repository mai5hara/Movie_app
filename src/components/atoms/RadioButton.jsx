/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const btnWrap = css({
  display: 'block',
  position: 'relative',
  color: '#d3d3d3',
  height: '100px',
  width: '35%',
  float: 'left',
  '&:hover .css-1p2x7dq-RadioBtnStyle': {
    border: '5px solid #ffc0cb'
  }
})

const activeBtnWrap = css(
  btnWrap, {
  color: '#c71585'
})

const inputFielt = css({
  position: 'absolute',
  visibility: 'hidden',
})

const labelText = css({
  display: 'block',
  position: 'relative',
  padding: '29px 25px 25px 54px',
  zIndex: 9,
  margin: '10px auto',
  height: '30px',
  cursor: 'pointer',
  transition: 'all 0.25s linear',
  '&:hover': {
    color: '#ffc0cb',
  },
})

const activeLabelText = css(
  labelText, {
  '&:hover': {
    color: '#c71585',
  }
})

const radioBtn = css({
  display: 'block',
  position: 'absolute',
  border: '5px solid #d3d3d3',
  borderRadius: '100%',
  height: '23px',
  width: '25px',
  top: '30px',
  zIndex: 5,
  transition: 'border 0.25s linear',
})

const activeRadioBtn = css(
  radioBtn, {
  border: '5px solid #c71585'
})

const inside = css({
  width: '15px',
  height: '15px',
  background: '#d3d3d3',
  display: 'none',
  position: 'absolute',
  borderRadius: '100%',
  width: '15px',
  top: '4px',
  left: '5px',
  margin: 'auto',
  transition: 'background 0.25s linear',
  WebkitTransition: 'background 0.25s linear',
})

const activeInside = css(
  inside, {
  background: '#c71585',
  display: 'block'
})

const RadioButton = ({ defaultChecked, onChange, type, id, label, idNum, active, value }) => {

  return (
    <li css={active ? activeBtnWrap : btnWrap}>
      <input
        type={type}
        value={value}
        id={id}
        defaultChecked={defaultChecked}
        onChange={onChange}
        css={inputFielt}
      />
      <label css={active ? activeLabelText : labelText} for={idNum}>{label}</label>
      <div css={active ? activeRadioBtn : radioBtn} >
        <div css={active ? activeInside : inside}></div>
      </div>
    </li>
  )
}

export default RadioButton;