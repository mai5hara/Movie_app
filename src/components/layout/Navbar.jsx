import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({auth, profile}) => {
    // console.log(auth)
    // console.log(auth.uid)
    // console.log(auth.isLoaded)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks/>;
    return (
        <nav>
            <div>
                <Link to="/">Movie Buff</Link>
                { auth.isLoaded && links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);