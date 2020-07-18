/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import React, { useState } from 'react';
// import SignEmail from '../components/molecules/SignEmail';
// import SignPassword from '../components/molecules/SignPassword';
// import SignInBtn from '../components/atoms/SignUpBtn';
import BtnStyle from '../components/atoms/BtnStyle';
import SignStyle from '../components/molecules/SignStyle';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { signInStyle } from '../components/atoms/BtnStyle';
import * as Yup from 'yup';

const signWrap = css({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#23589e'
})

const inputWrap = css({
  borderRadius: '15px',
  border: '2px solid #e249a2',
  backgroundColor: 'rgba(255,255,255,0.4)',
  padding: '7rem 15rem'
})

const input = css({
  height: '2rem',
  width: '18rem',
  borderRadius: '30px',
  userSelect: 'none',
  borderStyle: 'none',
  padding: '0 0.7rem'
})

const SignIn = ({ auth, signIn }) => {

  const handleSubmit = (values) => {
    console.log(values)
    signIn(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a correct email')
      .required('Enter an email'),
    password: Yup.string()
      .required('Enter a password'),
  })

  if (auth.uid) return <Redirect to="/" />;
  console.log(auth)

  return (
    <div css={signWrap}>
      <h2>Movie Dialy</h2>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          handleSubmit(values);
        }}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {props => {
          console.log(props)
          const { handleChange, errors, touched, isSubmitting } = props;
          console.log(handleChange)
          return (
            <div css={inputWrap}>
              <p>Sign In</p>
              <Form>
                <SignStyle
                  signTitle="Email"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
                {errors.email && touched.email && (<div>{errors.email}</div>)}
                <SignStyle
                  signTitle="Password"
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
                {errors.password && touched.password && (<div>{errors.password}</div>)}
                {/* <SignEmail
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                />
                <SignPassword
                  handleChange={handleChange}
                  errors={errors}
                  touched={touched}
                /> */}
                <BtnStyle btnText="Sign In" type="submit" submit={isSubmitting} btnStyle={signInStyle} />
                {/* <SignInBtn isSubmitting={isSubmitting} /> */}
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;