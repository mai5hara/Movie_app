import React from 'react';

const SignInBtn = ({ isSubmitting }) => {
  return (
    <button type="submit" disabled={isSubmitting}>Sign In</button>
  )
}
export default SignInBtn;