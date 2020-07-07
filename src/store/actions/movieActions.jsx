const axios = require('axios');
export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SECCESS = 'SEARCH_MOVIES_SECCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SEARCH_PLOT_SUCCESS = 'SEARCH_PLOT_SUCCESS';
export const SEARCH_PLOT_FAILURE = 'SEARCH_PLOT_FAILURE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const COUNT_VIEWNUMBER = 'COUNT_VIEWNUMBER';
export const COUNT_CLIPNUMBER = 'COUNT_CLIPNUMBER';

export const searchMovieRequest = () => {
  return {
    type: SEARCH_MOVIES_REQUEST,
  };
};

export const searchMovieSuccess = (movies) => {
  console.log(movies);
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
  console.log(movieDetail);
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

export const postReview = (review) => {
  console.log(review);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(profile);
    console.log(authorId);
    console.log(firestore.collection('reviews'))
    firestore
      .collection('reviews')
      .add({
        ...review,
        authorName: profile.name,
        authorId: authorId,
        createdAt: new Date(),
      })
      // .collection('user')
      // .add({
      //   ...review,
      //   authorName: profile.name,
      //   authorId: authorId,
      //   createdAt: new Date(),
      // })
      .then(() => {
        dispatch({ type: CREATE_REVIEW, review });
        console.log(review);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const clipCounter = (clipCount) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  try {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const batch = firestore.batch();
    const userRef = firestore.collection('users').doc(authorId);
    const clipCountRef = firestore.collection('clipCounter').doc(authorId);

    await batch.update((userRef), {
      clipCount: {
        [clipCount.movieId]: clipCount.isToggle
      }
    });
    await batch.set((clipCountRef), {
      ...clipCount,
    })
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
    const viewCountRef = firestore.collection('viewCounter').doc(authorId);

    await batch.update((userRef), {
      viewCount: {
        [viewCount.movieId]: viewCount.isToggle
      }
    });
    await batch.set((viewCountRef), {
      ...viewCount,
    })
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
