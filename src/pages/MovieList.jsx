/** @jsx jsx */

import { useEffect } from 'react';
import { jsx, css } from '@emotion/core'
import SearchBar from '../components/molecules/SearchBar';
import Movie from '../components/organisms/Movie';
import topImage from '../imgs/top_image.jpg';
import error from '../imgs/error.png';

const Styles = {
  home: css`
    width: 100%;
    font-family: Gill sans;
  `,
  head: css`
    background-color: #aaaaaa;
    height: 100vh;
    background-image: url(${topImage});
    margin-top: -4rem;
  `,
  headText: css`
    position: absolute;
    color: #A30076;
    top: 30%;
    left: 8rem;
    white-space: pre-line;
    font-size: 4rem;
  `,
  movieList: css`
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  `,
  movieWrap: css`
    width:80%;
    margin: 0 auto;
  `,
  movieTotalNum: css`
    text-align: center;
    margin: 2rem 0;
    font-size: 1.2rem;
  `,
  errorText: css`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  `,
  errorImg: css`
    width: 30%;
    margin: 0 auto;
    display: inherit;
  `
}

const MovieList = ({
  movies,
  auth,
  loading,
  fetchMovies,
  getCountObj,
  viewCountObj,
  clipCountObj,
  reviewObj
}) => {

  const movieNum = movies ? movies.length : 0

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

  const text = 'Write memory\nfor Your\nFavorite Movies'

  return (
    <div css={Styles.home}>
      <div css={Styles.head}>
        <p css={Styles.headText}>{text}</p>
      </div>
      <div css={Styles.movieWrap}>
        <SearchBar fetchMovies={fetchMovies} />
        <p css={Styles.movieTotalNum}>{movieNum === 0 ? 'Search your favorite movie!' : `Search result ${movieNum} movies`}</p>
        <div css={Styles.movieList}>
          {loading && !movies ? (
            <span>...loading</span>
          ) : !movies ? (
            <div>
              <p css={Styles.errorText}>Search again!</p>
              <img src={error} css={Styles.errorImg} />
            </div>
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
      </div>
    </div >
  );
};

export default MovieList;
