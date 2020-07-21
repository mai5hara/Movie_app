/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import calendarImg from '../../assets/images/calendar.png';

const conditionsWrap = css({
  display: 'flex',
})

const selectWrap = css({
  overflow: 'hidden',
  width: '40%',
  height: '36px',
  // margin: '2rem auto',
  textAlign: 'center',
  borderRadius: '5px',
  border: '1px solid #777777',
  background: '#ffffff',
  marginLeft: '5rem'
})

const dropDown = css({
  position: 'relative',
  top: '40%',
  left: '90%',
  width: 0,
  height: 0,
  padding: 0,
  borderLeft: '6px solid transparent',
  borderRight: '6px solid transparent',
  borderTop: '6px solid #777777',
})

const select = css({
  width: '100%',
  // padding: '10px 38px 10px 10px',
  lineHeight: '40px',
  color: '#777777',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  boxShadow: 'none',
  appearance: 'none',
})

const label = css({
  position: 'relative',
  display: 'inline-block',
  width: '200px',
  height: 'auto',
  border: '1px solid #777777',
  borderRadius: '5px',
  '&::before': {
    background: 'red',
  }
})

const dateInput = css({
  position: 'relative',
  padding: '0 10px',
  width: '243px',
  height: '36px',
  border: 0,
  background: 'transparent',
  boxSizing: 'border-box',
  fontSize: '14px',
  color: '#999',
  outline: 'none',
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none'
  },
  '&::-webkit-clear-button': {
    WebkitAppearance: 'none'
  },
  '&::-webkit-calendar-picker-indicator': {
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: 0,
    width: '36px',
    height: '36px',
    background: 'transparent',
    color: 'transparent',
    cursor: 'pointer'
  },
})

const calendar = css({
  position: 'absolute',
  // content: '',
  top: 0,
  // right: '-43px',
  width: '65%',
  marginLeft: '0.45rem',
  height: '36px',
  // background: 'blue',
  borderRadius: '5px',
  backgroundImage: `url(${calendarImg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})

const imageWrap = css({
  position: 'absolute',
  // content: '',
  top: 0,
  right: '-43px',
  width: '36px',
  height: '36px',
  background: '#c71585',
  borderRadius: '5px',
})

const ReviewSelect = ({ review, handleChange, handleChangeCheck, selectReview }) => {
  console.log(selectReview.record)
  console.log(review)

  return (
    <div css={conditionsWrap}>
      <label css={label}>
        <div css={imageWrap}><span css={calendar}></span></div>
        <input onChange={handleChange('date')} id="date" type="date" css={dateInput} defaultValue={review.date} />
        {/* <input onChange={handleChange('date')} id="date" type="date" css={dateInput} /> */}

      </label>
      <div css={selectWrap}>
        <span css={dropDown}></span>
        <select
          name="record"
          id="record"
          selectedValue={review.record}
          defaultValue={review.record}
          value={review.record}
          onChange={handleChange('record')}
          css={select}
        >
          <option value="-----">--- Select ---</option>
          <option value="theater">Theater</option>
          <option value="DVD/Blueray">DVD/Blueray</option>
          <option value="Netflix">Netflix</option>
        </select>
      </div>
    </div>
  )
}

export default ReviewSelect;