import React, { Component } from 'react';
import Movie from './Movie';
import Search from './Search';
import { connect } from 'react-redux';
import {fetchMovies, fetchPlot} from '../actions/movieActions';


class MovieList extends Component {

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

    callPlotFunction = (id) => {
        this.props.fetchPlot(id)
    }

    render() {
    const {error,movies,loading,id}  = this.props;
    // const plot = this.props.fetchPlot
    // console.log(plot)
    console.log(this.props.fetchMovie)
    console.log({error,movies,loading,id})
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
                { loading && !error ? (
                    <span>...loading</span>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} plot={this.callPlotFunction(id)}/>
                    ))
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.movieList.error,
        movies: state.movieList.movies,
        loading:state.movieList.loading,
        id: state.movieList.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue)),
        fetchPlot: (id) => dispatch => dispatch(fetchPlot(id))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(MovieList)