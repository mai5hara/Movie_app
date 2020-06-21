import React from 'react';
import { Field } from 'formik';

const SignEmail = ({ handleChange, errors, touched }) => {
  return (
    <div>
      <p>Email</p>
      <Field
        name="email"
        type="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {errors.email && touched.email && (<div>{errors.email}</div>)}
    </div>
  )
};

export default SignEmail;