/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

const btnWrap = css({
  display: 'block',
  position: 'relative',
  height: 'auto',
  width: '500px',
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
  color: '#d3d3d3',
  height: '100px',
  width: '35%',
  float: 'left',
  // radioBtn: {
  '&:hover .css-ycxl5w-ReviewRadioBtn': {
    border: '5px solid #ffc0cb'
    // }
  }

})

const input = css({
  position: 'absolute',
  visibility: 'hidden',
})

const label = css({
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

const inside = css({
  width: '15px',
  height: '15px',
  background: '#d3d3d3',
  display: 'none',
  position: 'absolute',
  // content: '',
  borderRadius: '100%',
  width: '15px',
  top: '4px',
  left: '5px',
  margin: 'auto',
  transition: 'background 0.25s linear',
  WebkitTransition: 'background 0.25s linear',

})

const checkedInside = css(
  inside, {
  background: '#c71585',
  display: 'block',
})

const checkedRadioBtn = css(
  radioBtn, {
  border: '5px solid #c71585',
})

const checkedList = css(
  list, {
  color: '#c71585',
})

const checkedLabel = css(
  label, {
  '&:hover': {
    color: '#c71585'
  }
})

const ReviewRadioBtn = ({ review, handleChange, handleChangeRadio, selectReview }) => {
  console.log(review)
  console.log(selectReview)

  // const defaultChecked = () => {
  //   if (selectReview.condition === 'public' || selectReview === undefined) {
  //     return 'public'
  //   } else if (selectReview.condition === 'private') {
  //     return 'private'
  //   }
  // }

  return (
    <div css={btnWrap}>
      <ul css={ul}>
        <li css={review === undefined || review.condition === 'public' ? checkedList : list}>
          <input
            type="radio"
            name="radio"
            id="condition"
            // value="public"
            // defaultValue={selectReview.condition === 'public'}
            defaultChecked={selectReview.condition === 'public'}
            // checked={selectReview.condition === 'public'}
            onChange={handleChange('condition')}
            css={input}
          />
          <label css={review === undefined || review.condition === 'public' ? checkedLabel : label} for="condition">Public</label>
          <div css={review === undefined || review.condition === 'public' ? checkedRadioBtn : radioBtn} >
            <div css={review === undefined || review.condition === 'public' ? checkedInside : inside}></div>
          </div>
        </li>
        <li css={review === undefined || review.condition === 'private' ? checkedList : list}>
          <input
            type="radio"
            name="radio"
            id="condition1"
            // value="private"
            // defaultValue={selectReview.condition === 'private'}
            defaultChecked={selectReview.condition === 'private'}
            // checked={selectReview.condition === 'private'}
            onChange={handleChange('condition')}
            css={input}
          />
          <label css={review === undefined || review.condition === 'private' ? checkedLabel : label} for="condition1">Private</label>
          <div css={review === undefined || review.condition === 'private' ? checkedRadioBtn : radioBtn}>
            <div css={review === undefined || review.condition === 'private' ? checkedInside : inside}></div>
          </div>
        </li>
      </ul>
    </div >
  )
}

export default ReviewRadioBtn;