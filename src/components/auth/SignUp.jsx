import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
    state = {
        name: '',
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
        this.props.signUp(this.state)
        console.log(this.state.email, this.state.password)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p>Name</p>
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
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