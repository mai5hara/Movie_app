/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useEffect, useState } from 'react';
import ScoreReviews from '../components/organisms/ScoreReviews';
import MovieInfo from '../components/organisms/MovieInfo';
import Footer from '../components/atoms/Footer';

const movieDetailWrap = css({
  fontFamily: 'Gill sans'
})

const MovieDetails = ({
  movieDetail,
  id,
  auth,
  fetchPlot,
  viewCounter,
  clipCounter,
  getViewCount,
  getClipCount,
  ownClipCount,
  ownViewCount,
  totalClipCount,
  totalViewCount,
  totalCommentCount,
  getReview,
  ownReview,
  review,
  getSelectReview,
  getLikeCount,
  ownLikeCount,
  totalLikeCount,
  reviewComments,
  getComment,

}) => {
  const [viewToggle, setViewToggle] = useState({
    movieId: id,
    isToggle: true,
  });

  const [clipToggle, setClipToggle] = useState({
    movieId: id,
    isToggle: true,
  });

  const counter = (count) => {
    if (!count) {
      return 0
    }
    const res = Object.values(count).filter(value => value)
    return res.length
  }

  const showTotalViewCount = counter(totalViewCount)
  const showTotalClipCount = counter(totalClipCount)

  const viewHandleClick = (e) => {
    e.preventDefault();
    setViewToggle({
      ...viewToggle,
      isToggle: !viewToggle.isToggle,
    });
    viewCounter(viewToggle);
    getViewCount(id);
  };

  const clipHandleClick = (e) => {
    e.preventDefault();
    setClipToggle({
      ...clipToggle,
      isToggle: !clipToggle.isToggle,
    });
    clipCounter(clipToggle);
    getClipCount(id);
  };

  useEffect(() => {
    fetchPlot(id);
    getReview(id);
    getViewCount(id);
    getClipCount(id);
  }, []);

  const viewClipCountStatus = {
    showTotalClipCount,
    showTotalViewCount,
    ownViewCount,
    ownClipCount
  }

  return (
    <div css={movieDetailWrap}>
      <MovieInfo
        viewHandleClick={viewHandleClick}
        clipHandleClick={clipHandleClick}
        totalViewCount={totalViewCount}
        id={id}
        movieDetail={movieDetail}
        viewClipCountStatus={viewClipCountStatus}
        ownReview={ownReview}
        review={review}
      />
      <ScoreReviews
        key={id}
        movieId={id}
        review={review}
        userId={auth}
        ownLikeCount={ownLikeCount}
        totalLikeCount={totalLikeCount}
        getSelectReview={getSelectReview}
        getLikeCount={getLikeCount}
        getComment={getComment}
        totalCommentCount={totalCommentCount}
      />
      <Footer />
    </div>
  );
};

export default MovieDetails;
