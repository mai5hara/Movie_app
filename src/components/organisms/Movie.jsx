/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import MovieListBtns from '../molecules/MovieListBtns';

const Styles = {
    movieWrap: css`
        text-align: center;
    `,
    movieTitle: css`
        font-size: 1rem;
    `,
}

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie }) => {
    const poster = movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div css={Styles.movieWrap}>
            <h2 css={Styles.movieTitle}>{movie.Title}</h2>
            <div>
                <img
                    width="200px"
                    alt={`The movie title ${movie.Title}`}
                    src={poster}
                />
            </div>
            <MovieListBtns id={movie.imdbID} />
        </div>
    )
}

export default Movie;