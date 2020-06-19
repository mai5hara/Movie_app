import { connect } from 'react-redux';
import Review from '../components/Review';
import { postReview } from '../store/actions/movieActions';

const mapDispatchToProps = (dispatch) => {
  return {
    postReview: (review) => dispatch(postReview(review)),
  };
};

export default connect(null, mapDispatchToProps)(Review);