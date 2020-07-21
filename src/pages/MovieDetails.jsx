import React, { useEffect, useState, useRef } from 'react';
import ScoreReviews from '../components/organisms/ScoreReviews';
import MovieInfo from '../components/organisms/MovieInfo';

const MovieDetails = ({
  movieDetail,
  id,
  auth,
  fetchPlot,
  reviews,
  viewCounter,
  clipCounter,
  getViewCount,
  getClipCount,
  viewCount,
  clipCount
}) => {

  const userId = auth.uid
  console.log(userId)

  const findOwnReview = () => {
    reviews && reviews.map((review) => {
      console.log(review)
      if (review.id === id) {
        let movieReviews = review
        console.log(movieReviews)
        for (let key in movieReviews) {
          console.log(movieReviews)
          console.log(key)
          if (key === userId) {
            console.log(key)
            return true
          }
        }
      }
      return false
    })
  }
  console.log(findOwnReview())
  const ownReview = findOwnReview()
  console.log(ownReview)

  const findQwnViewStatus = () => {
    for (let key in viewCount) {
      if (key === userId) {
        console.log(viewCount[key])
        return viewCount[key]
      }
    }
  }

  const findQwnClipStatus = () => {
    for (let key in clipCount) {
      if (key === userId) {
        console.log(clipCount[key])
        return clipCount[key]
      }
    }
  }
  console.log(findQwnClipStatus())
  const ownViewStatus = findQwnViewStatus()
  const ownClipStatus = findQwnClipStatus()

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
        ownViewStatus={ownViewStatus}
        ownClipStatus={ownClipStatus}
      />
      <ScoreReviews reviews={reviews} id={id} viewCount={viewCount} />
    </div>
  );
};

export default MovieDetails;
