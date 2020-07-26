import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SECCESS,
  SEARCH_MOVIES_FAILURE,
  SEARCH_PLOT_SUCCESS,
  SEARCH_PLOT_FAILURE,
  CREATE_REVIEW,
  GET_OWNREVIEW,
  GET_REVIEW,
  COUNT_VIEWNUMBER,
  COUNT_CLIPNUMBER,
  GET_OWNCLIPCOUNT,
  GET_TOTALCLIPCOUNT,
  GET_OWNVIEWCOUNT,
  GET_TOTALVIEWCOUNT,
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
    case GET_OWNREVIEW:
      const ownReview = action.payload
      return {
        ...state,
        ownReview
      }
    case GET_REVIEW:
      const review = action.payload
      return {
        ...state,
        review
      }
    case GET_OWNCLIPCOUNT:
      const ownClipCount = action.payload
      return {
        ...state,
        ownClipCount
      }
    case GET_TOTALCLIPCOUNT:
      const totalClipCount = action.payload
      return {
        ...state,
        totalClipCount
      }
    case GET_OWNVIEWCOUNT:
      const ownViewCount = action.payload
      return {
        ...state,
        ownViewCount
      }
    case GET_TOTALVIEWCOUNT:
      const totalViewCount = action.payload
      return {
        ...state,
        totalViewCount
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
