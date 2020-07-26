/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import BtnStyle from '../atoms/BtnStyle'

const Styles = {
  btnWrap: css`
    display: flex;
    width: 200px;
    margin: 0  auto;
  `
}

const MovieListBtns = ({
  viewHandleClick,
  clipHandleClick,
  totalViewCount,
  totalClipCount,
  score,
}) => {

  return (
    <div css={Styles.btnWrap}>
      <BtnStyle btnText="View" btnCount={totalViewCount} onClick={viewHandleClick} id="viewCount" />
      <BtnStyle btnText="Clip" btnCount={totalClipCount} onClick={clipHandleClick} id="clipCount" />
      {/* <BtnStyle btnText="Score" btnStyle={movieListStyle} /> */}
    </div>
  )
};

export default MovieListBtns;