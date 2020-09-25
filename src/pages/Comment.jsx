/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import ReviewInputStyle from '../components/molecules/ReviewInputStyle';
import Button from '../components/atoms/Button';
import ReviewSpoiler from '../components/molecules/ReviewSpoiler';

const commentWrap = css({
  width: '70%',
  margin: '3rem auto 6rem auto',
})

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

const buttons = css({
  padding: '0',
  margin: '0'
})

const btnWrap = css({
  display: 'flex',
  justifyContent: 'space-between',
})

const trash = css({
  color: '#FF6E00',
  cursor: 'pointer'
})

const cancelBtn = css({
  width: '25%'
})

const likeColor = ({ ownLikeCount }) => css({
  color: ownLikeCount ? '#c71585' : '#d3d3d3',
  cursor: 'pointer',
})

const Comment = ({
  likeCounter,
  selectReview,
  id,
  auth,
  ownLikeCount,
  getLikeCount,
  postComment,
  getComment,
  reviewComments,
  deleteComment
}) => {

  const likeBtnColor = likeColor({ ownLikeCount })

  const reviewAuth = selectReview.authorId

  const [likeToggle, setLikeToggle] = useState({
    reviewAuth,
    movieId: id,
    isToggle: false,
  });

  const [comment, setComment] = useState({
    reviewAuth,
    auth,
    movieId: id,
    comment: '',
    spoiler: false,
    id: uuidv4()
  })

  const handleChange = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      comment: e.target.value,
    })
  }

  const handleChangeCheck = () => {
    setComment({
      ...comment,
      spoiler: !comment.spoiler
    })
  }

  const likeHandleClick = () => {
    setLikeToggle({
      ...likeToggle,
      isToggle: !likeToggle.isToggle,
    });
    likeCounter(likeToggle);
    getLikeCount(selectReview)
  };

  const handleSubmit = () => {
    postComment(comment)
    setComment({
      comment: ''
    })
    getComment(selectReview)
  }

  const handleDeleteComment = () => {
    deleteComment(comment)
    getComment(selectReview)
  }

  useEffect(() => {
    getComment(selectReview)
  }, [])

  return (
    <section css={commentWrap}>
      <div css={reviewWrap}>
        <div css={acountImage}></div>
        <div css={reviewDetail}>
          <div css={nameWrap}>
            <p css={authorName}>{selectReview.authorName}</p>
            <p css={accountName}>@Mai</p>
          </div>
          <p css={buttons}>{selectReview.comment}</p>
          <hr></hr>
          <p onClick={likeHandleClick} css={likeBtnColor} ><FontAwesomeIcon icon={faHeart} /> Like!</p>
        </div>
      </div>
      {reviewComments && Object.values(reviewComments).map((comment) => {
        return (
          <div>
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
            <div css={btnWrap}>
              <p><FontAwesomeIcon icon={faHeart} /> Like!</p>
              {comment.auth === auth ? (
                <p css={trash} onClick={() => handleDeleteComment()}><FontAwesomeIcon icon={faTrashAlt} /></p>
              ) : (
                  null)}
            </div>
            <hr></hr>
          </div>
        )
      })}
      <div>
        <div>
          <ReviewSpoiler handleChangeCheck={handleChangeCheck} checked='checked' active={comment.spoiler ? true : false} />
          <ReviewInputStyle
            type="text"
            style="inputReviewStyle"
            handleChange={handleChange}
            multiline={true}
          />
        </div>
        <div css={btnWrap}>
          <Link to={`/movies/${id}`} css={cancelBtn}>
            <Button text="Cancel" style="cancelBtn" />
          </Link>
          <Button style="publishBtn" text="Send" onClick={handleSubmit} />
        </div>
      </div>
    </section>
  )
}

export default Comment;