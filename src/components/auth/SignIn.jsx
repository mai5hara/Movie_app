import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignIn = ({ auth, authError, signIn }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(state);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a correct email')
      .required('Enter an email'),
    password: Yup.string()
      .required('Enter a password'),
  })

  if (auth.uid) return <Redirect to="/" />;

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        <>
          <Form>
            <p>Email</p>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <p>Password</p>
            <Field
              name="password"
              type="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
            />
            {/* <div>
              <input type="email" id="email" onChange={handleChange} />
            </div> */}
            {/* <div>
              <p>Password</p>
              <input type="password" id="password" onChange={handleChange} />
            </div> */}
          </Form>
          <div>
            <button>Sign In</button>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </div>
        </>
      </Formik>
    </>
  );
};

export default SignIn;