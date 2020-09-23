/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const titleStyle = css({
  color: '#777777',
  paddingBottom: 0,
})

const inputComment = css({
  width: '100%',
  height: '200px',
  marginBottom: '0.6rem',
  boxSizing: 'border-box',
  padding: '1rem',
  outlineStyle: 'none',
  userSelect: 'none',
  background: '#f5f5f5',
  borderRadius: '10px',
  borderStyle: 'none'
})

const inputTag = css(
  inputComment, {
  height: '10px',
})

const inputReviewComment = css(
  inputComment, {
  height: '100px'
})

const map = {
  commentStyle: inputComment,
  tagStyle: inputTag,
  inputReviewStyle: inputReviewComment
}

const ReviewInputStyle = ({
  handleChange,
  inputTitle,
  id,
  type,
  style,
  multiline,
  defaultValue
}) => {

  const btnStyle = map[style]

  return (
    <div>
      <p css={titleStyle}>{inputTitle}</p>
      {multiline ?
        <textarea
          css={btnStyle}
          type={type}
          id={id}
          onChange={handleChange}
          defaultValue={defaultValue}
        /> :
        <input css={btnStyle} type={type} id={id} onChange={handleChange} />
      }
    </div>
  )
}

export default ReviewInputStyle;