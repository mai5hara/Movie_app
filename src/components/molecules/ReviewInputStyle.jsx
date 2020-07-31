/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const titleStyle = css({
  color: '#777777',
  paddingBottom: 0,
})

const inputComment = css({
  width: '100%',
  height: '200px',
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

const map = {
  commentStyle: inputComment,
  tagStyle: inputTag
}

const ReviewInputStyle = ({
  handleChange,
  inputTitle,
  id,
  type,
  review,
  style,
  multiline
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
          onChange={handleChange('comment')}
          defaultValue={review.comment}
        /> :
        <input css={btnStyle} type={type} id={id} onChange={handleChange('tags')} />
      }
    </div>
  )
}

export default ReviewInputStyle;