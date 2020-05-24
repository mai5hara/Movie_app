import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

const SignUp = ({auth, authError, signUp}) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    console.log(state)

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(state)
    }

    if (auth.uid) return <Redirect to="/"/>

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Name</p>
                        <input type="text" id="name" onChange={handleChange}/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" id="email" onChange={handleChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" id="password" onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Sign Up</button>
                        <div>
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);