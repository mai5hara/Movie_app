import { connect } from 'react-redux';
import { fetchMovies, viewCounter } from '../store/actions/movieActions';
import movieList from '../pages/MovieList';
import { compose } from 'redux';

const mapStateToProps = (state) => {

  return {
    error: state.movie.error,
    movies: state.movie.movies,
    loading: state.movie.loading,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue)),
    viewCounter: (viewToggle) => dispatch(viewCounter(viewToggle))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (movieList);