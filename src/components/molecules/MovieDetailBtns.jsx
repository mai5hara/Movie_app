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

  return (
    <div css={Styles.btnWrap}>
      <Button
        text={`View ${viewClipCountStatus.showTotalViewCount}`}
        id="viewCount"
        onClick={viewHandleClick}
        style={viewClipCountStatus.ownViewCount ? 'countActive' : 'countDefault'}
      />
      <Button
        text={`Clip ${viewClipCountStatus.showTotalClipCount}`}
        id="clipCount"
        onClick={clipHandleClick}
        style={viewClipCountStatus.ownClipCount ? 'countActive' : 'countDefault'}
      />
      <Link to={'/' + id + '/review'} key={id} css={Styles.linkBtn}>
        <Button text="Review" style={ownReview === undefined ? 'reviewDefault' : 'activeReviewBtn'} />
      </Link>
    </div>
  )
};

export default MovieDetailBtns;