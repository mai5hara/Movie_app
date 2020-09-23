import { connect } from 'react-redux';
import {
  fetchMovies,
  viewCounter,
  getViewCount,
  getClipCount,
  getReview,
  getLikeCount,
  getCountObj
} from '../store/actions/movieActions';
import movieList from '../pages/MovieList';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    loading: state.movie.loading,
    auth: state.firebase.auth.uid,
    totalClipCount: state.movie.totalClipCount,
    totalViewCount: state.movie.totalViewCount,
    totalLikeCount: state.movie.totalLikeCount,
    viewCountObj: state.movie.viewCountObj,
    clipCountObj: state.movie.clipCountObj,
    reviewObj: state.movie.reviewObj
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
    getCountObj: (movieIdObj) => dispatch(getCountObj(movieIdObj))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (movieList);