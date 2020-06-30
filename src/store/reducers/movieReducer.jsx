import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SECCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_PLOT_SUCCESS,
  SEARCH_PLOT_FAILURE,
  CREATE_REVIEW,
  COUNT_VIEWNUMBER
} from '../actions/movieActions';

const initState = {
  loading: false,
  movies: [],
  error: null,
  movieDetail: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_MOVIES_SECCESS:
      console.log(action);
      const movies = action.payload.movies;
      console.log(movies);
      return {
        ...state,
        loading: false,
        movies: movies,
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEARCH_PLOT_SUCCESS:
      const movieDetail = action.payload;
      console.log(movieDetail);
      return {
        ...state,
        loading: false,
        movieDetail: movieDetail,
      };
    case SEARCH_PLOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_REVIEW:
      return {
        ...state,
        review: action.review,
      };
    case COUNT_VIEWNUMBER:
      return {
        ...state,
        viewCount: action.viewToggle,
      };
    default:
      return state;
  }
};

export default movieReducer;
