/** @jsx jsx */

import { jsx, css } from '@emotion/core'

const footerWrap = css({
  backgroundColor: '#24589E',
  width: '100%',
  height: '60px'
})

const footerText = css({
  color: '#ffffff',
  display: 'flex',
  height: '60px',
  justifyContent: 'center',
  alignItems: 'center'
})

const Footer = () => {
  return (
    <div css={footerWrap}>
      <p css={footerText}>Movie Diary</p>
    </div>
  )

};

export default Footer;