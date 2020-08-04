/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import { Redirect } from 'react-router-dom';

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
      <Link to={`/movie/${movieId}`} css={Styles.cancellink}>
        <Button text="Cancel" style="cancelBtn" />
      </Link>
      <Button text="Publish" style="publishBtn" />
    </div>
  )
}

export default ReviewBtns;