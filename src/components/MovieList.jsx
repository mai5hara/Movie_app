import React, { Component } from 'react';
import Movie from './Movie';
import Search from './Search';
import { connect } from 'react-redux';
import {fetchMovies, fetchPlot} from '../store/actions/movieActions';
import {Link} from 'react-router-dom';

class MovieList extends Component {
    constructor() {
        super();
        this.callPlotFunction = this.callPlotFunction.bind(this);
    }

    state = {
        searchValue: []
    }

    handleChange = (e) => {
        this.setState({searchValue: e.target.value})
    }

    resetInputField = () => {
        this.setState({searchValue: ''})
    }

    callSearchFunction = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.state.searchValue);
        this.setState({searchValue: ''})
        console.log(this.state)
    }

    callPlotFunction = (movieDetail) => {
        console.log(movieDetail)
        this.props.fetchPlot(movieDetail)
        console.log(this.props.fetchPlot(this))
    }

    render() {
    const {error,movies,loading}  = this.props;
    // const plot = this.props.fetchPlot
    // console.log(plot)
    console.log(this.props.fetchMovie)
    console.log({error,movies,loading})
    console.log(this.state)

        return (
            <div>
                <div>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button 
                        onClick={this.callSearchFunction}
                    >
                        Search
                    </button>
                </div>
                
                {/* <Search /> */}
                {/* { loading && !error ? (
                    <span>...loading</span>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    movies.map(movie => (
                        <Link to={'/movielist/' + movie.imdbID} key={movie.imdbID}>
                            <Movie movie={movie} plot={this.callPlotFunction}/>
                        </Link>
                    ))
                )} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.firestore.ordered.error,
        movies: state.firestore.ordered.movies,
        // loading:state.movieList.loading,
        // movieDetail: state.movieList.movieDetail,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue)),
        fetchPlot: (movieDetail) => dispatch(fetchPlot(movieDetail))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MovieList)