import React, { useState } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { fetchMovies } from '../store/actions/movieActions';
import { Link } from 'react-router-dom';

const MovieList = ({error, movies, loading, fetchMovies}) => {

    const [searchValue, setSearchValue] = useState([])
    console.log(searchValue)

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        fetchMovies(searchValue);
        setSearchValue('')
    }

    return (
        <div>
            <form onSubmit={callSearchFunction}>
                <input 
                    type="text"
                    onChange={handleChange}
                />
                <button>Search</button>
            </form>
                
            { loading && !error ? (
                <span>...loading</span>
            ) : error ? (
                <div>{error}</div>
            ) : (
                movies.map(movie => (
                    <Link to={'/movielist/' + movie.imdbID} key={movie.imdbID}>
                        <Movie movie={movie}/>
                    </Link>
                ))
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.movie.error,
        movies: state.movie.movies,
        loading:state.movie.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue)),
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MovieList);