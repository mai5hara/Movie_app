/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom';
import BtnStyle from '../atoms/BtnStyle';
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
      <Link to={'/movie/' + movieId} css={Styles.cancellink}>
        <BtnStyle btnText="Cancel" style="cancelBtn" />
      </Link>
      <BtnStyle btnText="Publish" style="publishBtn" />
    </div>
  )
}

export default ReviewBtns;