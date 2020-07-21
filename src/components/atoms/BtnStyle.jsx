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

export const movieDetailClickedStyle = css({
  width: '30%',
  background: '#c71585',
  color: '#ffffff',
  borderStyle: 'none',
  borderRadius: '10px',
  height: '3rem',
  userSelect: 'none',
  fontSize: '1rem',
  outline: 'none',
  cursor: 'pointer',
})

export const movieDetailStyle = css(
  movieDetailClickedStyle, {
  background: '#d3d3d3',
  transition: 'background 0.25s linear',
  '&:hover': {
    background: '#ffc0cb',
  }
})

export const viewLinkBtn = css(
  movieDetailStyle, {
  width: '100%',
})

export const movieListStyle = css(
  movieDetailClickedStyle, {
  borderRadius: '0px',
  width: '100%'
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