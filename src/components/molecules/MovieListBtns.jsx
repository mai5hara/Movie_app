/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import BtnStyle from '../atoms/BtnStyle'
import { Link } from 'react-router-dom';
import { movieListStyle } from '../atoms/BtnStyle';
import ReviewInputStyle from './ReviewInputStyle';

const Styles = {
  btnWrap: css`
    display: flex;
  `
}

// const btnsStyle = css({
//   width: '30%',
//   backgroundColor: '#c71585',
//   color: '#ffffff',
//   borderStyle: 'none',
//   borderRadius: '10px',
//   height: '3rem',
//   userSelect: 'none',
//   fontSize: '1rem'
// })

// const viewLinkBtn = css(
//   btnsStyle, {
//   width: '100%',
// })

const MovieListBtns = ({
  viewHandleClick,
  clipHandleClick,
  totalViewCount,
  totalClipCount,
  score,
  id }) => {

  console.log(score)

  return (
    <div css={Styles.btnWrap}>
      <BtnStyle btnText="View" btnCount={totalViewCount} btnFunc={viewHandleClick} id="viewCount" btnStyle={movieListStyle} />
      <BtnStyle btnText="Clip" btnCount={totalClipCount} btnFunc={clipHandleClick} id="clipCount" btnStyle={movieListStyle} />
      {/* <Link to={'/' + id + '/review'} key={id} css={Styles.linkBtn}> */}
      <BtnStyle btnText="Score" btnStyle={movieListStyle} />
      {/* </Link> */}
    </div>
  )
};

export default MovieListBtns;