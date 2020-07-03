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

const valueBtnStyle = css({
  backgroundColor: '#c71585',
  color: '#ffffff',
  borderStyle: 'none',
  borderRadius: '10px',
  width: '25%',
  height: '3rem',
  userSelect: 'none',
  fontSize: '1rem'
})

const nonValueBtnStyle = css(
  valueBtnStyle, {
  backgroundColor: '#d3d3d3',
  color: '#222222',
  width: '100%',
})

const ReviewBtns = ({ movieId }) => {

  return (
    <div css={Styles.reviewBtn}>
      <BtnStyle btnText="Publish" btnStyle={valueBtnStyle} />
      <Link to={'/movie/' + movieId} css={Styles.cancellink}>
        <BtnStyle btnText="Cancel" btnStyle={nonValueBtnStyle} />
      </Link>
    </div>
  )
}

export default ReviewBtns;