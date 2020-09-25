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

const ShowReview = ({
  review,
  movieId,
  getSelectReview,
  getLikeCount,
  totalLikeCount,
  totalCommentCount,
  getComment
}) => {

  const getSelectLinkCount = (totalCount) => {
    for (let totalKey in totalCount) {
      if (review.authorId === totalKey) {
        return Object.keys(totalCount[totalKey]).length
      }
    }
  }

  const showTotalLikeCount = getSelectLinkCount(totalLikeCount)
  const showTotalCommentCount = getSelectLinkCount(totalCommentCount)

  const handleClick = () => {
    getSelectReview(review)
    getLikeCount(review)
    getComment(review)
  }

  useEffect(() => {
    getLikeCount(review);
    getComment(review)
  }, [])

  return (
    <Link to={`/movies/${movieId}/comments/${review.userid}`} onClick={handleClick} css={linkToReview}>
      <section>
        <div css={reviewWrap}>
          <div css={acountImage}></div>
          <div css={reviewDetail}>
            <div css={nameWrap}>
              <p css={authorName}>{review.username}</p>
              <p css={accountName}>@{review.userid}</p>
            </div>
            <div css={scores}>
              <p css={buttons}><FontAwesomeIcon icon={faStar} /> {review.score}</p>&nbsp;&nbsp;
              <p css={buttons}><FontAwesomeIcon icon={faHeart} /> {!showTotalLikeCount ? '0' : showTotalLikeCount}</p>&nbsp;&nbsp;
              <p css={buttons}><FontAwesomeIcon icon={faCommentAlt} /> {!showTotalCommentCount ? '0' : showTotalCommentCount}</p>
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
