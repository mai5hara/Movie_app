/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';
import MovieDetailBtns from '../molecules/MovieDetailBtns';

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
}

const DetailWrap = styled.div`
  margin-left: 3rem;
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
  clipToggle,
  viewHandleClick,
  clipHandleClick,
  totalViewCount,
  totalClipCount,
  id,
  auth
}) => {
  console.log(totalViewCount)
  console.log(id)
  return (
    <div css={Styles.infoSection}>
      <h2>{movieDetail.Title}</h2>
      <p>★★★★★ 5.0</p>
      <div css={Styles.detailWrap}>
        <div>
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
            totalClipCount={totalClipCount}
          // clipToggle={clipToggle}
          />
        </DetailWrap>
      </div>
    </div>
  )
}

export default MovieInfo;