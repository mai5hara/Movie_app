/** @jsx jsx */

import { useState } from 'react';
import { jsx, css } from '@emotion/core'
import SearchBar from '../components/molecules/SearchBar';
import Movie from '../components/organisms/Movie';
import { Link } from 'react-router-dom';

const Styles = {
  home: css`
    width: 100%;
  `,
  head: css`
  background-color: #aaaaaa;
  height: 50vh;
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
  movieWrap: css`
    width: 25%;
    text-decoration: none;
    color: #777777;
    &:hove {
      color: pink;
    }
  `,
}

const MovieList = ({
  error,
  movies,
  loading,
  fetchMovies,
  reviews,
  id,
  auth
}) => {
  console.log(reviews)
  console.log(movies)
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    fetchMovies(searchValue);
    setSearchValue('');
  };

  return (
    <div css={Styles.home}>
      <div css={Styles.head}>
        <div css={Styles.search}>
          <h1>Search your favorite Movies</h1>
          <form onSubmit={callSearchFunction}>
            <SearchBar handleChange={handleChange} />
          </form>
        </div>
        <div css={Styles.image}>image</div>
      </div>
      <div css={Styles.movieList}>
        {loading && !error ? (
          <span>...loading</span>
        ) : error ? (
          <div>{error}</div>
        ) : (
              movies.map((movie) => (
                reviews.map((review) => {
                  console.log(movie)
                  console.log(review)
                  if (review.id === movie.imdbID) {
                    for (let key in review) {
                      console.log(review[key].score)
                      // console.log(review[1])
                      // const score = review[key].score
                      // console.log(score)
                      return (
                        <Link
                          to={'/movie/' + movie.imdbID}
                          key={movie.imdbID}
                          movieId={movie.imdbID}
                          css={Styles.movieWrap}
                        >
                          <Movie
                            movie={movie}
                            // score={score}
                            id={id}
                          />
                        </Link>
                      )
                    }
                  }
                })
              ))
            )}
      </div>
    </div>
  );
};

export default MovieList;
