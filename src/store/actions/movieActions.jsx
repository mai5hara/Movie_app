const axios = require('axios');
export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SECCESS = 'SEARCH_MOVIES_SECCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SEARCH_PLOT_SUCCESS = 'SEARCH_PLOT_SUCCESS';
export const SEARCH_PLOT_FAILURE = 'SEARCH_PLOT_FAILURE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const GET_OWNREVIEW = 'GET_OWNREVIEW';
export const GET_REVIEW = 'GET_REVIEW';
export const GET_SELECTREVIEW = 'GET_SELECTREVIEW';
export const COUNT_VIEWNUMBER = 'COUNT_VIEWNUMBER';
export const COUNT_CLIPNUMBER = 'COUNT_CLIPNUMBER';
export const GET_VIEWCOUNT = 'GET_VIEWCOUNT';
export const GET_OWNCLIPCOUNT = 'GET_OWNCLIPCOUNT';
export const GET_TOTALCLIPCOUNT = 'GET_TOTALCLIPCOUNT';
export const GET_OWNVIEWCOUNT = 'GET_OWNVIEWCOUNT';
export const GET_TOTALVIEWCOUNT = 'GET_TOTALVIEWCOUNT';
export const GET_OWNLIKECOUNT = 'GET_OWNLIKECOUNT';
export const GET_LIKECOUNT = 'GET_LIKECOUNT';
export const COUNT_LIKENUMBER = 'COUNT_LIKENUMBER';
export const CREATE_COMMENT = 'CREATE_COMMENT';

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

export const setLikeCounter = (likeCount) => {
  return {
    type: COUNT_LIKENUMBER,
    payload: { likeCount }
  };
};

export const setPostReview = (review) => {
  return {
    type: CREATE_REVIEW,
    payload: { review }
  };
};

export const setPostComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    payload: { comment }
  }
}

export const setOwnReview = (review) => {
  return {
    type: GET_OWNREVIEW,
    payload: review
  }
}

export const setReview = (review) => {
  return {
    type: GET_REVIEW,
    payload: review
  }
}

export const setSelectReview = (review) => {
  return {
    type: GET_SELECTREVIEW,
    payload: review
  }
}

export const setOwnViewCount = (ownCount) => {
  return {
    type: GET_OWNVIEWCOUNT,
    payload: ownCount
  }
}

export const setTotalViewCount = (totalCount) => {
  return {
    type: GET_TOTALVIEWCOUNT,
    payload: totalCount
  }
}

export const setOwnClipCount = (ownCount) => {
  return {
    type: GET_OWNCLIPCOUNT,
    payload: ownCount
  }
}

export const setOwnLikeCount = (likeCount) => {
  return {
    type: GET_OWNLIKECOUNT,
    payload: likeCount
  }
}

export const setLikeCount = (likeCount) => {
  return {
    type: GET_LIKECOUNT,
    payload: likeCount
  }
}

export const setTotalClipCount = (totalCount) => {
  return {
    type: GET_TOTALCLIPCOUNT,
    payload: totalCount
  }
}

export const postReview = (reviews) => (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const postComment = (comment) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  try {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const batch = firestore.batch();
    const userRef = firestore.collection('users').doc(authorId);
    const reviewCommentRef = firestore.collection('reviewComment').doc(comment.movieId);

    await batch.set((userRef), {
      reviewComment: {
        [comment.movieId]: {
          [comment.auth]: {
            comment: comment.comment,
            isToggle: comment.isToggle
          }
        }
      }
    }, { merge: true });
    await batch.set((reviewCommentRef), {
      [comment.auth]: {
        [authorId]: {
          comment: comment.comment,
          isToggle: comment.isToggle
        }
      }
    }, { merge: true });
    await batch.commit().then(console.log('done'));
    return dispatch(setPostComment(comment))
  } catch (error) {
    console.log(error)
  }
}

export const getSelectReview = (review) => (dispatch) => {
  console.log(review)
  dispatch(setSelectReview(review))
}

export const likeCounter = (likeCount) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(likeCount)
  try {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const batch = firestore.batch();
    const userRef = firestore.collection('users').doc(authorId);
    const likeCountRef = firestore.collection('likeCounter').doc(likeCount.movieId);

    await batch.set((userRef), {
      likeCount: {
        [likeCount.movieId]: {
          [likeCount.auth]: likeCount.isToggle
        }
      }
    }, { merge: true });
    await batch.set((likeCountRef), {
      [likeCount.auth]: {
        [authorId]: likeCount.isToggle
      }
    }, { merge: true });
    await batch.commit().then(console.log('done'));
    return dispatch(setLikeCounter(likeCount))
  } catch (error) {
    console.log(error)
  }
};

export const getLikeCount = (review) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(review)
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  const reviewAuth = review.authorId

  try {
    const reviewRef = firestore.collection('likeCounter').doc(review.movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      console.log(reviewDoc.data())
      dispatch(setOwnLikeCount(reviewDoc.data()[reviewAuth][authorId]))
      dispatch(setLikeCount(reviewDoc.data()[reviewAuth]))
    } else {
      console.log('No such document!')
      dispatch(setOwnLikeCount(undefined))
      dispatch(setLikeCount(undefined))
    }

  } catch (error) {
    console.log(error)
  }
}

export const getReview = (movieId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;

  try {
    const reviewRef = firestore.collection('reviews').doc(movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      dispatch(setOwnReview(reviewDoc.data()[authorId]))
      dispatch(setReview(reviewDoc.data()))

      return reviewDoc.data()[authorId]
    } else {
      console.log('No such document!')
      dispatch(setOwnReview(undefined))
      dispatch(setReview({}))
    }
  } catch (error) {
    console.log(error)
  }
};

export const getViewCount = (movieId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(movieId)
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;

  try {
    const reviewRef = firestore.collection('viewCounter').doc(movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      dispatch(setOwnViewCount(reviewDoc.data()[authorId]))
      dispatch(setTotalViewCount(reviewDoc.data()))
    } else {
      console.log('No such document!')
      dispatch(setOwnViewCount(undefined))
      dispatch(setTotalViewCount(undefined))
    }
  } catch (error) {
    console.log(error)
  }
}

export const getClipCount = (movieId) => async (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(movieId)
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;

  try {
    const reviewRef = firestore.collection('clipCounter').doc(movieId);
    const reviewDoc = await reviewRef.get();

    if (reviewDoc.exists) {
      dispatch(setOwnClipCount(reviewDoc.data()[authorId]))
      dispatch(setTotalClipCount(reviewDoc.data()))
    } else {
      console.log('No such document!')
      dispatch(setOwnClipCount(undefined))
      dispatch(setTotalClipCount(undefined))
    }
  } catch (error) {
    console.log(error)
  }
}

export const clipCounter = (clipCount) => async (dispatch, getState, { getFirebase, getFirestore }) => {
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
