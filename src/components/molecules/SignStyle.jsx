/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Field } from 'formik';

const inputField = css({
  marginTop: '1.8rem',
  marginBottom: '0.7rem'
})

const fielsStyle = css({
  height: '2.1rem',
  width: '25rem',
  borderRadius: '30px',
  userSelect: 'none',
  border: '1.5px solid #e249a2',
  padding: '0 0.7rem',
  outline: 'none'
})

const title = css({
  fontSize: '1rem',
  marginBottom: '0.6rem',
  marginLeft: '0.6rem',
})

const SignStyle = ({ signTitle, handleChange, errors, touched, name, type, id, placeholder }) => {

  return (
    <div css={inputField}>
      <p css={title}>{signTitle}</p>
      <Field
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        css={fielsStyle}
      />
    </div>
  )
};

export default SignStyle;