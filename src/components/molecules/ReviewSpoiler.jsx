/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Warning from '../../assets/images/warning.png';

const checkboxWrap = css({
  display: 'flex',
  marginTop: '0.4rem'
})

const label = css({
  display: 'flex',
  position: 'relative',
  width: '70px',
  height: '70px'
})

const input = css({
  WebkitAppearance: 'none',
  position: 'absolute',
  width: '100%',
  margin: 0,
  padding: 0
})

const span = css({
  zIndex: 1,
  width: '100%',
  background: '#d3d3d3',
  cursor: 'pointer',
  color: '#ffffff',
  textAlign: 'center',
  borderRadius: '5px',
  padding: '0.5rem',
  transition: 'background 0.15s linear',
  WebkitTransition: 'background 0.15s linear',
  '&:hover': {
    background: '#ffe4b5'
  }
})

const spanClicked = css(
  span, {
  background: '#ff6347',
  color: '#ffffff',
  '&:hover': {
    background: '#ff6347',
    color: '#ffffff',
  }
})

const warning = css({
  width: '30px',
})

const p = css({
  margin: '0.2rem 0 0 0',
  fontSize: '0.9rem',
})

const ReviewSpoiler = ({ review, handleChange, handleChangeCheck, selectReview }) => {
  console.log(review)
  console.log(selectReview)
  return (
    <div css={checkboxWrap}>
      <label css={label}>
        <input
          type="checkbox"
          name="spoiler"
          id="spoiler"
          defaultChecked={false}
          checked={selectReview.spoiler}
          // value={review.spoiler}
          onChange={handleChangeCheck('spoiler')}
          css={input}
        />
        <span css={review === undefined || review.spoiler === false ? span : spanClicked}>
          <img src={Warning} css={warning} />
          <p css={p}>Spoiler</p>
        </span>
      </label>
    </div >
  )
}

export default ReviewSpoiler;