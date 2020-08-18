import { connect } from 'react-redux';
import {
  getReview,
  likeCounter,
  getLikeCount,
  postComment,
  getComment,
  deleteComment
} from '../store/actions/movieActions';
import Comment from '../pages/Comment';
import { compose } from 'redux';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    auth: state.firebase.auth.uid,
    id: ownProps.match.params.id,
    selectReview: state.movie.selectReview,
    ownLikeCount: state.movie.ownLikeCount,
    review: state.movie.review,
    reviewComments: state.movie.reviewComments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReview: (movieId) => dispatch(getReview(movieId)),
    likeCounter: (likeCount) => dispatch(likeCounter(likeCount)),
    getLikeCount: (review) => dispatch(getLikeCount(review)),
    postComment: (comment) => dispatch(postComment(comment)),
    getComment: (comment) => dispatch(getComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Comment);