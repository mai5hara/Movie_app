/** @jsx jsx */

import React, { useState } from 'react';
import { jsx, css } from '@emotion/core'
import MovieDetailBtns from '../molecules/MovieDetailBtns';

const Styles = {
    movieWrap: css`
        text-align: center;
    `,
    movieTitle: css`
        font-size: 1rem;
    `,
}

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie, reviews, auth }) => {
    const poster = movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    console.log({ reviews })
    return (
        <div css={Styles.movieWrap}>
            <h2 css={Styles.movieTitle}>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie title ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>{movie.poster}</p>
            {/* <MovieDetailBtns id={movie.imdbID} reviews={reviews} /> */}
        </div>
    )
}

export default Movie;