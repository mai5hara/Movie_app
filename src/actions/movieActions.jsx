export const SEARCH_MOVIES_REQUEST   = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SECCESS = 'SEARCH_MOVIES_SECCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
export const SEARCH_PLOT_SUCCESS = 'SEARCH_PLOT_SUCCESS';
export const SEARCH_PLOT_FAILURE = 'SEARCH_PLOT_FAILURE';

export const searchMovieRequest = () => {
    return {
        type: 'SEARCH_MOVIES_REQUEST'
    }
}

export const SearchMovieSuccess = (movies) => {
    console.log(movies)
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

export const searchPlotSuccess = (id) => {
    console.log(id)
    return {
        type: 'SEARCH_PLOT_SUCCESS',
        payload: {id}
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
            dispatch(SearchMovieSuccess(data.Search));
            // return jsonResponse.Search;
        })
        .catch(error => {
            dispatch(searchMovieFeilure(error));
        })
    }
}

export const fetchPlot = (targetImdbID) => {
    return dispatch => {
        fetch(`http://www.omdbapi.com/?apikey=4a3b711b&i=${targetImdbID}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(searchPlotSuccess(data.Search));
        })
        .catch(error => {
            dispatch(searchPlotFailure(error));
        })
    }
}