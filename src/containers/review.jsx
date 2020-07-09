import { connect } from 'react-redux';
import Review from '../pages/Review';
import { postReview } from '../store/actions/movieActions';
import { getReview } from '../store/actions/movieActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    reviews: state.firestore.ordered.reviews,
    selectReview: state.movie.review,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postReview: (review) => dispatch(postReview(review)),
    getReview: (movieId) => dispatch(getReview(movieId))
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Review);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'reviews' }])
)(Review);