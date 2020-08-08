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

const signLeft = css({
    height: '100vh',
    width: '50%',
    backgroundColor: '#23589e',
    color: '#fff'
})

const subTitle = css({
    fontSize: '2rem',
    marginBottom: '2rem'
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

const SignUp = ({ auth, signUp }) => {

    const handleSubmit = (value) => {
        signUp(value)
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Please Enter your name'),
        email: Yup.string()
            .email('Please Enter a correct email')
            .required('Please Enter your email'),
        password: Yup.string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
            ),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null])
    })

    if (auth.uid) return <Redirect to="/" />

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
                initialValues={{ name: '', email: '', password: '', confirmpassword: '' }}
                validationSchema={validationSchema}
            >
                {props => {
                    const { handleChange, errors, touched, isSubmitting } = props;
                    return (
                        <div css={signRight}>
                            <div>
                                <p css={subTitle}>Sign Up</p>
                                <Form>
                                    <SignForm
                                        signTitle="Name"
                                        name="name"
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        handleChange={handleChange}
                                        errors={errors}
                                        touched={touched}
                                    />
                                    {errors.name && touched.name && (<div css={error}>{errors.name}</div>)}
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
                                    <SignForm
                                        signTitle="Confirm Password"
                                        name="confirmpassword"
                                        type="password"
                                        id="confirmpassword"
                                        placeholder="Confirm Password"
                                        handleChange={handleChange}
                                        errors={errors}
                                        touched={touched}
                                    />
                                    {errors.confirmpassword && touched.confirmpassword && (<div css={error}>{errors.confirmpassword}</div>)}
                                    <Button btnText="Sign Up" type="submit" submit={isSubmitting} style="signDefault" />
                                </Form>
                            </div>
                        </div>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUp;