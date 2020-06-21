import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut }) => {
    return (
        <ul>
            <li>Movie detail</li>
            <li><a onClick={signOut}>Log out</a></li>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);