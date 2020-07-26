/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const RadioBtnStyle = ({ defaultChecked, onChange, type, id, label, idNum, active, value }) => {

  const btnWrap = css({
    display: 'block',
    position: 'relative',
    color: !active ? '#d3d3d3' : '#c71585',
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
      color: !active ? '#ffc0cb' : '#c71585',
    },
  })

  const radioBtn = css({
    display: 'block',
    position: 'absolute',
    border: `5px solid ${!active ? '#d3d3d3' : '#c71585'}`,
    borderRadius: '100%',
    height: '23px',
    width: '25px',
    top: '30px',
    zIndex: 5,
    transition: 'border 0.25s linear',
  })

  const inside = css({
    width: '15px',
    height: '15px',
    background: !active ? '#d3d3d3' : '#c71585',
    display: !active ? 'none' : 'block',
    position: 'absolute',
    borderRadius: '100%',
    width: '15px',
    top: '4px',
    left: '5px',
    margin: 'auto',
    transition: 'background 0.25s linear',
    WebkitTransition: 'background 0.25s linear',
  })

  return (
    <li css={btnWrap}>
      <input
        type={type}
        value={value}
        id={id}
        defaultChecked={defaultChecked}
        onChange={onChange}
        css={inputFielt}
      />
      <label css={labelText} for={idNum}>{label}</label>
      <div css={radioBtn} >
        <div css={inside}></div>
      </div>
    </li>
  )
}

export default RadioBtnStyle;