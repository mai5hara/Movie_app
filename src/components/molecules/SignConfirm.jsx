import React from 'react';
import { Field } from 'formik';

const SignConfirm = ({ handleChange, errors, touched }) => {
  return (
    <div>
      <p>Confirm Password</p>
      <Field
        name="confirmpassword"
        type="password"
        id="confirmpassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      {errors.confirmpassword && touched.confirmpassword && (<div>{errors.confirmpassword}</div>)}
    </div>
  )
};

export default SignConfirm;