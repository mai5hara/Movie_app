/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const ReviewInputStyle = ({
  handleChange,
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
          onChange={handleChange('comment')}
          defaultValue={review.comment}
        // value={selectReview.comment}
        >
        </textarea> :
        <input css={Styles.input} type={type} id={id} onChange={handleChange('tags')} />
      }
    </div>
  )
}

export default ReviewInputStyle;