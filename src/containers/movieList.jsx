import { connect } from 'react-redux';
import movieList from '../components/MovieList';
// import fetchMoviesAction from '../actions/fetchMovies';
// import {bindActionCreaters} from 'redux';

const mapStateToProps = state => {
    return {
        error: state.movieList.error,
        movies: state.movieList.movies,
        loading:state.movieList.loading
    }
}

// const mapDispatchToProps = dispatch => bindActionCreaters({
//         fetchMovies: fetchMoviesAction
// }, dispatch)

export default connect (mapStateToProps)(movieList)