/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import RadioBtnStyle from '../atoms/RadioBtnStyle';

const btnWrap = css({
  display: 'block',
  position: 'relative',
  height: 'auto',
  width: '500px',
})

const btnList = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overFlow: 'auto',
  display: 'flex'
})

const ReviewRadioBtn = ({ review, handleChange }) => {

  return (
    <div css={btnWrap}>
      <ul css={btnList}>
        <RadioBtnStyle
          type="radio"
          id="condition"
          label="Public"
          idNum="condition"
          value="public"
          review={review}
          defaultChecked={review.condition === undefined || review.condition === "public"}
          onChange={handleChange('condition')}
          active={review.condition === "public"}
        />
        <RadioBtnStyle
          type="radio"
          id="condition1"
          label="Private"
          idNum="condition1"
          value="private"
          review={review}
          defaultChecked={review.condition === "private"}
          onChange={handleChange('condition')}
          active={review.condition === "private"}
        />
      </ul>
    </div >
  )
}

export default ReviewRadioBtn;