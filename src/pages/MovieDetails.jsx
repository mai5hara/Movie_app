import React, { useEffect, useState } from 'react';
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
  review,
  getSelectReview,
  getLikeCount,
  ownLikeCount,
  totalLikeCount,
}) => {

  console.log(review)
  console.log(totalLikeCount)

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

  let likeCount = 0

  // for (let key in review) {
  //   console.log(key)
  //   for (let totalKey in totalLikeCount) {
  //     console.log(totalKey)
  //     if (review[key] === totalLikeCount[totalKey]) {
  //       console.log(review[key])
  //       console.log()
  //       console.log('Yatta!')
  //     }
  //   }
  // }

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
    // getLikeCount(review);
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
      <ScoreReviews
        key={id}
        movieId={id}
        review={review}
        userId={auth}
        ownLikeCount={ownLikeCount}
        totalLikeCount={totalLikeCount}
        getSelectReview={getSelectReview}
        getLikeCount={getLikeCount}
      />
    </div>
  );
};

export default MovieDetails;
