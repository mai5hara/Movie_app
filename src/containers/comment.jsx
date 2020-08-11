import { connect } from 'react-redux';
import { getReview } from '../store/actions/movieActions';
import { likeCounter } from '../store/actions/movieActions';
import { getLikeCount } from '../store/actions/movieActions';
import { postComment } from '../store/actions/movieActions';
import Comment from '../pages/Comment';
import { compose } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    selectReview: state.movie.selectReview,
    ownLikeCount: state.movie.ownLikeCount,
    review: state.movie.review,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReview: (movieId) => dispatch(getReview(movieId)),
    likeCounter: (likeCount) => dispatch(likeCounter(likeCount)),
    getLikeCount: (review) => dispatch(getLikeCount(review)),
    postComment: (comment) => dispatch(postComment(comment))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Comment);