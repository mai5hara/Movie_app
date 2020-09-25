/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faMapPin, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const movieWrap = css({
    textAlign: 'center',
    width: '100%'
})
const movieTitle = css({
    fontSize: '0.8rem'
})
const btnWrap = css({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    margin: '0 auto',
    height: '2.7rem',
    fontSize: '0.8rem'
})
const imageCount = css({
    display: 'flex',
    flexDirection: 'column'
})
const countWrap = (active) => css({
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: active ? '#A30076' : '#D8D8D8',
    justifyContent: 'center'
})
const countNum = (active) => css({
    color: active ? '#ffffff' : '#8D8D8D',
})
const countIcon = (active) => css(
    countNum(active), {
    marginBottom: '0.2rem',
})
const scoreWrap = css(
    countWrap(), {
    backgroundColor: '#ffffff'
})
const scoreNum = css({
    color: '#A30076',
})
const scoreIcon = css(
    scoreNum, {
    marginBottom: '0.2rem',
})
const movieList = css({
    width: '23%',
    display: 'flex',
    alignItems: 'flex-end',
    margin: '0 0.4rem',
    textDecoration: 'none',
    color: '#777777',
    '&:hove': {
        color: 'pink'
    }
})

const Movie = ({ movie, auth, viewCountObj, clipCountObj, reviewObj }) => {

    const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const movieId = movie.imdbID
    const viewCount = viewCountObj[movieId]
    const clipCount = clipCountObj[movieId]
    const scoreCount = reviewObj[movieId]

    const findViewAuth = viewCount && Object.keys(viewCount).indexOf(auth) !== -1
    const findClipAuth = clipCount && Object.keys(clipCount).indexOf(auth) !== -1

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
            css={movieList}
        >
            <div css={movieWrap}>
                <h2 css={movieTitle}>{movie.Title}</h2>
                <div css={imageCount}>
                    <img
                        width="100%"
                        alt={`The movie title ${movie.Title}`}
                        src={poster}
                    />
                    <div css={btnWrap}>
                        <div css={countWrap(findViewAuth)}><span css={countIcon(findViewAuth)}><FontAwesomeIcon icon={faEye} /></span><span css={countNum(findViewAuth)}>{showViewCounts}</span></div>
                        <div css={countWrap(findClipAuth)}><span css={countIcon(findClipAuth)}><FontAwesomeIcon icon={faMapPin} /></span><span css={countNum(findClipAuth)}>{showClipCounts}</span></div>
                        <div css={scoreWrap}><span css={scoreIcon}><FontAwesomeIcon icon={faStar} /></span><span css={scoreNum}>{showReviewScore}</span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Movie;