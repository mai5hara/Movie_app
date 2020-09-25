import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SECCESS,
  SEARCH_PLOT_SUCCESS,
  SEARCH_PLOT_FAILURE,
  CREATE_REVIEW,
  GET_OWNREVIEW,
  GET_REVIEW,
  GET_SELECTREVIEW,
  COUNT_VIEWNUMBER,
  COUNT_CLIPNUMBER,
  GET_OWNCLIPCOUNT,
  GET_TOTALCLIPCOUNT,
  GET_OWNVIEWCOUNT,
  GET_TOTALVIEWCOUNT,
  GET_OWNLIKECOUNT,
  GET_LIKECOUNT,
  COUNT_LIKENUMBER,
  CREATE_COMMENT,
  GET_COMMENT,
  DELETE_COMMENT,
  GET_VIEWCOUNTOBJ,
  GET_CLIPCOUNTOBJ,
  GET_REVIEWOBJ,
  GET_TOTALCOMMENTCOUNT

} from '../actions/movieActions';

const initState = {
  loading: false,
  movies: [],
  review: {},
  error: null,
  movieDetail: [],
  viewCountObj: {},
  clipCountObj: {},
  reviewObj: {}
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
    case CREATE_COMMENT:
      const comments = action.payload
      return {
        ...state,
        comments
      }
    case GET_COMMENT:
      const reviewComments = action.payload
      return {
        ...state,
        reviewComments
      }
    case DELETE_COMMENT:
      const deleteComment = action.payload
      return {
        ...state,
        deleteComment
      }
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
    case GET_SELECTREVIEW:
      const selectReview = action.payload
      return {
        ...state,
        selectReview
      }
    case GET_OWNCLIPCOUNT:
      const ownClipCount = action.payload
      return {
        ...state,
        ownClipCount
      }
    case GET_TOTALCOMMENTCOUNT:
      const totalCommentCount = action.payload
      return {
        ...state,
        totalCommentCount
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
    case GET_VIEWCOUNTOBJ:
      const viewCountObj = action.payload
      return {
        ...state,
        viewCountObj
      }
    case GET_CLIPCOUNTOBJ:
      const clipCountObj = action.payload
      return {
        ...state,
        clipCountObj
      }
    case GET_REVIEWOBJ:
      const reviewObj = action.payload
      return {
        ...state,
        reviewObj
      }
    case GET_OWNLIKECOUNT:
      const ownLikeCount = action.payload
      return {
        ...state,
        ownLikeCount
      }
    case GET_LIKECOUNT:
      const totalLikeCount = action.payload
      return {
        ...state,
        totalLikeCount
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
    case COUNT_LIKENUMBER:
      const likeCount = action.payload.likeCount
      return {
        ...state,
        likeCount,
      };
    default:
      return state;
  }
};

export default movieReducer;
