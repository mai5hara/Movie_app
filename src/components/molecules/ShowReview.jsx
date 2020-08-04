/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const reviewWrap = css({
  display: 'flex',
  margin: '1.5rem 0'
})

const acountImage = css({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#777777'
})

const reviewDetail = css({
  width: '100%',
  marginLeft: '1rem'
})

const nameWrap = css({
  height: '60px',
  marginbottom: '0.8rem'
})

const authorName = css({
  fontSize: '1.3rem',
  margin: '0'
})

const accountName = css({
  fontSize: '1.1rem',
  margin: '0.4rem 0 0 0'
})

const scores = css({
  display: 'flex',
  marginBottom: '0.8rem'
})

const buttons = css({
  padding: '0',
  margin: '0'
})

const linkToReview = css({
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#222222'
})

const ShowReview = ({ review, movieId, getSelectReview, getLikeCount, totalLikeCount, history }) => {
  console.log(history)

  const counter = (count) => {
    if (!count) {
      return 0
    }
    const res = Object.values(count).filter(value => value)
    return res.length
  }

  const showTotalLikeCount = counter(totalLikeCount)
  console.log(showTotalLikeCount)

  const handleClick = () => {
    history.push(`/${movieId}/${review.authorName}`)
    getSelectReview(review)
    getLikeCount(review)
  }

  useEffect(() => {
    getLikeCount(review);
  }, [])

  return (
    <Link to={`/${movieId}/${review.authorName}`} onClick={handleClick} css={linkToReview}>
      <section>
        <div css={reviewWrap}>
          <div css={acountImage}></div>
          <div css={reviewDetail}>
            <div css={nameWrap}>
              <p css={authorName}>{review.authorName}</p>
              <p css={accountName}>@Mai</p>
            </div>
            <div css={scores}>
              <p css={buttons}><FontAwesomeIcon icon={faStar} /> {review.score}</p>&nbsp;&nbsp;
              <p css={buttons}><FontAwesomeIcon icon={faHeart} /> {showTotalLikeCount}</p>&nbsp;&nbsp;
              <p css={buttons}><FontAwesomeIcon icon={faCommentAlt} /> 2</p>
            </div>
            <p css={buttons}>{review.comment}</p>
          </div>
        </div>
        <hr></hr>
      </section>
    </Link>
  )
};

export default ShowReview;
