/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Warning from '../../assets/images/warning.png';

const checkboxContainer = css({
  display: 'flex',
  marginTop: '0.4rem'
})

const checkboxWrap = css({
  display: 'flex',
  position: 'relative',
  width: '70px',
  height: '70px'
})

const checkBoxField = css({
  WebkitAppearance: 'none',
  position: 'absolute',
  width: '100%',
  margin: 0,
  padding: 0
})

const btnWrap = css({
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

const btnWrapClicked = css(
  btnWrap, {
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

const btnText = css({
  margin: '0.2rem 0 0 0',
  fontSize: '0.9rem',
})

const ReviewSpoiler = ({ review, handleChangeCheck }) => {

  return (
    <div css={checkboxContainer}>
      <label css={checkboxWrap}>
        <input
          type="checkbox"
          name="spoiler"
          id="spoiler"
          defaultChecked={false}
          checked={review.spoiler}
          onChange={handleChangeCheck('spoiler')}
          css={checkBoxField}
        />
        <span css={review.spoiler === undefined || review.spoiler === false ? btnWrap : btnWrapClicked}>
          <img src={Warning} css={warning} />
          <p css={btnText}>Spoiler</p>
        </span>
      </label>
    </div >
  )
}

export default ReviewSpoiler;