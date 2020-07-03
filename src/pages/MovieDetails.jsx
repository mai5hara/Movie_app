import React, { useEffect, useState, useRef } from 'react';
import ScoreReviews from '../components/organisms/ScoreReviews';
import MovieInfo from '../components/organisms/MovieInfo';
// import viewCounter from '../containers/movieDetaile';

const MovieDetails = ({
  movieDetail,
  id,
  fetchPlot,
  reviews,
  test,
  viewCounts,
  auth,
  viewCountsId,
  viewCounter,
}) => {
  console.log(id)
  const [viewToggle, setViewToggle] = useState({
    movieId: id,
    isToggle: false,
  });

  const [clipToggle, setClipToggle] = useState({
    movieId: id,
    isToggle: false,
    clipCount: 0,
  });

  console.log(viewToggle);

  const totalView =
    viewCounts && viewCounts.reduce((p, x) => p + x.viewCount, 0);

  console.log(totalView);

  useEffect(() => {
    fetchPlot(id);
    isFirstRender.current = true;
    console.log('loaded!');
  }, []);

  const viewHandleClick = (e) => {
    console.log('Clicked!');
    e.preventDefault();
    setViewToggle({
      ...viewToggle,
      isToggle: !viewToggle.isToggle,
      viewCount:
        viewToggle.isToggle === false
          ? viewToggle.viewCount + 1
          : viewToggle.viewCount - 1,
    });
    console.log(viewToggle);
    // viewCounter(viewToggle);
    viewCounter(viewToggle);
  };

  const isFirstRender = useRef(false);
  console.log(isFirstRender);

  // useEffect(() => {
  //   isFirstRender.current = true;
  // },[]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      // viewCounter(viewToggle);
      viewCounter(viewToggle);
      // setViewToggle({ ...viewToggle, viewCountsId });
    }
    // viewCounter(viewToggle);
  }, [viewToggle]);

  const clipHandleClick = (e) => {
    e.preventDefault();
    setClipToggle({
      ...clipToggle,
      isToggle: !clipToggle.isToggle,
      clipCount:
        clipToggle.isToggle === false
          ? clipToggle.clipCount + 1
          : clipToggle.clipCount - 1,
    });
  };
  return (
    <div>
      <MovieInfo
        viewHandleClick={viewHandleClick}
        clipHandleClick={clipHandleClick}
        id={id}
        movieDetail={movieDetail}
        totalView={totalView}
        clipToggle={clipToggle}
      />
      <ScoreReviews reviews={reviews} id={id} />
    </div>
  );
};

export default MovieDetails;
