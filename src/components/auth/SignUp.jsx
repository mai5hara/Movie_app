import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const SignUp = ({ auth, authError, signUp }) => {
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

    if (auth.uid) return <Redirect to="/" />

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name</p>
                    <input type="text" id="name" onChange={handleChange} />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <div>
                    <button>Sign Up</button>
                    <div>
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;