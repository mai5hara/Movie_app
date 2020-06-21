import { connect } from 'react-redux';
import { fetchMovies } from '../store/actions/movieActions';
import movieList from '../pages/MovieList';

const mapStateToProps = state => {
  return {
    error: state.movie.error,
    movies: state.movie.movies,
    loading: state.movie.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(movieList)