/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import React from 'react';
import Button from '../components/atoms/Button';

const mypageWrap = css({
  fontFamily: 'Gill sans',
  width: '80%',
  margin: '0 auto'
})

const userInfoDetail = css({
  display: 'flex'
})

const userInfo = css({
  display: 'flex',
})

const profileImg = css({
  width: '60px',
  height: '60px',
  borderRadius: '30px',
  backgroundColor: '#777777'
})

const userNames = css({
  fontsize: '2rem'
})

const userName = css({
  margin: 0
})

const Mypage = ({ profile }) => {
  console.log(profile)
  return (
    <div css={mypageWrap}>
      <h1>Mypage</h1>
      <div css={userInfoDetail}>
        <div css={userInfo}>
          <div css={profileImg}></div>
          <div css={userNames}>
            <p css={userName}>{profile.username}</p>
            <p css={userName}>@{profile.userid}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Follower</p>
            <p>0</p>
          </div>
          <div>
            <p>Following</p>
            <p>0</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <div>
        <p>View Movies</p>
        <p>Clip Movies</p>
        <p>Reviews</p>
      </div>
      <div>
        Movies
      </div>
    </div>
  )
};

export default Mypage;