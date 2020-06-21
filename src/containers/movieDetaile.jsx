import { connect } from 'react-redux';
import { fetchPlot } from '../store/actions/movieActions';
import MovieDetails from '../pages/MovieDetails';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(state);
  return {
    movieDetail: state.movie.movieDetail,
    id: ownProps.match.params.id,
    reviews: state.firestore.ordered.reviews,
    viewCounts: state.firestore.ordered.viewCounter,
    viewCountsId: state.firestore.ordered.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlot: (movieDetail) => dispatch(fetchPlot(movieDetail)),
    // viewCounter: (viewCount) => dispatch(viewCounter(viewCount)),
    test: (viewCount) => dispatch(test(viewCount)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'reviews' }, { collection: 'viewCounter' }])
)(MovieDetails);