import React from 'react';
import MovieDetailBtns from '../molecules/MovieDetailBtns';

const MovieInfo = ({
  movieDetail,
  clipToggle,
  viewHandleClick,
  clipHandleClick,
  totalView, id
}) => {

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
      <MovieDetailBtns
        viewHandleClick={viewHandleClick}
        clipHandleClick={clipHandleClick}
        id={id}
        totalView={totalView}
        clipToggle={clipToggle}
      />
    </div>
  )
}

export default MovieInfo;