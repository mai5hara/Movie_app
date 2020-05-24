export const searchMovieRequest = () => {
    return {
        type: 'SEARCH_MOVIES_REQUEST'
    }
}

export const searchMovieSuccess = (movies) => {
    console.log(movies)
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
        payload: {movies}
    }
}

export const searchMovieFeilure = (error) => {
    return {
        type: 'SEARCH_MOVIES_FAILURE',
        payload: error
    }
}

export const searchPlotSuccess = (movieDetail) => {
    console.log(movieDetail)
    return {
        type: 'SEARCH_PLOT_SUCCESS',
        payload: movieDetail
    }
}

export const searchPlotFailure = (error) => {
    return {
        type: 'SEARCH_PLOT_FAILURE',
        payload: error
    }
}

export const fetchMovies = (value) => {
    return dispatch => {
        dispatch(searchMovieRequest());

        fetch(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(searchMovieSuccess(data.Search));
            // return jsonResponse.Search;
        })
        .catch(error => {
            dispatch(searchMovieFeilure(error));
        })
    }
}

export const fetchPlot = (targetImdbID) => {
    console.log(targetImdbID)
    return dispatch => {
        fetch(`http://www.omdbapi.com/?apikey=4a3b711b&i=${targetImdbID}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(searchPlotSuccess(data));
        })
        .catch(error => {
            dispatch(searchPlotFailure(error));
        })
    }
}