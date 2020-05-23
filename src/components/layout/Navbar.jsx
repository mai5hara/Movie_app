import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <div>
            <h1>Movie Buff</h1>
            <p>My page</p>
            <Link to='/signin'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}

export default Navbar;