import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = ({ signOut }) => {
    return (
        <ul>
            <li>Movie detail</li>
            <li><a onClick={signOut}>Log out</a></li>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
    );
};

export default SignedInLinks;