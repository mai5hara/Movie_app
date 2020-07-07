/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import React from 'react';
import BtnStyle from '../atoms/BtnStyle'
import { Link } from 'react-router-dom';

const Styles = {
  btnWrap: css`
    display: flex;
    justify-content: space-between;
  `,
  linkBtn: css`
    width: 30%;
  `
}

const btnsStyle = css({
  width: '30%',
  backgroundColor: '#c71585',
  color: '#ffffff',
  borderStyle: 'none',
  borderRadius: '10px',
  height: '3rem',
  userSelect: 'none',
  fontSize: '1rem'
})

const viewLinkBtn = css(
  btnsStyle, {
  width: '100%',
})

const MovieDetailBtns = ({
  viewHandleClick,
  clipHandleClick,
  totalViewCount,
  totalClipCount,
  id }) => {
  console.log(id)

  return (
    <div css={Styles.btnWrap}>
      <BtnStyle btnText="View" btnCount={totalViewCount} btnFunc={viewHandleClick} id="viewCount" btnStyle={btnsStyle} />
      <BtnStyle btnText="Clip" btnCount={totalClipCount} btnFunc={clipHandleClick} id="clipCount" btnStyle={btnsStyle} />
      <Link to={'/' + id + '/review'} key={id} css={Styles.linkBtn}>
        <BtnStyle btnText="Review" btnStyle={viewLinkBtn} />
      </Link>
    </div>
  )
};

export default MovieDetailBtns;