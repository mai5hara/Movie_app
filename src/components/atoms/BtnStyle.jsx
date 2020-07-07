/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const BtnStyle = ({ btnText, btnFunc, btnCount, btnType, submit, id, btnStyle }) => {
  const Styles = {
    btn: css`
    ${btnStyle}
    `
  }

  return (
    <button type={btnType} id={id} onClick={btnFunc} disabled={submit} css={Styles.btn}>
      {btnText} {btnCount}
    </button>
  )
}

export default BtnStyle;