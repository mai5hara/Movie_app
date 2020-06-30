import { connect } from 'react-redux';
import { fetchMovies, viewCounter } from '../store/actions/movieActions';
import movieList from '../pages/MovieList';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(state);
  return {
    error: state.movie.error,
    movies: state.movie.movies,
    loading: state.movie.loading,
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    fetchMovies: (searchValue) => dispatch(fetchMovies(searchValue)),
    viewCounter: (viewToggle) => dispatch(viewCounter(viewToggle))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'reviews' }, { collection: 'viewCounter' }]))
  (movieList);