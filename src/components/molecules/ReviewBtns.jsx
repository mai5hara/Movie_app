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
  background: '#c71585',
  color: '#ffffff',
  borderStyle: 'none',
  borderRadius: '10px',
  width: '25%',
  height: '3rem',
  userSelect: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background 0.15s linear',
  WebkitTransition: 'background 0.15s linear',
  '&:hover': {
    backgroundColor: '#A30076',
  }
})

const nonValueBtnStyle = css(
  valueBtnStyle, {
  background: '#d3d3d3',
  color: '#ffffff',
  width: '100%',
  cursor: 'pointer',
  transition: 'background 0.15s linear',
  WebkitTransition: 'background 0.15s linear',
  '&:hover': {
    backgroundColor: '#c2c2c2',
  }
})

const ReviewBtns = ({ movieId }) => {

  return (
    <div css={Styles.reviewBtn}>
      <Link to={'/movie/' + movieId} css={Styles.cancellink}>
        <BtnStyle btnText="Cancel" btnStyle={nonValueBtnStyle} />
      </Link>
      <BtnStyle btnText="Publish" btnStyle={valueBtnStyle} />
    </div>
  )
}

export default ReviewBtns;