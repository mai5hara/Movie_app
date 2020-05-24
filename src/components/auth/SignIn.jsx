import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignIn = ({auth, authError, signIn}) => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(state)
    }

    if (auth.uid) return <Redirect to="/"/>

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Email</p>
                        <input type="email" id="email" onChange={handleChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" id="password" onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Sign In</button>
                        <div>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);