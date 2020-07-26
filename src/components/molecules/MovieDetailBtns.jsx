/** @jsx jsx */

import { jsx, css } from '@emotion/core'
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
  viewClipCountStatus,
  id,
  ownReview
}) => {

  return (
    <div css={Styles.btnWrap}>
      <BtnStyle
        btnText={`View ${viewClipCountStatus.showTotalViewCount}`}
        id="viewCount"
        onClick={viewHandleClick}
        style="countDefault"
        active={viewClipCountStatus.ownViewCount}
      />
      <BtnStyle
        btnText={`Clip ${viewClipCountStatus.showTotalClipCount}`}
        id="clipCount"
        onClick={clipHandleClick}
        style="countDefault"
        active={viewClipCountStatus.ownClipCount}
      />
      <Link to={'/' + id + '/review'} key={id} css={Styles.linkBtn}>
        <BtnStyle btnText="Review" style="reviewDefault" active={ownReview} />
      </Link>
    </div>
  )
};

export default MovieDetailBtns;