import React, { useEffect, useState, useRef } from 'react';
import ScoreReviews from '../components/organisms/ScoreReviews';
import MovieInfo from '../components/organisms/MovieInfo';

const MovieDetails = ({
  movieDetail,
  id,
  fetchPlot,
  reviews,
  viewCounts,
  clipCounts,
  auth,
  viewCounter,
  clipCounter
}) => {
  // console.log(id)
  // console.log(viewCounts)
  console.log(clipCounts)

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
    viewCounts && viewCounts.map((count) =>
      (count.movieId === id && count.isToggle === true ? totalViewCount++ : null));
    return totalViewCount
  };

  const totalViewCount = totalView();

  let totalClip = () => {
    let totalClipCount = 0;
    clipCounts && clipCounts.map((count) =>
      (count.movieId === id && count.isToggle === true ? totalClipCount++ : null));
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
    e.preventDefault();
    setClipToggle({
      ...clipToggle,
      isToggle: !clipToggle.isToggle,
    });
  };

  useEffect(() => {
    fetchPlot(id);
    isFirstRender.current = true;
    console.log('loaded!');
  }, []);

  const isFirstRender = useRef(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
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
      // clipToggle={clipToggle}
      />
      <ScoreReviews reviews={reviews} id={id} />
    </div>
  );
};

export default MovieDetails;
