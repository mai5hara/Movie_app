import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SECCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_PLOT_SUCCESS,
  SEARCH_PLOT_FAILURE,
  CREATE_REVIEW,
  GET_REVIEW,
  COUNT_VIEWNUMBER,
  COUNT_CLIPNUMBER,
  GET_VIEWCOUNT,
  GET_CLIPCOUNT,
} from '../actions/movieActions';

const initState = {
  loading: false,
  movies: [],
  review: {},
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
      const movies = action.payload.movies;
      return {
        ...state,
        loading: false,
        movies,
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
        movieDetail,
      };
    case SEARCH_PLOT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_REVIEW:
      const reviews = action.payload.review
      return {
        ...state,
        reviews,
      };
    case GET_REVIEW:
      const review = action.payload.review
      return {
        ...state,
        review
      }
    case GET_VIEWCOUNT:
      const totalViewCount = action.payload
      return {
        ...state,
        totalViewCount
      }
    case GET_CLIPCOUNT:
      const totalClipCount = action.payload
      return {
        ...state,
        totalClipCount
      }
    case COUNT_VIEWNUMBER:
      const viewCount = action.payload.viewCount
      return {
        ...state,
        viewCount,
      };
    case COUNT_CLIPNUMBER:
      const clipCount = action.payload.clipCount
      return {
        ...state,
        clipCount,
      };
    default:
      return state;
  }
};

export default movieReducer;
