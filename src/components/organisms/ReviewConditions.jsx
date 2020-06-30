/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ReviewSelect from '../molecules/ReviewSelect';
import ReviewSpoiler from '../molecules/ReviewSpoiler';
import ReviewRadioBtn from '../molecules/ReviewRadioBtn';

const btnWrapStyles = css({
  display: 'block',
  position: 'relative',
  margin: '40px auto',
  height: 'auto',
  width: '500px',
  padding: '20px'
})

const ulStyles = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overFlow: 'auto',
  display: 'flex'
})

const listStyles = css({
  display: 'block',
  position: 'relative',
  color: '#AAAAAA',
  height: '100px',
  width: '100%',
  float: 'left'
})

const InputStyles = css({
  position: 'absolute',
  visibility: 'hidden'
})

const labelStyles = css({
  display: 'block',
  position: 'relative',
  padding: '25px 25px 25px 80px',
  zIndex: 9,
  margin: '10px auto',
  height: '30px',
  cursor: 'pointer',
  '&:hover': {
    color: '#ffc0cb',
  }
})

const radioBtnStyle = css({
  display: 'block',
  position: 'absolute',
  border: '5px solid #AAAAAA',
  borderRadius: '100%',
  height: '23px',
  width: '25px',
  top: '30px',
  left: '20px',
  zIndex: 5,
  transition: 'border 0.25s liner',
  webkitTransition: 'border 0.25s linear',
  '&:hover': {
    border: '30px solid #111111'
  },
  '&:before': {
    displat: 'block',
    position: 'absolute',
    content: '',
    borderRadius: '100%',
    width: '15px',
    top: '5px',
    left: '5px',
    margin: 'auto',
    transition: 'background 0.25s liner',
    webkitTransition: 'background 0.25s linear'
  }
})

const btnInside = css({

})


const ReviewConditions = ({ review, handleChangeRadio, handleChangeCheck, handleChange }) => {

  return (
    <div>
      <ReviewSelect review={review} handleChange={handleChange} />
      <ReviewSpoiler review={review} handleChangeCheck={handleChangeCheck} />
      <ReviewRadioBtn
        review={review}
        handleChangeRadio={handleChangeRadio}
        InputStyles={InputStyles}
        listStyles={listStyles}
        ulStyles={ulStyles}
        btnWrapStyles={btnWrapStyles}
        labelStyles={labelStyles}
        radioBtnStyle={radioBtnStyle}
        btnInside={btnInside}
      />
    </div>
  )
}

export default ReviewConditions;