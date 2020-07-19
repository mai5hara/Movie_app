const axios = require('axios');
export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SECCESS = 'SEARCH_MOVIES_SECCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SEARCH_PLOT_SUCCESS = 'SEARCH_PLOT_SUCCESS';
export const SEARCH_PLOT_FAILURE = 'SEARCH_PLOT_FAILURE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const GET_REVIEW = 'GET_REVIEW';
export const COUNT_VIEWNUMBER = 'COUNT_VIEWNUMBER';
export const COUNT_CLIPNUMBER = 'COUNT_CLIPNUMBER';
export const GET_VIEWCOUNT = 'GET_VIEWCOUNT';
export const GET_CLIPCOUNT = 'GET_CLIPCOUNT';

export const searchMovieRequest = () => {
  return {
    type: SEARCH_MOVIES_REQUEST,
  };
};

export const searchMovieSuccess = (movies) => {
  return {
    type: SEARCH_MOVIES_SECCESS,
    payload: { movies },
  };
};

export const searchMovieFeilure = (error) => {
  return {
    type: SEARCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const searchPlotSuccess = (movieDetail) => {
  return {
    type: SEARCH_PLOT_SUCCESS,
    payload: movieDetail,
  };
};

export const searchPlotFailure = (error) => {
  return {
    type: SEARCH_PLOT_FAILURE,
    payload: error,
  };
};

export const setViewCounter = (viewCount) => {
  return {
    type: COUNT_VIEWNUMBER,
    payload: { viewCount }
  };
};

export const setClipCounter = (clipCount) => {
  return {
    type: COUNT_CLIPNUMBER,
    payload: { clipCount }
  };
};

export const setPostReview = (review) => {
  return {
    type: CREATE_REVIEW,
    payload: { review }
  };
};

export const setGetReview = (review) => {
  return {
    type: GET_REVIEW,
    payload: review
  }
}

export const setGetViewCount = (totalCount) => {
  return {
    type: GET_VIEWCOUNT,
    payload: totalCount
  }
}

export const setGetClipCount = (totalCount) => {
  return {
    type: GET_CLIPCOUNT,
    payload: totalCount
  }
}

export const postReview = (reviews) => (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(reviews);
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;
  const batch = firestore.batch();
  const userRef = firestore.collection('users').doc(authorId);
  const reviewsRef = firestore.collection('reviews').doc(reviews.movieId);

  batch.set((userRef), {
    review: {
      [reviews.movieId]: {
        authorName: profile.name,
        authorId: authorId,
        createdAt: new Date(),
        ...reviews,
      }
    }
  }, { merge: true });
  batch.set((reviewsRef), {
    [authorId]: {
      authorId,
      authorName: profile.name,
      createdAt: new Date(),
      ...reviews,
    }
  }, { merge: true })
  try {
    batch.commit().then(console.log('done'));
    dispatch(setPostReview(reviews));
  } catch (error) {
    console.log(error)
  }
};

export const getReview = (movieId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(movieId)
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  console.log(authorId)
  try {
    const reviewRef = firestore.collection('reviews').doc(movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      dispatch(setGetReview(reviewDoc.data()[authorId]))

      return reviewDoc.data()[authorId]
    } else {
      console.log('No such document!')
      dispatch(setGetReview({}))
    }
  } catch (error) {
    console.log(error)
  }
};

export const getViewCount = (movieId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  console.log(movieId)

  try {
    const reviewRef = firestore.collection('viewCounter').doc(movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      dispatch(setGetViewCount(reviewDoc.data()))
    } else {
      console.log('No such document!')
      dispatch(setGetViewCount(undefined))
    }
  } catch (error) {
    console.log(error)
  }
}

export const getClipCount = (movieId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  console.log('clipcount')

  try {
    const reviewRef = firestore.collection('clipCounter').doc(movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      dispatch(setGetClipCount(reviewDoc.data()))
    } else {
      console.log('No such document!')
      dispatch(setGetClipCount(undefined))
    }
  } catch (error) {
    console.log(error)
  }
}

export const clipCounter = (clipCount) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(clipCount)
  try {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const batch = firestore.batch();
    const userRef = firestore.collection('users').doc(authorId);
    const clipCountRef = firestore.collection('clipCounter').doc(clipCount.movieId);

    await batch.set((userRef), {
      clipCount: {
        [clipCount.movieId]: clipCount.isToggle
      }
    }, { merge: true });
    await batch.set((clipCountRef), {
      [authorId]: clipCount.isToggle
    }, { merge: true });
    await batch.commit().then(console.log('done'));
    return dispatch(setClipCounter(clipCount))
  } catch (error) {
    console.log(error)
  }
};

export const viewCounter = (viewCount) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(viewCount)
  try {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const batch = firestore.batch();
    const userRef = firestore.collection('users').doc(authorId);
    const viewCountRef = firestore.collection('viewCounter').doc(viewCount.movieId);

    await batch.set((userRef), {
      viewCount: {
        [viewCount.movieId]: viewCount.isToggle
      }
    }, { merge: true });
    await batch.set((viewCountRef), {
      [authorId]: viewCount.isToggle
    }, { merge: true })
    await batch.commit().then(console.log('done'));
    return dispatch(setViewCounter(viewCount))
  } catch (error) {
    console.log(error)
  }
};

export const fetchMovies = (value) => async (dispatch) => {
  dispatch(searchMovieRequest());
  try {
    const res = await axios.get(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`);
    const data = res.data;
    return dispatch(searchMovieSuccess(data.Search));
  } catch (error) {
    return dispatch(searchMovieFeilure(error));
  }
};

export const fetchPlot = (targetImdbID) => async (dispatch) => {
  try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=4a3b711b&i=${targetImdbID}`);
    const data = res.data;
    return dispatch(searchPlotSuccess(data));
  } catch (error) {
    return dispatch(dispatch(searchPlotFailure(error)));
  }
};
