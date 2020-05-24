import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({movie}) => {
    console.log(movie)
    const poster = movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    // const handleClick =(e) => {
    //     e.preventDefault();
    //     const targetImdbID = e.currentTarget.getAttribute('datatype');
    //     console.log(targetImdbID)
    //     plot(targetImdbID)
    // }

    return (
        // <div datatype={movie.imdbID} onClick={handleClick}>
        <div>
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

export default Movie;