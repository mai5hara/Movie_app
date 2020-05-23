import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        console.log(this.state.email, this.state.password)
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/"/>

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Email</p>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" id="password" onChange={this.handleChange}/>
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