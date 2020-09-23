/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Warning from '../../assets/images/warning.png';

const checkboxContainer = css({
  display: 'flex',
  width: '25%'
})

const checkboxWrap = css({
  position: 'relative',
  width: '100%',
  height: '3rem'
})

const checkBoxField = css({
  WebkitAppearance: 'none',
  position: 'absolute',
  width: '100%',
  margin: 0,
  padding: 0
})

const btnWrap = ({ active }) => css({
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  background: active ? '#ff6347' : '#d3d3d3',
  cursor: 'pointer',
  color: '#ffffff',
  textAlign: 'center',
  borderRadius: '10px',
  padding: '0.5rem',
  transition: 'background 0.15s linear',
  WebkitTransition: 'background 0.15s linear',
  '&:hover': {
    background: active ? '#ff6347' : '#ffe4b5'
  }
})

const warning = css({
  width: '30px',
  marginRight: '1rem'
})

const btnText = css({
  margin: '0',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center'
})

const ReviewSpoiler = ({ review, handleChangeCheck, active }) => {
  const btnStyle = btnWrap({ active })

  return (
    <div css={checkboxContainer}>
      <label css={checkboxWrap}>
        <input
          type="checkbox"
          name="spoiler"
          id="spoiler"
          defaultChecked={false}
          checked={review}
          onChange={handleChangeCheck}
          css={checkBoxField}
        />
        <span css={btnStyle}>
          <img src={Warning} css={warning} />
          <p css={btnText}>Spoiler</p>
        </span>
      </label>
    </div >
  )
}

export default ReviewSpoiler;