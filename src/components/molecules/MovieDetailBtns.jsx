/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Button from '../atoms/Button'
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

  console.log(viewClipCountStatus.ownViewCount)
  console.log(viewClipCountStatus.ownClipCount)
  console.log(ownReview)

  return (
    <div css={Styles.btnWrap}>
      <Button
        text={`View ${viewClipCountStatus.showTotalViewCount}`}
        id="viewCount"
        onClick={viewHandleClick}
        style="countDefault"
        active={viewClipCountStatus.ownViewCount === undefined || !viewClipCountStatus.ownViewCount ? false : true}
      />
      <Button
        text={`Clip ${viewClipCountStatus.showTotalClipCount}`}
        id="clipCount"
        onClick={clipHandleClick}
        style="countDefault"
        active={viewClipCountStatus.ownClipCount === undefined || !viewClipCountStatus.ownClipCount ? false : true}
      />
      <Link to={'/' + id + '/review'} key={id} css={Styles.linkBtn}>
        <Button text="Review" style="reviewDefault" active={ownReview === undefined || !ownReview ? false : true} />
      </Link>
    </div>
  )
};

export default MovieDetailBtns;