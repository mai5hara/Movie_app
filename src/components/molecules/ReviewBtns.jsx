/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

const Styles = {
  reviewBtn: css`
    display: flex;
    justify-content: space-between;
  `,
  cancellink: css`
    width: 25%;
  `,
}

const ReviewBtns = ({ movieId }) => {

  return (
    <div css={Styles.reviewBtn}>
      <Link to={`/movies/${movieId}`} css={Styles.cancellink}>
        <Button text="Cancel" style="cancelBtn" />
      </Link>
      <Button text="Publish" style="publishBtn" />
    </div>
  )
}

export default ReviewBtns;