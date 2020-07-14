/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const ReviewInputStyle = ({
  inputFunc,
  inputTitle,
  id,
  type,
  pStyle,
  inputStyle,
  selectReview,
  review
}) => {

  const Styles = {
    p: css`
    ${pStyle}
  `,
    input: css`
    ${inputStyle}
  `,
  }

  return (
    <div>
      <p css={Styles.p}>{inputTitle}</p>
      {id === 'comment' ?
        <textarea
          css={Styles.input}
          type={type} id={id}
          onChange={inputFunc}
          defaultValue={selectReview.comment}
          value={review.comment}
        >
        </textarea> :
        <input css={Styles.input} type={type} id={id} onChange={inputFunc} />
      }
    </div>
  )
}

export default ReviewInputStyle;