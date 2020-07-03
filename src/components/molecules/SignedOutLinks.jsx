import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul>
            <li><NavLink to="/signin">Log in</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;