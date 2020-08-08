/** @jsx jsx */

import { jsx, css } from '@emotion/core'
import Button from '../components/atoms/Button';
import SignForm from '../components/molecules/SignForm';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const signWrap = css({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const title = css({
  textAlign: 'center',
  margin: '46vh 0',
  fontSize: '3rem'
})

const subTitle = css({
  fontSize: '2rem',
  marginBottom: '2rem'
})

const signLeft = css({
  height: '100vh',
  width: '50%',
  backgroundColor: '#23589e',
  color: '#fff'
})

const signRight = css({
  width: '50%',
  display: 'flex',
  justifyContent: 'center'
})

const error = css({
  color: 'red',
  fontSize: '0.8rem'
})

const SignIn = ({ auth, signIn }) => {

  const handleSubmit = (values) => {
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

  return (
    <div css={signWrap}>
      <div css={signLeft}>
        <h2 css={title}>Movie Diary</h2>
      </div>
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          handleSubmit(values);
        }}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {props => {
          const { handleChange, errors, touched, isSubmitting } = props;
          return (
            <div css={signRight}>
              <div>
                <p css={subTitle}>Sign In</p>
                <Form>
                  <SignForm
                    signTitle="Email"
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    handleChange={handleChange}
                    errors={errors}
                    touched={touched}
                  />
                  {errors.email && touched.email && (<div css={error}>{errors.email}</div>)}
                  <SignForm
                    signTitle="Password"
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Password"
                    handleChange={handleChange}
                    errors={errors}
                    touched={touched}
                  />
                  {errors.password && touched.password && (<div css={error}>{errors.password}</div>)}
                  <Button btnText="Sign In" type="submit" submit={isSubmitting} style="signDefault" />
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;