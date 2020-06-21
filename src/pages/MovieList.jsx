import React, { useState } from 'react';
import SearchBar from '../components/molecules/SearchBar';
import Movie from '../components/organisms/Movie';
import { Link } from 'react-router-dom';

const MovieList = ({ error, movies, loading, fetchMovies }) => {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    fetchMovies(searchValue);
    setSearchValue('');
  };

  return (
    <div>
      <form onSubmit={callSearchFunction}>
        <SearchBar handleChange={handleChange} />
      </form>

      {loading && !error ? (
        <span>...loading</span>
      ) : error ? (
        <div>{error}</div>
      ) : (
            movies.map((movie) => (
              <Link
                to={'/movie/' + movie.imdbID}
                key={movie.imdbID}
                movieId={movie.imdbID}
              >
                <Movie movie={movie} />
              </Link>
            ))
          )}
    </div>
  );
};

export default MovieList;
