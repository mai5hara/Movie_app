import React from 'react';
import { Field } from 'formik';

const SignPassword = ({ handleChange, errors, touched }) => {
  return (
    <div>
      <p>Password</p>
      <Field
        name="password"
        type="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && touched.password && (<div>{errors.password}</div>)}
    </div>
  )
};

export default SignPassword;