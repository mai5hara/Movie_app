import { connect } from 'react-redux';
import {
  fetchMovies,
  viewCounter,
  getViewCount,
  getClipCount,
  getReview,
  getLikeCount,
  getViewCountObj
} from '../store/actions/movieActions';
import movieList from '../pages/MovieList';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    error: state.movie.error,
    movies: state.movie.movies,
    loading: state.movie.loading,
    auth: state.firebase.auth,
    totalClipCount: state.movie.totalClipCount,
    totalViewCount: state.movie.totalViewCount,
    totalLikeCount: state.movie.totalLikeCount,
    viewCountObj: state.movie.viewCountObj
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue)),
    viewCounter: (viewToggle) => dispatch(viewCounter(viewToggle)),
    getViewCount: (movieId) => dispatch(getViewCount(movieId)),
    getClipCount: (movieId) => dispatch(getClipCount(movieId)),
    getReview: (movieId) => dispatch(getReview(movieId)),
    getLikeCount: (review) => dispatch(getLikeCount(review)),
    getViewCountObj: (movieIdObj) => dispatch(getViewCountObj(movieIdObj))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (movieList);