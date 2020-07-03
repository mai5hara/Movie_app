/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const ReviewInputStyle = ({ inputFunc, inputTitle, id, type, pStyle, inputStyle }) => {
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
        <textarea css={Styles.input} type={type} id={id} onChange={inputFunc} ></textarea> :
        <input css={Styles.input} type={type} id={id} onChange={inputFunc} />
      }
    </div>
  )
}

export default ReviewInputStyle;