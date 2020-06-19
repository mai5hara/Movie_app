export const searchMovieRequest = () => {
  return {
    type: 'SEARCH_MOVIES_REQUEST',
  };
};

export const searchMovieSuccess = (movies) => {
  console.log(movies);
  // return (dispatch, {getFirestore, getFirebase}) => {
  //     const firestore = getFirestore();
  //     const firebase = getFirebase();

  //     firestore.collection('movies').add({
  //         ...movies,
  //         movie: firestore.movie
  //     }).then(() => {
  //         dispatch({type: 'SEARCH_MOVIES_SECCESS', movies})
  //     }).catch((err) => {
  //         console.log(err)
  //     })
  return {
    type: 'SEARCH_MOVIES_SECCESS',
    payload: { movies },
  };
};

export const searchMovieFeilure = (error) => {
  return {
    type: 'SEARCH_MOVIES_FAILURE',
    payload: error,
  };
};

export const searchPlotSuccess = (movieDetail) => {
  console.log(movieDetail);
  return {
    type: 'SEARCH_PLOT_SUCCESS',
    payload: movieDetail,
  };
};

export const searchPlotFailure = (error) => {
  return {
    type: 'SEARCH_PLOT_FAILURE',
    payload: error,
  };
};

export const postReview = (review) => {
  console.log(review);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(profile);
    console.log(authorId);

    firestore
      .collection('reviews')
      .add({
        ...review,
        authorName: profile.name,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_REVIEW', review });
        console.log(review);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const viewCounter = (viewToggle) => {
  console.log(viewToggle);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    // const firebase = getFirebase();
    const profile = getState().firebase.profile;

    if (viewToggle.isToggle === true) {
      firestore
        .collection('viewCounter')
        .add({
          ...viewToggle,
          authorName: profile.name,
        })
        .then(() => {
          dispatch({ type: 'COUNT_VIEWNUMBER', viewToggle });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      firestore
        .collection('viewCounter')
        .doc(viewToggle.viewCountsId)
        .delete()
        .then(() => {
          console.log('deleted!');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

// export const viewCountRemove = (vewToggle) => {

// }

export const fetchMovies = (value) => {
  return (dispatch) => {
    dispatch(searchMovieRequest());

    fetch(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(searchMovieSuccess(data.Search));
        // return jsonResponse.Search;
      })
      .catch((error) => {
        dispatch(searchMovieFeilure(error));
      });
  };
};

export const fetchPlot = (targetImdbID) => {
  console.log(targetImdbID);
  return (dispatch) => {
    fetch(`http://www.omdbapi.com/?apikey=4a3b711b&i=${targetImdbID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(searchPlotSuccess(data));
      })
      .catch((error) => {
        dispatch(searchPlotFailure(error));
      });
  };
};

export const test = (viewToggle) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection(`users/${authorId}/viewCounter`)
      .add(viewToggle)
      .then(() => {
        dispatch({ type: 'COUNT_VIEWNUMBER', viewToggle });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
