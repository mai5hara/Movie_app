/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

const btnWrap = css({
  display: 'block',
  position: 'relative',
  margin: '40px auto',
  height: 'auto',
  width: '500px',
  padding: '20px'
})

const ul = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overFlow: 'auto',
  display: 'flex'
})

const list = css({
  display: 'block',
  position: 'relative',
  color: '#AAAAAA',
  height: '100px',
  width: '100%',
  float: 'left',
  '&:hover': {
    radioBtn: {
      border: '5px solid #ffc0cb'
    }
  }
})

const input = css({
  position: 'absolute',
  visibility: 'hidden',
  '&:checked': {
    label: {
      color: 'pink'
    }
  }

})

const label = css({
  display: 'block',
  position: 'relative',
  padding: '25px 25px 25px 80px',
  zIndex: 9,
  margin: '10px auto',
  height: '30px',
  cursor: 'pointer',
  transition: 'all 0.25s linear',
  '&:hover': {
    color: '#ffc0cb',
  },
})

const radioBtn = css({
  display: 'block',
  position: 'absolute',
  border: '5px solid #aaaaaa',
  borderRadius: '100%',
  height: '23px',
  width: '25px',
  top: '30px',
  left: '20px',
  zIndex: 5,
  transition: 'border 0.25s linear',
})

const inside = css({
  width: '15px',
  height: '15px',
  background: '#111111',
  display: 'block',
  position: 'absolute',
  content: '',
  borderRadius: '100%',
  width: '15px',
  top: '4px',
  left: '5px',
  margin: 'auto',
  transition: 'background 0.25s linear',
  WebkitTransition: 'background 0.25s linear',
})

const ReviewRadioBtn = ({ review, handleChangeRadio, InputStyles, listStyles, ulStyles, btnWrapStyles, labelStyles, radioBtnStyle, btnInside }) => {
  console.log(review)
  return (
    <div css={btnWrap}>
      <ul css={ul}>
        <li css={list}>
          <input
            type="radio"
            name="radio"
            id="condition"
            value="public"
            defaultChecked={review.condition === 'public'}
            onChange={handleChangeRadio}
            css={input}
          />
          <label css={label} for="condition">Public</label>
          <div css={radioBtn} ><div css={inside}></div></div>
        </li>
        <li css={list}>
          <input
            type="radio"
            name="radio"
            id="condition1"
            value="private"
            defaultChecked={review.condition === 'private'}
            onChange={handleChangeRadio}
            css={input}
          />
          <label css={label} for="condition1">Private</label>
          <div css={radioBtn}><div css={inside}></div></div>
        </li>
      </ul>
    </div>
  )
}

export default ReviewRadioBtn;