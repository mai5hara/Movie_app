/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
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

const likeColor = ({ ownLikeCount }) => css({
  color: ownLikeCount ? '#c71585' : '#d3d3d3',
  cursor: 'pointer',
})

const Comment = ({ likeCounter, selectReview, id, ownLikeCount, getLikeCount, postComment, getReview, review }) => {

  const likeBtnColor = likeColor({ ownLikeCount })

  const auth = selectReview.authorId

  const [likeToggle, setLikeToggle] = useState({
    ...selectReview,
    // auth,
    // movieId: id,
    likes: false,
  });

  const [comment, setComment] = useState({
    auth,
    movieId: id,
    comment: '',
    isToggle: false
  })

  const handleChange = (e) => {
    e.preventDefault();
    setComment({
      ...comment,
      comment: e.target.value
    })
  }

  const likeHandleClick = (e) => {

    e.preventDefault();
    setLikeToggle({
      ...likeToggle,
      likes: !likeToggle.likes,
    });
    likeCounter(likeToggle);
    // getLikeCount(selectReview)
    getReview(id)
  };

  const handleSubmit = () => {
    postComment(comment)
    setComment({
      ...comment,
      comment: ''
    })
  }

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
      <div>
        {/* <ReviewSpoiler /> */}
        <textarea onChange={handleChange}></textarea>
        <Button style="publishBtn" text="Send" onClick={handleSubmit} />
      </div>
    </section>
  )
}

export default Comment;