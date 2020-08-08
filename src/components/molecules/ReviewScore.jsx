/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const height = "10px";
const thumbHeight = 20;

// colours
const lowerColor = "#c71585";
const thumbColor = "#ffc0cb";

const rangeSliderRange = css({
  WebkitAppearance: 'none',
  appearance: 'none',
  width: '100%',
  height: height,
  borderRadius: '5px',
  background: '#f5f5f5',
  padding: 0,
  cursor: 'pointer',
  margin: 0,
  '&::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    appearance: 'none',
    width: `${thumbHeight}px`,
    height: `${thumbHeight}px`,
    background: thumbColor,
    borderRadius: '100%',
    cursor: 'pointer',
    transition: 'background .15s ease-in-out',
    '&:hover': {
      background: '#c71585'
    }
  },
  '&::-moz-range-thumb': {
    width: thumbHeight,
    height: thumbHeight,
    border: 0,
    borderRadius: '100%',
    background: thumbColor,
    transition: 'background .15s ease-in-out',
    '&:hover': {
      background: '#c71585'
    }
  },
  '&:active::-webkit-slider-thumb': {
    background: '#c71585'
  },
  '&:focus': {
    outline: 'none',
    '&::-webkit-slider-thumb': {
      boxShadow: '0 0 0 3px #fff, 0 0 0 6px #c71585',
    }
  }
})

const rangeSliderValue = css({
  fontSize: '1.8rem',
  margin: '0 0 0.6rem 0',
  color: lowerColor,
})

const ReviewScore = ({ review, handleChange, type, id }) => {

  return (
    <div>
      <p>Score</p>
      <p css={rangeSliderValue}>{review.score || 0}</p>
      <input
        css={rangeSliderRange}
        onChange={handleChange('score')}
        type={type}
        id={id}
        min="0"
        max="100"
        defaultValue={review.score}
      />
    </div>
  )
}

export default ReviewScore;