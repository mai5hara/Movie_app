import React from 'react';
// import SignEmail from '../components/molecules/SignEmail';
// import SignPassword from '../components/molecules/SignPassword';
// import SignInBtn from '../components/atoms/SignUpBtn';
import BtnStyle from '../components/atoms/BtnStyle';
import SignStyle from '../components/molecules/SignStyle';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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
    <>
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
            <>
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
                <BtnStyle btnText="Sign In" type="submit" submit={isSubmitting} />
                {/* <SignInBtn isSubmitting={isSubmitting} /> */}
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SignIn;