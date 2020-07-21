/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { movieDetailStyle, viewLinkBtn, movieDetailClickedStyle } from '../atoms/BtnStyle';
import BtnStyle from '../atoms/BtnStyle'
import { Link } from 'react-router-dom';

const Styles = {
  btnWrap: css`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  `,
  linkBtn: css`
    width: 30%;
  `
}

const MovieDetailBtns = ({
  viewHandleClick,
  clipHandleClick,
  totalViewCount,
  totalClipCount,
  ownViewStatus,
  ownClipStatus,
  id }) => {

  return (
    <div css={Styles.btnWrap}>
      <BtnStyle
        btnText="View"
        id="viewCount"
        btnCount={totalViewCount}
        btnFunc={viewHandleClick}
        btnStyle={ownViewStatus === true ? movieDetailClickedStyle : movieDetailStyle}
      />
      <BtnStyle
        btnText="Clip"
        id="clipCount"
        btnCount={totalClipCount}
        btnFunc={clipHandleClick}
        btnStyle={ownClipStatus === true ? movieDetailClickedStyle : movieDetailStyle}
      />
      <Link to={'/' + id + '/review'} key={id} css={Styles.linkBtn}>
        <BtnStyle btnText="Review" btnStyle={viewLinkBtn} />
      </Link>
    </div>
  )
};

export default MovieDetailBtns;