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
    isToggle: false,
  });

  const [clipToggle, setClipToggle] = useState({
    movieId: id,
    isToggle: false,
  });

  let totalView = () => {
    let showTotalViewCount = 0;

    if (totalViewCount === undefined) {
      showTotalViewCount = 0;
    } else {
      totalViewCount && Object.values(totalViewCount).forEach(
        count => count === true ? showTotalViewCount++ : null)
    }
    return showTotalViewCount
  };

  const showTotalViewCount = totalView();

  let totalClip = () => {
    let showTotalClipCount = 0;

    if (totalClipCount === undefined) {
      showTotalClipCount = 0;
    } else {
      totalClipCount && Object.values(totalClipCount).forEach(
        count => count === true ? showTotalClipCount++ : null)
    }
    return showTotalClipCount
  };

  const showTotalClipCount = totalClip();

  const viewHandleClick = (e) => {
    e.preventDefault();
    setViewToggle({
      ...viewToggle,
      isToggle: !viewToggle.isToggle,
    });
    viewCounter(viewToggle);
  };

  const clipHandleClick = (e) => {
    e.preventDefault();
    setClipToggle({
      ...clipToggle,
      isToggle: !clipToggle.isToggle,
    });
    clipCounter(viewToggle);
  };

  useEffect(() => {
    isFirstRender.current = true;
    fetchPlot(id);
    getReview(id);
    getViewCount(id);
    getClipCount(id);
  }, []);

  const isFirstRender = useRef(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      getViewCount(id);
      getClipCount(id);
      viewCounter(viewToggle);
      clipCounter(clipToggle);
    }
  }, [viewToggle, clipToggle]);

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
