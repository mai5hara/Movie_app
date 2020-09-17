/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        height: 2.7rem;
        background-color: pink;
        font-size: 0.8rem;
    `,
    imageCount: css`
        display: flex;
        flex-direction: column;
    `,
    count: css`
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    countNum: css`
        margin-bottom: 0.2rem;
    `,
    movieList: css`
        width: 23%;
        display: flex;
        align-items: flex-end;
        margin: 0 0.4rem;
        text-decoration: none;
        color: #777777;
        &:hove {
            color: pink;
        }
    `,
}

const Movie = ({ movie, viewCountObj, clipCountObj, reviewObj }) => {
    const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const movieId = movie.imdbID
    const viewCount = viewCountObj[movieId]
    const clipCount = clipCountObj[movieId]
    const scoreCount = reviewObj[movieId]

    const countFunc = (count) => {
        if (count === undefined) {
            return 0
        } else {
            return Object.values(count).length
        }
    }

    const scoreFunc = (score) => {
        if (score === undefined) {
            return 0
        } else {
            let arr = []
            const scoreNum = Object.values(score).length;
            let scoreAverage;
            for (let key in scoreCount) {
                arr.push(Number(scoreCount[key].score))
                scoreAverage = arr.reduce((acc, current) => acc + current) / scoreNum
            }
            return Math.round(scoreAverage)
        }
    }

    const showViewCounts = countFunc(viewCount)
    const showClipCounts = countFunc(clipCount)
    const showReviewScore = scoreFunc(scoreCount)

    return (
        <Link
            to={`/movies/${movie.imdbID}`}
            key={movie.imdbID}
            css={Styles.movieList}
        >
            <div css={Styles.movieWrap}>
                <h2 css={Styles.movieTitle}>{movie.Title}</h2>
                <div css={Styles.imageCount}>
                    <img
                        width="100%"
                        alt={`The movie title ${movie.Title}`}
                        src={poster}
                    />
                    <div css={Styles.btnWrap}>
                        <div css={Styles.count}><span css={Styles.countNum}><FontAwesomeIcon icon={faEye} /></span><span>{showViewCounts}</span></div>
                        <div css={Styles.count}><span css={Styles.countNum}><FontAwesomeIcon icon={faMapPin} /></span><span>{showClipCounts}</span></div>
                        <div css={Styles.count}><span css={Styles.countNum}><FontAwesomeIcon icon={faStar} /></span><span>{showReviewScore}</span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Movie;