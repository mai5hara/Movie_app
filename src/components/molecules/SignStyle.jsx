/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import { Field } from 'formik';

const inputField = css({
  marginBottom: '1.5rem'
})

const input = css({
  height: '2rem',
  width: '18rem',
  borderRadius: '30px',
  userSelect: 'none',
  borderStyle: 'none',
  padding: '0 0.7rem'
})

const p = css({
  fontSize: '0.8rem',
  marginBottom: '0.4rem',
  marginLeft: '1rem',
})

const SignStyle = ({ signTitle, handleChange, errors, touched, name, type, id, placeholder }) => {

  return (
    <div css={inputField}>
      <p css={p}>{signTitle}</p>
      <Field
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        css={input}
      />
    </div>
  )
};

export default SignStyle;