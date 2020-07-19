/** @jsx jsx */

import { jsx, css } from '@emotion/core'

export const signInStyle = css({
  display: 'flex',
  padding: '0.8rem 1.8rem',
  borderRadius: '30px',
  borderStyle: 'none',
  backgroundColor: '#e249a2',
  color: '#fff',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '3rem'
})


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