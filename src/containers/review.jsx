import { connect } from 'react-redux';
import Review from '../pages/Review';
import {
  postReview,
  getReview
} from '../store/actions/movieActions';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    selectReview: state.movie.review || {},
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postReview: (review) => dispatch(postReview(review)),
    getReview: (movieId) => dispatch(getReview(movieId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Review);