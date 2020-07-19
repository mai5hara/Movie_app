import React, { useEffect, useState, useRef } from 'react';
import ScoreReviews from '../components/organisms/ScoreReviews';
import MovieInfo from '../components/organisms/MovieInfo';

const MovieDetails = ({
  movieDetail,
  id,
  fetchPlot,
  reviews,
  viewCounter,
  clipCounter,
  getViewCount,
  getClipCount,
  viewCount,
  clipCount
}) => {

  const [viewToggle, setViewToggle] = useState({
    movieId: id,
    isToggle: false,
  });

  const [clipToggle, setClipToggle] = useState({
    movieId: id,
    isToggle: false,
  });

  let totalView = () => {
    let totalViewCount = 0;

    if (viewCount === undefined) {
      totalViewCount = 0;
    } else {
      viewCount && Object.values(viewCount).forEach(count => count === true ? totalViewCount++ : null)
    }
    return totalViewCount
  };

  const totalViewCount = totalView();

  let totalClip = () => {
    let totalClipCount = 0;

    if (clipCount === undefined) {
      totalClipCount = 0;
    } else {
      clipCount && Object.values(clipCount).forEach(count => count === true ? totalClipCount++ : null)
    }
    return totalClipCount
  };

  const totalClipCount = totalClip();

  const viewHandleClick = (e) => {
    console.log('Clicked!');
    e.preventDefault();
    setViewToggle({
      ...viewToggle,
      isToggle: !viewToggle.isToggle,
    });
    viewCounter(viewToggle);
  };

  const clipHandleClick = (e) => {
    console.log('Clicked!');
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
    getViewCount(id);
    getClipCount(id);
    console.log('loaded!');
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

  return (
    <div>
      <MovieInfo
        viewHandleClick={viewHandleClick}
        clipHandleClick={clipHandleClick}
        totalViewCount={totalViewCount}
        totalClipCount={totalClipCount}
        id={id}
        movieDetail={movieDetail}
      />
      <ScoreReviews reviews={reviews} id={id} />
    </div>
  );
};

export default MovieDetails;
