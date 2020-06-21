import React from 'react';
import { Field } from 'formik';

const SignName = ({ handleChange, errors, touched }) => {
  return (
    <div>
      <p>Name</p>
      <Field
        name="name"
        type="text"
        id="name"
        placeholder="Name"
        onChange={handleChange}
      />
      {errors.name && touched.name && (<div>{errors.name}</div>)}
    </div>
  )
};

export default SignName;