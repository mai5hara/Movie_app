/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';
import MovieDetailBtns from '../molecules/MovieDetailBtns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Styles = {
  infoSection: css`
    width:70%;
    margin: 0 auto;
  `,
  detailWrap: css`
  display: flex;
  `,
  image: css`
    width: 300px;
  `,
  imageWrap: css`
    display: flex;
  `,
  movieTitle: css`
    margin: 2rem 0 0 0;
  `,
  score: css`
    margin-top: 0.5rem;
  `,
  backLink: css`
    text-decoration: none;
    color: #222222;
    margin-top: 1.5rem;
    &:hover {
      color: #c71585;
    }
  `
}

const DetailWrap = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.div`
  width:100%;
  display: flex;
  margin-bottom: 1.5rem;
`;

const Detail = styled.p`
  width: 15%;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0;
  margin-right: 1rem;
`;

const Detailp = styled.p`
  width:75%;
  margin: 0;
`;

const MovieInfo = ({
  movieDetail,
  viewHandleClick,
  clipHandleClick,
  totalViewCount,
  viewClipCountStatus,
  id,
  ownReview,
  review
}) => {

  const scoreFunc = () => {
    if (review === undefined) {
      return 'No Data'
    } else {
      let arr = []
      const scoreNum = Object.values(review).length;
      let scoreAverage;
      for (let key in review) {
        arr.push(Number(review[key].score))
        scoreAverage = arr.reduce((acc, current) => acc + current) / scoreNum
      }
      return scoreAverage ? Math.round(scoreAverage) + ' Point' : 0 + ' Point'
    }
  }

  const scoreAverage = scoreFunc()

  return (
    <div css={Styles.infoSection}>
      <Link to="/" css={Styles.backLink}><p><FontAwesomeIcon icon={faArrowLeft} /> Back to movie list</p></Link>
      <h2 css={Styles.movieTitle}>{movieDetail.Title}</h2>
      <p css={Styles.score}>★ {scoreAverage}</p>
      <div css={Styles.detailWrap}>
        <div css={Styles.imageWrap}>
          <img
            width="200"
            alt={`The movie title ${movieDetail.Title}`}
            src={movieDetail.Poster}
            css={Styles.image}
          />
        </div>
        <DetailWrap>
          <DetailItem>
            <Detail>Derector</Detail>
            <Detailp>{movieDetail.Director}</Detailp>
          </DetailItem>
          <DetailItem>
            <Detail>Cast</Detail>
            <Detailp>{movieDetail.Actors}</Detailp>
          </DetailItem>
          <DetailItem>
            <Detail>Plot</Detail>
            <Detailp>{movieDetail.Plot}</Detailp>
          </DetailItem>
          <MovieDetailBtns
            viewHandleClick={viewHandleClick}
            clipHandleClick={clipHandleClick}
            id={id}
            totalViewCount={totalViewCount}
            viewClipCountStatus={viewClipCountStatus}
            ownReview={ownReview}
          />
        </DetailWrap>
      </div>
    </div>
  )
}

export default MovieInfo;