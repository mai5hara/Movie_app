import React from 'react';

const SignUpBtn = ({ isSubmitting }) => {
  return (
    <button type="submit" disabled={isSubmitting}>Sign In</button>
  )
}
export default SignUpBtn;