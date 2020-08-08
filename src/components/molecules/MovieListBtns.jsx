/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Button from '../atoms/Button'

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
      <Button text="View" count={totalViewCount} onClick={viewHandleClick} id="viewCount" />
      <Button text="Clip" count={totalClipCount} onClick={clipHandleClick} id="clipCount" />
    </div>
  )
};

export default MovieListBtns;