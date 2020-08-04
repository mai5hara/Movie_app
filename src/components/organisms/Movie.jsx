/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';

const Styles = {
    movieWrap: css`
        text-align: center;
        width: 100%;
    `,
    movieTitle: css`
        font-size: 0.8rem;
    `,
    btnWrap: css`
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
        height: 2rem;
        line-height: 2rem;
        background-color: pink;
        font-size: 0.8rem;
    `,
    imageCount: css`
        display: flex;
        flex-direction: column;
    `,
    count: css`
        width: 33%;
    `,
}

const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({ movie, getClipCount, getViewCount, totalViewCount, totalClipCount }) => {

    const poster = movie.poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div css={Styles.movieWrap}>
            <h2 css={Styles.movieTitle}>{movie.Title}</h2>
            <div css={Styles.imageCount}>
                <img
                    width="100%"
                    alt={`The movie title ${movie.Title}`}
                    src={poster}
                />
                <div css={Styles.btnWrap}>
                    <div css={Styles.count}><FontAwesomeIcon icon={faEye} /></div>
                    <div css={Styles.count}><FontAwesomeIcon icon={faMapPin} /></div>
                    <div css={Styles.count}><FontAwesomeIcon icon={faStar} /></div>
                </div>
            </div>

        </div>
    )
}

export default Movie;