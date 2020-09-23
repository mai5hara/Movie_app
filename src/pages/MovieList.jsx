/** @jsx jsx */

import { useEffect } from 'react';
import { jsx, css } from '@emotion/core'
import SearchBar from '../components/molecules/SearchBar';
import Movie from '../components/organisms/Movie';

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
  movies,
  auth,
  loading,
  fetchMovies,
  totalClipCount,
  totalViewCount,
  getViewCount,
  getClipCount,
  getLikeCount,
  getCountObj,
  viewCountObj,
  clipCountObj,
  reviewObj
}) => {

  useEffect(() => {
    let movieIdArr = [];
    const movieMap = async () => {
      if (movies) {
        await movies.map((movie) => {
          movieIdArr.push(movie.imdbID)
        });
      }
      return getCountObj(movieIdArr)
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
        {loading && !movies ? (
          <span>...loading</span>
        ) : !movies ? (
          <div>Search again</div>
        ) : (
              movies.map((movie, index) => (
                <Movie
                  key={index}
                  movie={movie}
                  auth={auth}
                  viewCountObj={viewCountObj}
                  clipCountObj={clipCountObj}
                  reviewObj={reviewObj}
                />
              ))
            )}
      </div>
    </div >
  );
};

export default MovieList;
