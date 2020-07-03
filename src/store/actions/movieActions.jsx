const axios = require('axios');
export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SECCESS = 'SEARCH_MOVIES_SECCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SEARCH_PLOT_SUCCESS = 'SEARCH_PLOT_SUCCESS';
export const SEARCH_PLOT_FAILURE = 'SEARCH_PLOT_FAILURE';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const COUNT_VIEWNUMBER = 'COUNT_VIEWNUMBER';


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

// export const viewCounter = (viewToggle) => {
//   console.log(viewToggle);
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     // const firebase = getFirebase();
//     const profile = getState().firebase.profile;

//     if (viewToggle.isToggle === true) {
//       firestore
//         .collection('viewCounter')
//         .add({
//           ...viewToggle,
//           authorName: profile.name,
//         })
//         .then(() => {
//           dispatch({ type: COUNT_VIEWNUMBER, viewToggle });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       firestore
//         .collection('viewCounter')
//         .doc(viewToggle.viewCountsId)
//         .delete()
//         .then(() => {
//           console.log('deleted!');
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };
// };



// export const viewCounter = (viewToggle) => async (ispatch, getState, { getFirebase, getFirestore }) => {
//   console.log(viewToggle);
//   // return (dispatch, getState, { getFirebase, getFirestore }) => {
//   const firestore = getFirestore();
//   const firebase = getFirebase();
//   // const profile = getState().firebase.profile;
//   const authorId = getState().firebase.auth.uid;
//   const viewCounter = firestore.collection('viewCounter');
//   const viewCountUserId = firestore.collection('viewCounter').doc(authorId);
//   const usersViewId = firestore.collection('users').doc(authorId);
//   const profile = getState().firebase.profile;

//   // const upDateViewCount = updateViewCount = async count => {
//   try {
//     // let batch = firestore.batch();
//     await fireStore.runTransaction(async transaction => {
//       await transaction.get(userView);
//       await transaction.update(userView, {
//         [`viewlist.${viewToggle.movieId}: ${viewToggle.isToggle}`]
//       });

//     })
//   } catch (error) {
//     console.log(error)
//   }
//   // }
// }

// const autoId = (model) => {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   let autoId = ''
//   for (let i = 0; i < 20; i++) {
//     autoId += chars.charAt(Math.floor(Math.random() * chars.length))
//   }
//   return autoId
// }

// export const viewCounter = (viewCountToggle) => async (dispatch, getState, { getFirebase, getFirestore }) => {
//   console.log(viewCountToggle)
//   const firestore = getFirestore();
//   const firebase = getFirebase();
//   const today = new Date(Date.now());
//   const authorId = getState().firebase.auth.uid;
//   const profile = getState().firebase.profile;
//   console.log(authorId)
//   console.log(profile)
//   const newViewCounter = autoId('count')
//   // const viewCount = autoId('viewCount');
//   // const viewCountRef = firestore.collection('viewCounter').dog(authorId);
//   const viewCountRef = firestore.collection('viewCounter').doc('5V6XsnvPaM9PW67Yc2ti');
//   const userRef = firestore.collection('users').doc(authorId);
//   console.log(viewCountRef)
//   console.log(userRef)
//   firestore.runTransaction(async transaction => {
//     // try {
//     await Promise.all(transaction.get(userRef), transaction.get(viewCountRef))
//     // transaction.get(viewCountRef)
//     transaction.set(viewCountRef, {
//       views: {
//         ...viewCountToggle,
//       }
//       // authorName: profile.name,
//       // createdAt: today,
//       // updatedAt: today
//       // viewCountId: 'testtest'
//     })
//     transaction.set(userRef, {
//       views: {
//         ...viewCountToggle,
//       }
//       // password: '112233Aaa@',
//     })
//   })
//     .then(() => {
//       return dispatch({ type: COUNT_VIEWNUMBER, viewCountToggle });
//     })

//     // } 
//     .catch(error => {
//       console.log(error)

//     })
// }

export const viewCounter = (viewCountToggle) => async (dispatch, getState, { getFirebase, getFirestore }) => {

  try {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const batch = firestore.batch();
    const userRef = firestore.collection('users').doc(authorId);
    const viewCountRef = firestore.collection('viewCounter').doc(authorId);

    await batch.update((userRef), {
      reviewCount: {
        [viewCountToggle.movieId]: viewCountToggle.isToggle
      }
    });

    await batch.set((viewCountRef), {
      ...viewCountToggle,
    })

    // if (authorId === viewCountToggle.auth) {
    //   await batch.update((viewCountRef), {
    //     ...viewCountToggle,
    //     authId: authorId
    //   })
    // }

    await batch.commit().then(console.log('done'));
  } catch (error) {
    console.log(error)
  }
}




export const fetchMovies = (value) => async (dispatch) => {
  dispatch(searchMovieRequest());
  try {
    const res = await axios.get(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`);
    const data = res.data;
    return dispatch(searchMovieSuccess(data.Search));
  } catch (error) {
    return dispatch(searchMovieFeilure(error));
  }
}

export const fetchPlot = (targetImdbID) => async (dispatch) => {
  try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=4a3b711b&i=${targetImdbID}`);
    const data = res.data;
    return dispatch(searchPlotSuccess(data));
  } catch (error) {
    return dispatch(dispatch(searchPlotFailure(error)));
  }
}

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
