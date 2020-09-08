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
  getViewCountObj
}) => {

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    fetchMovies(searchValue);
    setSearchValue('');
  };

  let movieIdList = [];
  let movieViewCountList = {};

  const movieMap = () => {
    movies.map((movie) => {
      movieIdList.push(movie.imdbID)
    });
  }

  getViewCountObj(movieIdList)
  console.log('movieIdList: ', movieIdList)

  // const idList = () => {
  //   movieIdList.forEach(id => {
  //     console.log(id)
  //   })
  // }



  movieMap()



  return (
    <div css={Styles.home}>
      <div css={Styles.head}>
        <div css={Styles.search}>
          <h1>Search your favorite Movies</h1>
          <form onSubmit={callSearchFunction}>
            <SearchBar handleChange={handleChange} />
          </form>
        </div>
      </div>
      <div css={Styles.movieList}>
        {loading && !error ? (
          <span>...loading</span>
        ) : error ? (
          <div>{error}</div>
        ) : (
              movies.map((movie) => (
                <Movie
                  movie={movie}
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
