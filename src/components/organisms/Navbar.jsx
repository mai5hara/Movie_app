import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../molecules/SignedInLinks';
import SignedOutLinks from '../molecules/SignedOutLinks';

const Navbar = ({ auth, profile, signOut, signIn, signUp }) => {
  const links = auth.uid ? <SignedInLinks signOut={signOut} /> : <SignedOutLinks signIn={signIn} signUp={signUp} auth={auth} />;
  return (
    <nav>
      <div>
        <Link to="/">Movie Buff</Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

export default Navbar;
