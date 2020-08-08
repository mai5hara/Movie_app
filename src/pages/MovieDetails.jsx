import React, { useEffect, useState, useRef } from 'react';
import ScoreReviews from '../components/organisms/ScoreReviews';
import MovieInfo from '../components/organisms/MovieInfo';

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
  getReview,
  ownReview,
  review
}) => {

  const userId = auth.uid

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
    <div>
      <MovieInfo
        viewHandleClick={viewHandleClick}
        clipHandleClick={clipHandleClick}
        totalViewCount={totalViewCount}
        id={id}
        movieDetail={movieDetail}
        viewClipCountStatus={viewClipCountStatus}
        ownReview={ownReview}
      />
      <ScoreReviews id={id} review={review} />
    </div>
  );
};

export default MovieDetails;
