import React, { useEffect, useState, useRef } from 'react';
import ShowReview from './ShowReview';
import { Link } from 'react-router-dom';

const MovieDetails = ({
  movieDetail,
  id,
  fetchPlot,
  reviews,
  test,
  viewCounts,
  viewCountsId,
  viewCounter,
}) => {

  const [viewToggle, setViewToggle] = useState({
    movieId: id,
    viewCountsId: '',
    isToggle: false,
    viewCount: 0,
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
    test(viewToggle);
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
      test(viewToggle);
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

  // console.log(movieDetail)
  return (
    <div>
      <h2>{movieDetail.Title}</h2>
      <img
        width="200"
        alt={`The movie title ${movieDetail.Title}`}
        src={movieDetail.Poster}
      />
      <p>{movieDetail.Director}</p>
      <p>{movieDetail.Actors}</p>
      <p>{movieDetail.Plot}</p>
      <div>
        <button id="viewCount" onClick={viewHandleClick}>
          View {totalView}
        </button>
        <button id="clipCount" onClick={clipHandleClick}>
          Clip {clipToggle.clipCount}
        </button>
        <button id="viewCount" onClick={viewHandleClick}>
          test
        </button>
        <button>
          <Link to={'/' + id + '/review'} key={id}>
            Review
          </Link>
        </button>
        <h2>Score ・ Review</h2>
        {reviews &&
          reviews.map((review) => {
            return <ShowReview review={review} />;
          })}
      </div>
    </div>
  );
};

export default MovieDetails;
