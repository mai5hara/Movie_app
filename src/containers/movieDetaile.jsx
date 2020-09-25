import { connect } from 'react-redux';
import {
  fetchPlot,
  viewCounter,
  clipCounter,
  getClipCount,
  getViewCount,
  getReview,
  getSelectReview,
  getLikeCount,
  getComment
} from '../store/actions/movieActions';
import MovieDetails from '../pages/MovieDetails';
import { compose } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {
    movieDetail: state.movie.movieDetail,
    id: ownProps.match.params.id,
    auth: state.firebase.auth.uid,
    totalClipCount: state.movie.totalClipCount,
    ownClipCount: state.movie.ownClipCount,
    totalViewCount: state.movie.totalViewCount,
    ownViewCount: state.movie.ownViewCount,
    review: state.movie.review,
    ownReview: state.movie.ownReview,
    ownLikeCount: state.movie.ownLikeCount,
    totalLikeCount: state.movie.totalLikeCount,
    reviewComments: state.movie.reviewComments,
    totalCommentCount: state.movie.totalCommentCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlot: (movieDetail) => dispatch(fetchPlot(movieDetail)),
    viewCounter: (viewCount) => dispatch(viewCounter(viewCount)),
    clipCounter: (clipCount) => dispatch(clipCounter(clipCount)),
    getViewCount: (movieId) => dispatch(getViewCount(movieId)),
    getClipCount: (movieId) => dispatch(getClipCount(movieId)),
    getReview: (movieId) => dispatch(getReview(movieId)),
    getSelectReview: (review) => dispatch(getSelectReview(review)),
    getLikeCount: (review) => dispatch(getLikeCount(review)),
    getComment: (review) => dispatch(getComment(review))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MovieDetails);