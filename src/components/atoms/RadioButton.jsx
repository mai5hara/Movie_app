/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const btnWrap = ({ active }) => css({
  display: 'block',
  position: 'relative',
  color: active ? '#c71585' : '#d3d3d3',
  height: '100px',
  width: '35%',
  float: 'left',
  '&:hover .css-1p2x7dq-RadioBtnStyle': {
    border: '5px solid #ffc0cb'
  }
})

const inputFielt = css({
  position: 'absolute',
  visibility: 'hidden',
})

const labelText = ({ active }) => css({
  display: 'block',
  position: 'relative',
  padding: '29px 25px 25px 54px',
  zIndex: 9,
  margin: '10px auto',
  height: '30px',
  cursor: 'pointer',
  transition: 'all 0.25s linear',
  '&:hover': {
    color: active ? '#c71585' : '#ffc0cb',
  },
})

const radioBtn = ({ active }) => css({
  display: 'block',
  position: 'absolute',
  border: `5px solid ${active ? '#c71585' : '#d3d3d3'}`,
  borderRadius: '100%',
  height: '23px',
  width: '25px',
  top: '30px',
  zIndex: 5,
  transition: 'border 0.25s linear',
})

const inside = ({ active }) => css({
  width: '15px',
  height: '15px',
  background: active ? '#c71585' : '#d3d3d3',
  display: active ? 'block' : 'none',
  position: 'absolute',
  borderRadius: '100%',
  width: '15px',
  top: '4px',
  left: '5px',
  margin: 'auto',
  transition: 'background 0.25s linear',
  WebkitTransition: 'background 0.25s linear',
})

const RadioButton = ({ defaultChecked, onClick, type, id, label, idNum, active, value }) => {

  const radioBtnWrap = btnWrap({ active })
  const radiolabelText = labelText({ active })
  const radioBtnBorder = radioBtn({ active })
  const radioBtninside = inside({ active })

  return (
    <li css={radioBtnWrap}>
      <input
        type={type}
        value={value}
        id={id}
        checked={defaultChecked}
        onClick={onClick}
        css={inputFielt}
      />
      <label css={radiolabelText} for={idNum}>{label}</label>
      <div css={radioBtnBorder} >
        <div css={radioBtninside}></div>
      </div>
    </li>
  )


}

export default RadioButton;