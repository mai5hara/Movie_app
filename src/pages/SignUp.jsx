import React from 'react';
// import SignEmail from '../components/molecules/SignEmail';
// import SignPassword from '../components/molecules/SignPassword';
// import SignName from '../components/molecules/SignName';
// import SignConfirm from '../components/molecules/SignConfirm';
// import SignUpBtn from '../components/atoms/SignUpBtn';
import BtnStyle from '../components/atoms/BtnStyle';
import SignStyle from '../components/molecules/SignStyle';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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
        <>
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
                    console.log(props)
                    return (
                        <Form>
                            <SignStyle
                                signTitle="Name"
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Name"
                                handleChange={handleChange}
                                errors={errors}
                                touched={touched}
                            />
                            {errors.name && touched.name && (<div>{errors.name}</div>)}
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
                            <SignStyle
                                signTitle="Confirm Password"
                                name="confirmpassword"
                                type="password"
                                id="confirmpassword"
                                placeholder="Confirm Password"
                                handleChange={handleChange}
                                errors={errors}
                                touched={touched}
                            />
                            {errors.confirmpassword && touched.confirmpassword && (<div>{errors.confirmpassword}</div>)}
                            {/* <SignName
                                handleChange={handleChange}
                                errors={errors}
                                touched={touched}
                            />
                            <SignEmail
                                handleChange={handleChange}
                                errors={errors}
                                touched={touched}
                            />
                            <SignPassword
                                handleChange={handleChange}
                                errors={errors}
                                touched={touched}
                            />
                            <SignConfirm
                                handleChange={handleChange}
                                errors={errors}
                                touched={touched}
                            /> */}
                            <BtnStyle btnText="Sign Up" type="submit" submit={isSubmitting} />
                            {/* <SignUpBtn isSubmitting={isSubmitting} /> */}
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default SignUp;