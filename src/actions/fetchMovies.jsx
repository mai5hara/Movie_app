// import {searchMovieRequest, SearchMovieSuccess, searchMovieFeilure} from '../actions/movieActions';

// export default function fetchMovies(value) {
//     return dispatch => {
//         dispatch(searchMovieRequest());
//         fetch(`https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`)
//         .then(res => res.json())
//         .then(jsonResponse => {
//             // if(res.error) {
//             //     throw(res.error);
//             // }
//         dispatch(SearchMovieSuccess(jsonResponse.Search));
//             return jsonResponse.Search;
//         })
//         .catch(error => {
//             dispatch(searchMovieFeilure(error));
//         })
//     }
// }