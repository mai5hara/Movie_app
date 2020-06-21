import React from 'react';
import { Field } from 'formik';

const SignStyle = ({ signTitle, handleChange, errors, touched, name, type, id, placeholder }) => {
  return (
    <div>
      <p>{signTitle}</p>
      <Field
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
};

export default SignStyle;