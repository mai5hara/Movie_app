/** @jsx jsx */

import { jsx, css } from '@emotion/core'

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
      <div btnText="View" btnCount={totalViewCount} onClick={viewHandleClick} id="viewCount" >View</div>
      <div btnText="Clip" btnCount={totalClipCount} onClick={clipHandleClick} id="clipCount" >Clip</div>
      <div btnText="Score"  >Score</div>
    </div>
  )
};

export default MovieListBtns;