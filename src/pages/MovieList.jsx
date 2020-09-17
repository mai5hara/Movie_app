/** @jsx jsx */

import { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core'
import SearchBar from '../components/molecules/SearchBar';
import Movie from '../components/organisms/Movie';
import topImage from '../assets/images/topimage.png';

const Styles = {
  home: css`
    width: 100%;
  `,
  head: css`
  background-color: #aaaaaa;
  height: 100vh;
  display: flex
  `,
  search: css`
    width: 50%;
    height: 50%;
    margin-left: 10rem;
  `,
  image: css`
    width: 50%;
    height: auto;
    background-color: #ffffff;
  `,
  movieList: css`
    width:80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  `,
}

const MovieList = ({
  error,
  movies,
  loading,
  fetchMovies,
  totalClipCount,
  totalViewCount,
  getViewCount,
  getClipCount,
  totalLikeCount,
  getLikeCount,
  getCountObj,
  viewCountObj,
  clipCountObj,
  reviewObj
}) => {

  useEffect(() => {
    let movieIdArr = [];
    const movieMap = async () => {
      await movies.map((movie) => {
        movieIdArr.push(movie.imdbID)
      });
      getCountObj(movieIdArr)
    }
    movieMap();
  }, [movies])



  return (
    <div css={Styles.home}>
      <div css={Styles.head}>
        <div css={Styles.search}>
          <h1>Search your favorite Movies</h1>
          <SearchBar fetchMovies={fetchMovies} />
        </div>
      </div>
      <div css={Styles.movieList}>
        {loading && !error ? (
          <span>...loading</span>
        ) : error ? (
          <div>{error}</div>
        ) : (
              movies.map((movie, index) => (
                <Movie
                  key={index}
                  movie={movie}
                  viewCountObj={viewCountObj}
                  clipCountObj={clipCountObj}
                  reviewObj={reviewObj}
                  getViewCount={getViewCount}
                  getClipCount={getClipCount}
                  totalClipCount={totalClipCount}
                  totalViewCount={totalViewCount}
                  getLikeCount={getLikeCount}
                />
              ))
            )}
      </div>
    </div >
  );
};

export default MovieList;
