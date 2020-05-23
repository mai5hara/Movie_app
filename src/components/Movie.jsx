import React from 'react';
import {fetchPlot} from '../store/actions/movieActions';


const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({movie, plot}) => {
    console.log(movie)
    console.log(plot)
    // console.log({fetchPlot})
    const poster = movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const handleClick =(e) => {
        e.preventDefault();
        const targetImdbID = e.currentTarget.getAttribute('datatype');
        console.log(targetImdbID)
        plot(targetImdbID)
    }

    return (
        <div datatype={movie.imdbID} onClick={handleClick}>
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie title ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>{movie.poster}</p>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         id: state.movieList.id
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchPlot: (id) => dispatch => dispatch(fetchPlot(id))
//     }
// }

export default Movie;
// export default connect (mapStateToProps,mapDispatchToProps)(movie)