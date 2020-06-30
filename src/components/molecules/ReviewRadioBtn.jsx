/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const ReviewRadioBtn = ({ review, handleChangeRadio, InputStyles, listStyles, ulStyles, btnWrapStyles, labelStyles, radioBtnStyle, btnInside }) => {
  const Styles = {
    input: css`
      ${InputStyles}
    `,
    list: css`
      ${listStyles}
    `,
    ul: css`
      ${ulStyles}
    `,
    btnWrap: css`
      ${btnWrapStyles}
    `,
    label: css`
      ${labelStyles}
    `,
    check: css`
      ${radioBtnStyle}
    `,
    inside: css`
      ${btnInside}
    `
  }

  return (
    <div css={Styles.btnWrap}>
      <ul css={Styles.ul}>
        <li css={Styles.list}>
          <input
            type="radio"
            name="radio"
            id="condition"
            value="public"
            defaultChecked={review.condition === 'public'}
            onChange={handleChangeRadio}
            css={Styles.input}
          />
          <label css={Styles.label}>Public</label>
          <div css={Styles.check}></div>
        </li>
        <li css={Styles.list}>
          <input
            type="radio"
            name="radio"
            id="condition"
            value="private"
            defaultChecked={review.condition === 'private'}
            onChange={handleChangeRadio}
            css={Styles.input}
          />
          <label css={Styles.label}>Private</label>
          <div css={Styles.check}><div css={Styles.inside}></div></div>
        </li>
      </ul>
    </div>
  )
}

export default ReviewRadioBtn;